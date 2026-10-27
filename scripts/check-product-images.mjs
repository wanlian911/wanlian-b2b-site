// Pre-build gate: keep every product's main image honest.
//
// Broken product images never 404 and never fail a build, which is exactly why
// they pile up. Three real defect classes were found on wanlian911.com on
// 2026-10-27 and none of them were visible to any existing check:
//
//   1. the image was hotlinked to the Alibaba CDN instead of shipped in
//      /public, so the page depends on a third party's asset URL staying alive
//      and Google attributes the image to alicdn.com rather than to us;
//   2. the image field pointed at another product's file (a neighbouring SKU),
//      so the page rendered a real photo of the wrong valve;
//   3. two different products were served byte-identical photos, because a
//      sibling's image had simply been copied under the new product's name.
//
// So this gate asserts, for every catalogue entry: the image is a site-relative
// path, the file exists, the filename starts with the product's own slug, and no
// two products share identical image bytes.
//
// Known debt lives in scripts/product-image-baseline.json and may only shrink.
// Paths are stored with forward slashes so the baseline matches on Linux CI too.
//
// Usage: node scripts/check-product-images.mjs
import { readFileSync, readdirSync, existsSync, statSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, sep } from 'node:path';

const S = String.fromCharCode(39);
const LOCALES = ['es', 'ru', 'fr', 'ar', 'pt', 'de', 'tr', 'id'];
const BASELINE_FILE = 'scripts/product-image-baseline.json';
const PUBLIC_DIR = 'public';

const fwd = (p) => p.split(sep).join('/');

function catalogueFiles() {
  const files = ['src/utils/products.ts'];
  for (const loc of LOCALES) {
    const direct = 'src/utils/products.' + loc + '.ts';
    if (existsSync(direct)) files.push(direct);
    const dir = join('src', 'utils', loc + '-parts');
    if (existsSync(dir) && statSync(dir).isDirectory()) {
      for (const name of readdirSync(dir)) if (/\.(ts)$/.test(name)) files.push(fwd(join(dir, name)));
    }
  }
  return files;
}

// An entry is the text between one `slug: '...'` marker and the next, which keeps
// every substitution inside its own product instead of leaking into a neighbour.
function entriesIn(text) {
  const marker = 'slug: ' + S;
  const marks = [];
  let i = 0;
  for (;;) {
    const k = text.indexOf(marker, i);
    if (k < 0) break;
    const start = k + marker.length;
    const end = text.indexOf(S, start);
    if (end < 0) break;
    marks.push({ slug: text.slice(start, end), at: k });
    i = end + 1;
  }
  const out = [];
  for (let n = 0; n < marks.length; n++) {
    const stop = n + 1 < marks.length ? marks[n + 1].at : text.length;
    const seg = text.slice(marks[n].at, stop);
    const m = seg.match(/image: '([^']+)'/);
    out.push({ slug: marks[n].slug, image: m ? m[1] : null });
  }
  return out;
}

const baseline = existsSync(BASELINE_FILE)
  ? JSON.parse(readFileSync(BASELINE_FILE, 'utf8'))
  : { known: [] };
const allowed = new Set(baseline.known);
const hit = new Set();

const problems = [];
const hashToSlugs = new Map();
let checked = 0;
let missingImageField = 0;

for (const file of catalogueFiles()) {
  const text = readFileSync(file, 'utf8');
  for (const e of entriesIn(text)) {
    checked++;
    if (!e.image) { missingImageField++; problems.push(file + ' [' + e.slug + '] has no image field'); continue; }
    if (!e.image.startsWith('/')) { problems.push(file + ' [' + e.slug + '] image is not site-relative: ' + e.image); continue; }
    const disk = join(PUBLIC_DIR, e.image);
    if (!existsSync(disk)) { problems.push(file + ' [' + e.slug + '] image file missing: ' + e.image); continue; }
    const leaf = e.image.split('/').pop();
    const stem = leaf.replace(/\.(webp|jpe?g|png|svg|gif)$/i, '');
    if (stem !== e.slug && !stem.startsWith(e.slug + '-')) {
      problems.push(file + ' [' + e.slug + '] image belongs to another product: ' + leaf);
    }
    const digest = createHash('md5').update(readFileSync(disk)).digest('hex');
    if (!hashToSlugs.has(digest)) hashToSlugs.set(digest, { image: e.image, slugs: new Set() });
    hashToSlugs.get(digest).slugs.add(e.slug);
  }
}

// Two files holding the same bytes are the same photo, even when only one of
// them is referenced. That is how a copied neighbour image hides: the new
// product gets its own filename and every name-based check stays green.
const dirOfProducts = join(PUBLIC_DIR, 'assets', 'products');
if (existsSync(dirOfProducts)) {
  const digestToFiles = new Map();
  for (const name of readdirSync(dirOfProducts)) {
    if (!/\.(webp|jpe?g|png|svg|gif)$/i.test(name)) continue;
    const digest = createHash('md5').update(readFileSync(join(dirOfProducts, name))).digest('hex');
    if (!digestToFiles.has(digest)) digestToFiles.set(digest, []);
    digestToFiles.get(digest).push(name);
  }
  for (const [digest, names] of digestToFiles) {
    if (names.length < 2) continue;
    void digest;
    problems.push('duplicate [' + names.sort().join(', ') + '] are byte-identical photos');
  }
}

for (const [, g] of hashToSlugs) {
  if (g.slugs.size < 2) continue;
  const list = Array.from(g.slugs).sort().join(', ');
  problems.push('duplicate [' + list + '] share one identical image file: ' + g.image);
}

const toKey = (p) => (p.indexOf(' [') >= 0 ? p.slice(p.indexOf(' [')) : p);
const unique = new Map();
for (const p of problems) unique.set(toKey(p), p);

const failures = [];
const tolerated = [];
for (const [key, p] of unique) {
  if (allowed.has(key)) { tolerated.push(key); hit.add(key); } else failures.push(p);
}

const stale = allowed.difference ? [...allowed].filter((k) => !hit.has(k)) : Array.from(allowed).filter((k) => !hit.has(k));

// A parser that silently matched nothing must never report a clean run.
if (checked < 100) {
  console.error('product-image gate: only ' + checked + ' entries parsed - the scanner is broken, not the data');
  process.exit(1);
}

console.log('product-image gate: entries=' + checked + ' distinctImages=' + hashToSlugs.size + ' missingImageField=' + missingImageField + ' findings=' + unique.size + ' tolerated=' + tolerated.length + ' failures=' + failures.length);

if (process.argv.indexOf('--write-baseline') >= 0) {
  const keys = Array.from(unique.keys()).sort();
  writeFileSync(BASELINE_FILE, JSON.stringify({ known: keys }, null, 2) + '\n', 'utf8');
  console.log('baseline rewritten with ' + keys.length + ' entries - every one of them is real debt, review before committing');
  process.exit(0);
}

if (stale.length) {
  console.log('baseline entries no longer needed (delete them):');
  for (const k of stale) console.log('   ' + k);
}

if (failures.length) {
  console.error('product images need fixing:');
  for (const f of failures) console.error('   ' + f);
  process.exit(1);
}

console.log('product-image gate passed.');
