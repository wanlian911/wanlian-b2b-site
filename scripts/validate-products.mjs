// Static validation for src/utils/products.ts (no build required).
// Usage: node validate-products.mjs <path-to-products.ts> [--min=52]
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const file = process.argv[2];
const minArg = process.argv.find((a) => a.startsWith('--min='));
const minCount = minArg ? Number(minArg.split('=')[1]) : 52;

const raw = readFileSync(file, 'utf8');
const errors = [];
const warnings = [];

if (!raw.trim()) errors.push('file is empty');

// Truncation guard (2026-10-27 incident: 676753d committed a 77-line products.ts).
const minLinesArg = process.argv.find((a) => a.startsWith('--min-lines='));
const minLines = minLinesArg ? Number(minLinesArg.split('=')[1]) : 1500;
const lineCount = raw.split(/\r?\n/).length;
if (lineCount < minLines) {
  errors.push(`file truncated: ${lineCount} lines < ${minLines} minimum - restore products.ts from git history before committing`);
}

// Strip the TypeScript interface block and the type annotation on the export.
let js = raw.replace(/export\s+interface\s+Product\s*\{[\s\S]*?\n\}/, '');
js = js.replace(/export\s+const\s+products\s*:\s*Product\[\]\s*=/, 'const products =');

let products;
try {
  products = vm.runInNewContext(`${js}\n;products;`, {}, { timeout: 5000 });
} catch (e) {
  console.error(`FAIL: cannot parse products.ts -> ${e.message}`);
  process.exit(2);
}

if (!Array.isArray(products)) {
  console.error('FAIL: `products` is not an array');
  process.exit(2);
}

if (products.length !== minCount) errors.push(`product count = ${products.length}, expected ${minCount}`);

const seenSlug = new Map();
const seenId = new Map();
for (const [i, p] of products.entries()) {
  const tag = p?.slug ?? `#${i}`;
  for (const key of ['id', 'slug', 'name', 'category', 'description', 'image', 'seoTitle', 'seoDescription']) {
    if (!p[key] || typeof p[key] !== 'string' || !p[key].trim()) errors.push(`${tag}: missing ${key}`);
  }
  if (!p.specs || typeof p.specs !== 'object' || Object.keys(p.specs).length === 0) errors.push(`${tag}: empty specs`);
  if (!Array.isArray(p.features) || p.features.length === 0) warnings.push(`${tag}: no features`);
  if (p.slug) {
    if (seenSlug.has(p.slug)) errors.push(`duplicate slug: ${p.slug} (also at ${seenSlug.get(p.slug)})`);
    else seenSlug.set(p.slug, i);
  }
  if (p.id) {
    if (seenId.has(p.id)) errors.push(`duplicate id: ${p.id}`);
    else seenId.set(p.id, i);
  }
  if (p.seoTitle && p.seoTitle.length > 60) warnings.push(`${tag}: seoTitle ${p.seoTitle.length} chars (>60)`);
  if (p.seoDescription && p.seoDescription.length > 160) warnings.push(`${tag}: seoDescription ${p.seoDescription.length} chars (>160)`);
  if (/\bUL Listed\b/i.test(p.seoTitle ?? '') && !/\bUL\b/.test(p.certifications ?? '')) {
    warnings.push(`${tag}: seoTitle claims "UL Listed" - verify certificate before publishing`);
  }
}

console.log(`products: ${products.length}`);
console.log(`slugs unique: ${seenSlug.size === products.length ? 'yes' : 'NO'}`);
console.log(`errors: ${errors.length}`);
errors.forEach((e) => console.log(`  ERROR ${e}`));
console.log(`warnings: ${warnings.length}`);
warnings.slice(0, 40).forEach((w) => console.log(`  WARN  ${w}`));
process.exit(errors.length ? 1 : 0);
