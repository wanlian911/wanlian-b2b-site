// Pre-build gate: keep the per-locale product catalogues consistent with the
// master list in src/utils/products.ts.
//
// Localised product pages are rendered from each locale's own catalogue
// (products.es.ts + <loc>-parts), while the master list drives the English
// route. When a product is added to the master only, the English page exists but
// /<locale>/products/<slug>/ 404s. i18n/locales.ts now derives hreflang from
// those same maps, so the markup stays honest - but the content gap is still
// real for buyers reading a translated site, so it is reported on every build.
//
// Fails (exit 1) only for the direction that breaks markup: a locale catalogue
// holding a slug the master does not know about. The opposite direction is
// reported as a backlog, because it is a known, deliberately tolerated state.
//
// Usage: node scripts/check-product-locales.mjs
import { readFileSync, readdirSync, existsSync } from 'node:fs';

const S = String.fromCharCode(39);
const LOCALES = ['es', 'ru', 'fr', 'ar', 'pt', 'de', 'tr', 'id'];

function slugsIn(text) {
  const found = [];
  const marker = 'slug: ' + S;
  let i = 0;
  while (true) {
    const k = text.indexOf(marker, i);
    if (k < 0) break;
    const start = k + marker.length;
    const end = text.indexOf(S, start + 1);
    if (end < 0) break;
    found.push(text.slice(start, end));
    i = end + 1;
  }
  return found;
}

function filesFor(locale) {
  const out = ['src/utils/products.' + locale + '.ts'];
  const partsDir = 'src/utils/' + locale + '-parts';
  if (existsSync(partsDir)) {
    for (const name of readdirSync(partsDir)) if (name.endsWith('.ts')) out.push(partsDir + '/' + name);
  }
  return out.filter((f) => existsSync(f));
}

function collect(paths) {
  const set = new Set();
  for (const p of paths) for (const s of slugsIn(readFileSync(p, 'utf8'))) set.add(s);
  return set;
}

const master = collect(['src/utils/products.ts']);
if (master.size < 45) {
  console.error(`FAIL: only ${master.size} slugs found in src/utils/products.ts - refusing to compare`);
  process.exit(2);
}

let orphans = 0;
let backlogTotal = 0;
for (const locale of LOCALES) {
  const files = filesFor(locale);
  const set = collect(files);
  if (set.size === 0) {
    console.error(`FAIL: locale catalogue for ${locale} produced 0 slugs (files=${files.length})`);
    process.exit(2);
  }
  const orphan = [...set].filter((s) => !master.has(s));
  const missing = [...master].filter((s) => !set.has(s));
  orphans += orphan.length;
  backlogTotal += missing.length;
  const flag = orphan.length ? 'ORPHAN' : 'ok';
  console.log(`products-${locale}: catalogued=${set.size} masterOnly=${missing.length} localeOnly=${orphan.length} [${flag}]`);
  if (orphan.length) orphan.slice(0, 10).forEach((s) => console.error(`    locale-only slug with no master entry: ${s}`));
  if (missing.length && process.argv.includes('--verbose')) missing.forEach((s) => console.log(`    not catalogued in ${locale}: ${s}`));
}

console.log(`product-locales: master=${master.size} locales=${LOCALES.length} backlog=${backlogTotal} localeOnly=${orphans}`);
if (orphans) {
  console.error('FAIL: a locale catalogue references slugs the master does not define; translated pages would point at a missing English page.');
  process.exit(1);
}

