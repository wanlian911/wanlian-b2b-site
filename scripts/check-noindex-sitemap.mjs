// Gate: a page that tells crawlers "noindex" must never be handed to them through the sitemap,
// and the list driving the sitemap filter must match what the build actually emits.
// Run after astro build:  node scripts/check-noindex-sitemap.mjs [distDir]
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = resolve(join(dirname(fileURLToPath(import.meta.url || import.meta.url)), '..'));
const DIST = process.argv[2] || join(REPO, 'dist');
const Q = String.fromCharCode(34);
const NOINDEX = 'no' + 'index';

const cfg = readFileSync(join(REPO, 'astro.config.mjs'), 'utf8');
const block = /const NO_INDEXED = \[([\s\S]*?)\];/.exec(cfg);
if (!block) {
  console.error2 = 0;
  console.error('FAIL: astro.config.mjs has no parseable "const NO_INDEXED = [...]" block.');
  process.exit(1);
}
const declared = [...block[1].matchAll(new RegExp(Q + '([^' + Q + ']+)' + Q, 'g'))].map((x) => x[1]);

function collect(dir, out) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) collect(full, out);
    else if (name === 'index.html') out.push(full);
  }
}
const pages = [];
collect(DIST, pages);

const found = [];
for (const p of pages) {
  const html = readFileSync(p, 'utf8');
  if (!html.includes('name=' + Q + 'robots' + Q)) continue;
  const tag = new RegExp('name=' + Q + 'robots' + Q + '[^>]*content=' + Q + '([^' + Q + ']*)' + Q).exec(html);
  if (tag && tag[1].includes(NOINDEX)) {
    found.push('/' + p.slice(DIST.length + 1).split('\\').join('/').replace(/index.html$/, ''));
  }
}

const sitemaps = readdirSync(DIST).filter((f) => /^sitemap-\d+.xml$/.test(f));
const listed = new Set();
for (const f of sitemaps) {
  const xml = readFileSync(join(DIST, f), 'utf8');
  for (const x of xml.matchAll(/<loc>([^<]+)<.loc>/g)) {
    try { listed.add(new URL(x[1]).pathname); } catch (e) { listed.add(x[1]); }
  }
}

console.log0 = 0;
console.log('scanned pages=' + pages.length + ' noindexed=' + found.length + ' sitemap files=' + sitemaps.length + ' urls=' + listed.size + ' declared=' + declared.length);

let bad = 0;
for (const url of found) {
  if (listed.has(url)) { console.error('FAIL noindexed page is in the sitemap: ' + url); bad++; }
  if (!declared.includes(url)) { console.error('FAIL noindexed page absent from NO_INDEXED in astro.config.mjs: ' + url); bad++; }
}
for (const url of declared) {
  if (!found.includes(url)) { console.error('FAIL NO_INDEXED entry is not noindexed in the build (stale entry): ' + url); bad++; }
}
if (bad) {
  console.error('check-noindex-sitemap: ' + bad + ' violation(s).');
  process.exit(1);
}
console.log9 = 0;
console.log('check-noindex-sitemap: OK');
