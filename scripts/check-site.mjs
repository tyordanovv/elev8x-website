// Post-build SEO and link checks for dist/. Fails (exit 1) on any error.
// Usage: node scripts/check-site.mjs [--allow-todo]
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { parse } from 'node-html-parser';

const DIST = 'dist';
const ORIGIN = 'https://elev8x.eu';
const allowTodo = process.argv.includes('--allow-todo');

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = walk(DIST).filter((f) => f.endsWith('.html'));
const urlOf = (file) => {
  const rel = relative(DIST, file).split(sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
};
const exists = (path) => {
  const clean = decodeURIComponent(path.split('#')[0].split('?')[0]);
  if (clean === '/' || clean === '') return existsSync(join(DIST, 'index.html'));
  const p = join(DIST, clean);
  return existsSync(p) && statSync(p).isFile() ? true : existsSync(join(p, 'index.html'));
};

// Visible text of an element, one space between text nodes, without scripts and styles.
const visibleText = (node) =>
  node.childNodes
    .map((c) => (c.nodeType === 3 ? c.text : ['SCRIPT', 'STYLE', 'TEMPLATE'].includes(c.tagName) ? '' : visibleText(c)))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

const errors = [];
const warnings = [];
const titles = new Map();
const descriptions = new Map();
const inbound = new Map();
const pages = new Map();

for (const file of files) {
  const url = urlOf(file);
  const html = readFileSync(file, 'utf8');
  const root = parse(html, { comment: false });
  const is404 = url === '/404.html';
  const err = (m) => errors.push(`${url}: ${m}`);

  const lang = root.querySelector('html')?.getAttribute('lang');
  if (!lang) err('missing <html lang>');

  const h1s = root.querySelectorAll('h1');
  if (h1s.length !== 1) err(`expected exactly one <h1>, found ${h1s.length}`);

  const title = root.querySelector('title')?.text.trim();
  if (!title) err('missing <title>');
  else if (!is404) titles.set(title, [...(titles.get(title) ?? []), url]);

  const desc = root.querySelector('meta[name="description"]')?.getAttribute('content')?.trim();
  if (!desc) err('missing meta description');
  else if (!is404) descriptions.set(desc, [...(descriptions.get(desc) ?? []), url]);

  const noindex = /noindex/.test(root.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '');
  const canonical = root.querySelector('link[rel="canonical"]')?.getAttribute('href');
  if (!noindex) {
    if (!canonical) err('missing canonical');
    else if (canonical !== ORIGIN + url) err(`canonical ${canonical} does not match ${ORIGIN + url}`);
  }

  const alternates = root
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .map((l) => ({ lang: l.getAttribute('hreflang'), href: l.getAttribute('href') }));
  if (!noindex) {
    if (!alternates.some((a) => a.href === ORIGIN + url)) err('hreflang set does not include the page itself');
    if (alternates.length > 1 && !alternates.some((a) => a.lang === 'x-default')) err('hreflang set has no x-default');
  }
  pages.set(url, { alternates, noindex });

  for (const a of root.querySelectorAll('a')) {
    const href = a.getAttribute('href');
    if (href === undefined || href.trim() === '') {
      err(`link without href: "${a.text.trim().slice(0, 40)}"`);
      continue;
    }
    if (href.startsWith('mailto:') || href.startsWith('#')) continue;
    let path = null;
    if (href.startsWith('/')) path = href;
    else if (href.startsWith(ORIGIN)) path = href.slice(ORIGIN.length) || '/';
    if (path === null) continue;
    if (!exists(path)) err(`broken internal link: ${href}`);
    const target = path.split('#')[0].split('?')[0];
    if (target !== url) inbound.set(target, (inbound.get(target) ?? 0) + 1);
  }

  for (const img of root.querySelectorAll('img')) {
    if (img.getAttribute('alt') === undefined) err(`<img src="${img.getAttribute('src')}"> has no alt attribute`);
  }

  for (const s of root.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      JSON.parse(s.text);
    } catch {
      err('invalid JSON-LD');
    }
  }

  // Join text nodes with spaces: minified HTML has no whitespace between tags,
  // so .text would glue "Impressum" and "TODO" into one word and hide the placeholder.
  const body = root.querySelector('body');
  const todoEl = body?.querySelectorAll('*').filter((el) => !['SCRIPT', 'STYLE', 'TEMPLATE'].includes(el.tagName) && /\bTODO\b/.test(visibleText(el))).pop();
  if (todoEl) (allowTodo ? warnings : errors).push(`${url}: ${visibleText(todoEl).slice(0, 240)}`);
}

for (const [t, urls] of titles) if (urls.length > 1) errors.push(`duplicate <title> "${t}": ${urls.join(', ')}`);
for (const [d, urls] of descriptions) if (urls.length > 1) errors.push(`duplicate description on ${urls.join(', ')}`);

// hreflang reciprocity: every alternate must exist and point back.
for (const [url, { alternates, noindex }] of pages) {
  if (noindex) continue;
  for (const a of alternates) {
    if (a.lang === 'x-default') continue;
    const target = a.href.slice(ORIGIN.length);
    const other = pages.get(target);
    if (!other) errors.push(`${url}: hreflang ${a.lang} points to missing page ${a.href}`);
    else if (!other.alternates.some((b) => b.href === ORIGIN + url)) errors.push(`${url}: hreflang ${a.lang} → ${target} is not reciprocal`);
  }
}

// Orphans: every indexable page needs at least one inbound internal link.
for (const [url, { noindex }] of pages) {
  if (noindex || url === '/404.html') continue;
  if (!inbound.get(url)) errors.push(`${url}: orphan page (no internal links point to it)`);
}

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);

// On GitHub Actions, also emit annotations so the reason shows on the PR's checks page.
if (process.env.GITHUB_ACTIONS === 'true') {
  const esc = (s) => s.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
  for (const w of warnings) console.log(`::warning title=Site check::${esc(w)}`);
  for (const e of errors) console.log(`::error title=Site check::${esc(e)}`);
}
console.log(`\nChecked ${files.length} HTML files: ${errors.length} error(s), ${warnings.length} warning(s).`);
process.exit(errors.length ? 1 : 0);
