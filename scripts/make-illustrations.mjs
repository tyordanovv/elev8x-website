// Draws the site's illustrations as plain SVG files in public/assets/illustrations/.
// No text inside the pictures, so one file serves all three languages; the words
// (titles, numbers, steps) live in the page next to the image.
// Run: npm run illustrations
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const OUT = new URL('../public/assets/illustrations/', import.meta.url);
mkdirSync(OUT, { recursive: true });

const C = {
  ink: '#231F20',
  ink2: '#3A3436',
  amber: '#F9A11B',
  amberSoft: '#FDE7C2',
  cream: '#F6F1E7',
  ground: '#EAE2D4',
  paper: '#FFFFFF',
  line: '#E6DED0',
  grey: '#CFC6B8',
  greyDark: '#9A9288',
  blue: '#3346A8',
  blueSoft: '#DFE4FA',
  glass: '#C9D6F4',
  green: '#2E9E5B',
  greenSoft: '#D9F0E2',
};

// The Elev8x mark, taken from the logo file so it always matches.
const markSvg = readFileSync(new URL('../public/assets/elev8x-mark.svg', import.meta.url), 'utf8');
const markPath = markSvg.match(/<path[\s\S]*?\/>/)[0];
const MARK_W = 104.31, MARK_H = 191.44;
const mark = (cx, cy, h) => {
  const w = (h * MARK_W) / MARK_H;
  return `<svg x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" viewBox="316.15 0 ${MARK_W} ${MARK_H}">${markPath}</svg>`;
};

const rect = (x, y, w, h, r, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" ${extra}/>`;
const circle = (cx, cy, r, fill, extra = '') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${extra}/>`;
const bars = (x, y, widths, gap, color, h = 10) => widths.map((w, i) => rect(x, y + i * gap, w, h, h / 2, color)).join('');
const card = (x, y, w, h, extra = '') => rect(x, y, w, h, 18, C.paper, `filter="url(#lift)" ${extra}`);
const tick = (cx, cy, r = 18, bg = C.green) =>
  circle(cx, cy, r, bg) +
  `<path d="M${cx - r * 0.42},${cy + r * 0.02} l${r * 0.3},${r * 0.3} l${r * 0.55},${-r * 0.6}" fill="none" stroke="#fff" stroke-width="${Math.max(3, r * 0.2)}" stroke-linecap="round" stroke-linejoin="round"/>`;
const dots = (d) => `<path d="${d}" fill="none" stroke="${C.greyDark}" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1 12"/>`;
const wheel = (cx, cy, r = 28) => circle(cx, cy, r, C.ink) + circle(cx, cy, r * 0.42, C.greyDark);

const frame = (w, h, body, blobs = '') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
<defs>
  <filter id="lift" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#231F20" flood-opacity="0.10"/></filter>
  <clipPath id="frame"><rect width="${w}" height="${h}" rx="28"/></clipPath>
</defs>
<g clip-path="url(#frame)">
  <rect width="${w}" height="${h}" fill="${C.cream}"/>
  ${blobs}
  ${body}
</g>
</svg>
`;

// Freight forwarder: a truck, carrier quotes compared, and a clock showing 17 of 60 minutes.
function freight() {
  const W = 1200, H = 500;
  const wedge = (cx, cy, r, minutes) => {
    const a = (minutes / 60) * 2 * Math.PI;
    const x = cx + r * Math.sin(a), y = cy - r * Math.cos(a);
    return `<path d="M${cx},${cy} L${cx},${cy - r} A${r},${r} 0 0 1 ${x.toFixed(1)},${y.toFixed(1)} Z" fill="${C.amberSoft}"/>`;
  };
  const quote = (x, y, chosen) =>
    card(x, y, 270, 88) +
    circle(x + 46, y + 44, 24, chosen ? C.amberSoft : C.blueSoft) +
    rect(x + 34, y + 36, 24, 14, 4, chosen ? C.amber : C.blue) +
    bars(x + 88, y + 28, [chosen ? 120 : 140, 80], 22, C.line, 11) +
    (chosen ? tick(x + 236, y + 44, 20) : rect(x + 214, y + 36, 40, 16, 8, C.line));
  const body = `
  ${rect(0, 404, W, 96, 0, C.ground)}
  ${Array.from({ length: 12 }, (_, i) => rect(30 + i * 110, 448, 60, 7, 3.5, C.paper)).join('')}
  ${rect(120, 206, 420, 176, 18, C.paper, 'filter="url(#lift)"')}
  ${rect(120, 352, 420, 16, 0, C.amber)}
  ${mark(330, 280, 104)}
  ${rect(536, 340, 34, 22, 4, C.ink2)}
  <path d="M566,384 L566,292 Q566,262 596,262 L660,262 Q684,262 694,284 L716,336 Q722,350 722,364 L722,384 Z" fill="${C.ink}"/>
  <path d="M600,282 L652,282 Q664,282 669,292 L684,330 L600,330 Z" fill="${C.glass}"/>
  ${rect(704, 350, 26, 22, 6, C.ink2)}
  ${wheel(200, 392)}${wheel(282, 392)}${wheel(470, 392)}${wheel(644, 392)}
  ${quote(800, 64, false)}
  ${quote(836, 176, true)}
  ${quote(800, 288, false)}
  ${circle(700, 120, 64, C.paper, 'filter="url(#lift)"')}
  ${wedge(700, 120, 50, 17)}
  ${circle(700, 120, 50, 'none', `stroke="${C.ink}" stroke-width="5"`)}
  <path d="M700,120 L700,82 M700,120 L728,132" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/>
  ${circle(700, 120, 6, C.ink)}
`;
  const blobs = circle(1010, 110, 170, C.amberSoft, 'opacity="0.55"') + circle(150, 90, 90, '#EFE7DA');
  return frame(W, H, body, blobs);
}

// Fuel-station group: the station, a fuel delivery, the cash collection and the morning report.
function fuel() {
  const W = 1200, H = 500;
  const pump = (x) =>
    rect(x, 268, 84, 140, 14, C.paper, 'filter="url(#lift)"') +
    rect(x + 14, 286, 56, 32, 7, C.amberSoft) +
    rect(x + 14, 330, 34, 10, 5, C.line) +
    rect(x + 72, 330, 16, 40, 5, C.ink) +
    `<path d="M88 370 Q100 420 64 420" transform="translate(${x} 0)" fill="none" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/>`;
  const coin = (cx, cy) => `<ellipse cx="${cx}" cy="${cy}" rx="30" ry="10" fill="${C.amber}"/><ellipse cx="${cx}" cy="${cy - 4}" rx="30" ry="10" fill="#FBBF55"/>`;
  const body = `
  ${rect(0, 408, W, 92, 0, C.ground)}
  ${rect(86, 104, 568, 54, 14, C.ink)}
  ${rect(86, 158, 568, 16, 0, C.amber)}
  ${rect(146, 174, 22, 236, 0, C.grey)}${rect(572, 174, 22, 236, 0, C.grey)}
  ${rect(230, 402, 320, 12, 6, C.grey)}
  ${pump(258)}${pump(412)}
  <path d="M690,316 C660,350 664,420 730,420 C796,420 800,350 770,316 Z" fill="#E7D5B5"/>
  <path d="M700,300 L760,300 L748,320 L712,320 Z" fill="#E7D5B5"/>
  ${rect(702, 310, 56, 12, 6, C.green)}
  ${circle(730, 372, 22, C.paper, 'opacity="0.85"')}
  ${rect(726, 358, 8, 28, 4, C.green)}
  ${coin(642, 406)}${coin(642, 392)}${coin(642, 378)}
  ${rect(812, 300, 268, 100, 50, C.paper, 'filter="url(#lift)"')}
  ${rect(812, 344, 268, 14, 0, C.blueSoft)}
  ${rect(1070, 352, 26, 22, 4, C.ink2)}
  <path d="M1092,404 L1092,330 Q1092,314 1108,314 L1148,314 Q1164,314 1170,330 L1182,370 L1182,404 Z" fill="${C.amber}"/>
  ${rect(1112, 328, 42, 28, 6, C.glass)}
  ${wheel(866, 404, 26)}${wheel(1010, 404, 26)}${wheel(1140, 404, 26)}
  ${card(880, 58, 220, 170)}
  ${bars(908, 88, [110, 150, 130], 24, C.line, 11)}
  ${rect(908, 168, 30, 36, 6, C.blueSoft)}${rect(948, 150, 30, 54, 6, C.amberSoft)}${rect(988, 132, 30, 72, 6, C.amber)}
  ${tick(1082, 76, 22)}
  ${dots('M1000,236 C1000,262 1000,272 990,292')}`;
  const blobs = circle(340, 70, 150, C.amberSoft, 'opacity="0.5"') + circle(1100, 470, 120, '#EFE7DA');
  return frame(W, H, body, blobs);
}

// Autolensio: a customer call becomes tasks, agents write and test the fix, the release goes out.
function autolensio() {
  const W = 1200, H = 500;
  const task = (x, y, flag) =>
    card(x, y, 240, 76) +
    rect(x + 24, y + 26, 24, 24, 6, 'none', `stroke="${C.blue}" stroke-width="4"`) +
    bars(x + 66, y + 22, [130, 90], 22, C.line, 11) +
    circle(x + 214, y + 38, 9, flag);
  const body = `
  ${rect(0, 410, W, 90, 0, C.ground)}
  <path d="M96,388 L96,346 Q96,322 120,318 L170,312 L214,262 Q226,250 244,250 L346,250 Q364,250 378,262 L428,312 L452,318 Q474,324 474,348 L474,388 Z" fill="${C.amber}"/>
  <path d="M230,268 L298,268 L298,312 L194,312 Z M314,268 L344,268 Q352,268 358,274 L396,312 L314,312 Z" fill="${C.glass}"/>
  ${rect(96, 360, 378, 14, 0, '#E89512')}
  ${wheel(176, 392, 32)}${wheel(394, 392, 32)}
  ${card(150, 70, 270, 120)}
  <path d="M206,188 L224,226 L246,188 Z" fill="${C.paper}"/>
  ${circle(200, 130, 26, C.blueSoft)}
  <path d="M190,120 q2,-6 8,-4 l4,6 q2,4 -2,7 q4,8 12,12 q3,-4 7,-2 l6,4 q2,6 -4,8 q-20,0 -31,-31 z" fill="${C.blue}"/>
  ${bars(244, 104, [140, 110, 80], 24, C.line, 11)}
  ${task(520, 120, C.amber)}
  ${task(520, 220, C.blue)}
  ${task(520, 320, C.amber)}
  ${rect(840, 92, 300, 210, 20, C.ink, 'filter="url(#lift)"')}
  ${circle(868, 118, 7, '#E5534B')}${circle(890, 118, 7, C.amber)}${circle(912, 118, 7, C.green)}
  ${bars(868, 150, [150, 200, 120, 170, 90], 26, '#4A4446', 10)}
  ${rect(868, 150, 70, 10, 5, C.amber)}${rect(868, 202, 96, 10, 5, C.glass)}${rect(868, 254, 60, 10, 5, C.amber)}
  ${rect(866, 326, 220, 54, 27, C.greenSoft)}
  ${tick(896, 353, 17)}
  ${bars(926, 347, [130], 0, '#9BD3B1', 12)}
  ${tick(1128, 96, 24)}
  ${dots('M424,130 C470,130 480,158 512,158')}
  ${dots('M764,258 C800,258 806,214 832,214')}`;
  const blobs = circle(1040, 420, 170, C.amberSoft, 'opacity="0.5"') + circle(120, 60, 110, '#EFE7DA');
  return frame(W, H, body, blobs);
}

// Homepage: routine work comes in (email, documents, invoices), we take it over, it leaves done.
function hero() {
  const W = 640, H = 560;
  const inbox = (x, y, rot, icon) =>
    `<g transform="rotate(${rot} ${x + 100} ${y + 55})">${card(x, y, 200, 110)}${icon(x, y)}${bars(x + 76, y + 34, [96, 70, 84], 20, C.line, 10)}</g>`;
  const envelope = (x, y) => rect(x + 22, y + 34, 40, 30, 6, C.blueSoft) + `<path d="M${x + 24},${y + 38} l18,14 l18,-14" fill="none" stroke="${C.blue}" stroke-width="4" stroke-linejoin="round"/>`;
  const doc = (x, y) => `<path d="M${x + 24},${y + 26} h24 l12,12 v34 h-36 z" fill="${C.amberSoft}"/>` + rect(x + 30, y + 46, 20, 6, 3, C.amber) + rect(x + 30, y + 58, 14, 6, 3, C.amber);
  const coinIcon = (x, y) => circle(x + 42, y + 54, 20, C.greenSoft) + rect(x + 38, y + 42, 8, 24, 4, C.green);
  const done = (x, y) => card(x, y, 176, 72) + tick(x + 38, y + 36, 17) + bars(x + 68, y + 24, [84, 60], 20, C.line, 10);
  const body = `
  ${inbox(34, 92, -7, envelope)}
  ${inbox(52, 232, 5, doc)}
  ${inbox(36, 372, -3, coinIcon)}
  ${dots('M238,150 C276,170 270,230 282,252')}
  ${dots('M252,290 C262,290 266,290 272,290')}
  ${dots('M238,420 C276,400 270,346 282,328')}
  ${circle(330, 290, 78, C.paper, 'filter="url(#lift)"')}
  ${circle(330, 290, 62, C.amberSoft)}
  ${mark(330, 290, 96)}
  ${dots('M408,290 C420,290 424,290 430,290')}
  ${dots('M392,236 C412,206 418,186 432,180')}
  ${dots('M392,344 C412,374 418,394 432,400')}
  ${done(436, 144)}
  ${done(436, 254)}
  ${done(436, 364)}`;
  const blobs = circle(520, 90, 150, C.amberSoft, 'opacity="0.55"') + circle(90, 520, 120, '#EFE7DA');
  return frame(W, H, body, blobs);
}

// Digital worker: an AI colleague with a badge, keeping an eye on the processes around it.
function worker() {
  const W = 640, H = 520;
  const tile = (x, y, dot) => card(x, y, 150, 70) + circle(x + 30, y + 35, 10, dot) + bars(x + 52, y + 22, [72, 50], 20, C.line, 10);
  const body = `
  <path d="M262,0 L320,98 L378,0" fill="none" stroke="${C.amber}" stroke-width="12" stroke-linejoin="round"/>
  ${rect(300, 88, 40, 28, 7, C.greyDark)}
  ${card(196, 108, 248, 330)}
  <path d="M196,132 Q196,108 220,108 L420,108 Q444,108 444,132 L444,180 L196,180 Z" fill="${C.ink}"/>
  ${rect(292, 128, 56, 12, 6, C.ink2)}
  ${circle(320, 252, 60, C.amberSoft)}
  ${mark(320, 252, 84)}
  ${rect(248, 330, 144, 14, 7, C.ink)}
  ${rect(270, 356, 100, 10, 5, C.line)}
  ${rect(260, 384, 120, 32, 16, C.greenSoft)}
  ${circle(282, 400, 7, C.green)}
  ${rect(296, 395, 66, 10, 5, '#9BD3B1')}
  ${tile(22, 150, C.green)}
  ${tile(22, 260, C.amber)}
  ${tile(22, 370, C.green)}
  ${tile(468, 214, C.green)}
  ${tile(468, 324, C.green)}
  ${dots('M172,185 C184,190 186,200 194,206')}
  ${dots('M172,295 C180,295 186,295 194,295')}
  ${dots('M172,405 C184,400 186,392 194,386')}
  ${dots('M466,250 C458,250 452,250 446,250')}
  ${dots('M466,360 C458,360 452,360 446,360')}
  ${circle(560, 92, 26, C.amber)}
  <g stroke="${C.amber}" stroke-width="5" stroke-linecap="round">
    <path d="M560,48 v-10 M560,136 v10 M516,92 h-10 M604,92 h10 M529,61 l-7,-7 M591,123 l7,7 M591,61 l7,-7 M529,123 l-7,7"/>
  </g>`;
  const blobs = circle(120, 80, 140, C.amberSoft, 'opacity="0.5"') + circle(560, 470, 130, '#EFE7DA');
  return frame(W, H, body, blobs);
}

const files = {
  'case-freight.svg': freight(),
  'case-fuel.svg': fuel(),
  'case-autolensio.svg': autolensio(),
  'hero.svg': hero(),
  'digital-worker.svg': worker(),
};
for (const [name, svg] of Object.entries(files)) {
  writeFileSync(new URL(name, OUT), svg);
  console.log(`public/assets/illustrations/${name}  ${svg.length} bytes`);
}
