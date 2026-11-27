// Renders public/og/{en,de,bg}.png (1200×630) with headless Chrome.
// Run locally after changing the copy: `npm run og` (needs Chrome; set CHROME_PATH if not on PATH).
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { tmpdir } from 'node:os';

const chrome = process.env.CHROME_PATH || 'google-chrome';
const nm = resolve('node_modules');
const logo = readFileSync(resolve('public/assets/elev8x-logo.svg'), 'utf8')
  .replace(/<\?xml[^>]*>/, '')
  .replace('<svg', '<svg style="height:56px;width:auto"');

const copy = {
  en: {
    pill: 'AI and process automation for logistics and operations',
    h1: 'Automate the <mark>decisions</mark> your team makes all day.',
    results: ['2 h → 17 min per freight enquiry', '6 h a week back for fuel stations', 'Fixed price · EU-hosted'],
  },
  de: {
    pill: 'KI- und Prozessautomatisierung für Logistik und Operations',
    h1: 'Automatisieren Sie die <mark>Entscheidungen</mark>, die Ihr Team täglich trifft.',
    results: ['2 h → 17 min pro Frachtanfrage', '6 h pro Woche für Tankstellen', 'Festpreis · EU-Hosting'],
  },
  bg: {
    pill: 'AI и автоматизация на процеси за логистика и операции',
    h1: 'Автоматизирайте <mark>решенията</mark>, които екипът ви взема всеки ден.',
    results: ['2 ч → 17 мин на запитване за превоз', '6 ч седмично за бензиностанции', 'Фиксирана цена · Хостинг в ЕС'],
  },
};

const css = [
  `${nm}/@fontsource-variable/inter/index.css`,
  `${nm}/@fontsource/source-serif-4/700.css`,
  `${nm}/@fontsource/jetbrains-mono/500.css`,
]
  .map((p) => `<link rel="stylesheet" href="file://${p}">`)
  .join('');

mkdirSync('public/og', { recursive: true });
for (const [lang, c] of Object.entries(copy)) {
  const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">${css}<style>
  *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;overflow:hidden;font-family:'Inter Variable',sans-serif;
  background-color:#1E1B19;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),
  linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:44px 44px;
  color:#F4F2EF;padding:56px 72px;display:flex;flex-direction:column}
  .top{display:flex;justify-content:space-between;align-items:center}
  .logo{background:#fff;border-radius:999px;padding:10px 22px}
  .pill{font-family:'JetBrains Mono',monospace;font-size:20px;letter-spacing:.03em;color:#BDB6AF}
  h1{margin:28px 0 0;font-family:'Source Serif 4',serif;font-weight:700;font-size:60px;line-height:1.06;letter-spacing:-.02em;color:#fff;max-width:1000px}
  mark{background:linear-gradient(transparent 62%,rgba(249,161,27,.7) 62%);color:inherit}
  .results{margin-top:auto;display:flex;gap:16px;flex-wrap:wrap}
  .results span{border:1px solid #3A3532;background:#262220;border-radius:999px;padding:12px 20px;font-size:22px;font-weight:600}
  .results span:first-child{border-color:#F9A11B;color:#F9A11B}
  </style></head><body><div class="top"><div class="logo">${logo}</div><div class="pill">elev8x.eu</div></div>
  <p class="pill" style="margin:40px 0 0">${c.pill}</p><h1>${c.h1}</h1>
  <div class="results">${c.results.map((r) => `<span>${r}</span>`).join('')}</div></body></html>`;
  const file = resolve(tmpdir(), `og-${lang}.html`);
  writeFileSync(file, html);
  execFileSync(chrome, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    '--virtual-time-budget=3000',
    '--window-size=1200,630',
    `--screenshot=${resolve('public/og', `${lang}.png`)}`,
    `file://${file}`,
  ], { stdio: 'ignore' });
  console.log(`public/og/${lang}.png`);
}
