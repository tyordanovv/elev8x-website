import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../config/site';
import { site } from '../config/site';

export type Page = CollectionEntry<'pages'>;

let cache: Page[] | null = null;

export async function allPages(): Promise<Page[]> {
  if (!cache) cache = await getCollection('pages');
  return cache;
}

export async function pageByKey(key: string, lang: Lang): Promise<Page | undefined> {
  return (await allPages()).find((p) => p.data.key === key && p.data.lang === lang);
}

/** Path of the page with this key in this language, falling back to the language's home. */
export async function href(key: string, lang: Lang): Promise<string> {
  const p = await pageByKey(key, lang);
  return p ? p.data.path : lang === 'en' ? '/' : `/${lang}/`;
}

/** Every language version of a page, including the page itself. */
export async function alternates(page: Page): Promise<{ lang: Lang; path: string }[]> {
  const pages = await allPages();
  return site.languages
    .map((lang) => pages.find((p) => p.data.key === page.data.key && p.data.lang === lang))
    .filter((p): p is Page => Boolean(p))
    .map((p) => ({ lang: p.data.lang, path: p.data.path }));
}

/** Child pages of a hub: explicit `children` keys first, otherwise pages whose parent is this key. */
export async function childrenOf(page: Page): Promise<Page[]> {
  const pages = (await allPages()).filter((p) => p.data.lang === page.data.lang);
  if (page.data.children?.length) {
    return page.data.children
      .map((k) => pages.find((p) => p.data.key === k))
      .filter((p): p is Page => Boolean(p));
  }
  return pages
    .filter((p) => p.data.parent === page.data.key)
    .sort((a, b) => a.data.order - b.data.order);
}

export async function pagesByKeys(keys: string[] | undefined, lang: Lang): Promise<Page[]> {
  if (!keys?.length) return [];
  const pages = (await allPages()).filter((p) => p.data.lang === lang);
  return keys.map((k) => pages.find((p) => p.data.key === k)).filter((p): p is Page => Boolean(p));
}

/** Home › … › page, built from the `parent` chain. */
export async function breadcrumbs(page: Page): Promise<{ name: string; path: string }[]> {
  const chain: Page[] = [];
  let current: Page | undefined = page;
  const seen = new Set<string>();
  while (current && !seen.has(current.data.key)) {
    seen.add(current.data.key);
    chain.unshift(current);
    current = current.data.parent ? await pageByKey(current.data.parent, page.data.lang) : undefined;
  }
  const home = await pageByKey('home', page.data.lang);
  const items = chain.filter((p) => p.data.key !== 'home').map((p) => ({ name: p.data.nav, path: p.data.path }));
  return home ? [{ name: home.data.nav, path: home.data.path }, ...items] : items;
}

export function absolute(path: string): string {
  return new URL(path, site.url).toString();
}
