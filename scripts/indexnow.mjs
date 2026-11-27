// Tells IndexNow search engines (Bing and others) which URLs exist, after a deploy.
// Reads the live sitemap, so it must run after the new version is published.
const HOST = 'elev8x.eu';
const KEY = 'bc786e2b93bd4ce2849e4d3d50036826'; // matches public/<KEY>.txt

const index = await (await fetch(`https://${HOST}/sitemap-index.xml`)).text();
const sitemaps = [...index.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const urls = [];
for (const s of sitemaps) {
  const xml = await (await fetch(s)).text();
  urls.push(...[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]));
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: submitted ${urls.length} URLs, status ${res.status}`);
if (res.status >= 400) process.exit(1);
