// Applies SEO title/description edits from a CSV to src/utils/products.ts.
// Designed to replace "rewrite the whole 1500-line file" with a reviewable,
// validated, per-product edit.
//
// Usage:
//   node scripts/apply-seo.mjs src/utils/products.ts seo.csv           # dry run
//   node scripts/apply-seo.mjs src/utils/products.ts seo.csv --write   # apply
//
// CSV format (header required):
//   slug,seoTitle,seoDescription
//   resilient-seat-flanged-gate-valve-z41x,Title here,Description here
//
// Guards:
//   - every slug in the CSV must exist in products.ts, and every product must be
//     covered only if --strict is passed
//   - product count must be identical before/after
//   - seoTitle <= 60 chars, seoDescription <= 160 chars
//   - ASCII apostrophes are converted to typographic ' so quoted strings can
//     never terminate early (the exact bug that broke the French homepage)
import { readFileSync, writeFileSync } from 'node:fs';

const [file, csvPath, ...flags] = process.argv.slice(2);
const write = flags.includes('--write');
const strict = flags.includes('--strict');
if (!file || !csvPath) {
  console.error('usage: node apply-seo.mjs <products.ts> <seo.csv> [--write] [--strict]');
  process.exit(2);
}

const TITLE_MAX = 60;
const DESC_MAX = 160;

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i += 1; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  const [header, ...body] = rows.filter((r) => r.length > 1);
  return body.map((r) => Object.fromEntries(header.map((h, i) => [h.trim(), (r[i] ?? '').trim()])));
}

const source = readFileSync(file, 'utf8');
const lines = source.split('\n');
const slugLines = [];
lines.forEach((line, i) => {
  const m = line.match(/^\s{4}slug:\s*'(.+)',?\s*$/);
  if (m) slugLines.push({ slug: m[1], line: i });
});
if (slugLines.length === 0) {
  console.error('FAIL: no products found - is this the right file?');
  process.exit(1);
}

const rows = parseCsv(readFileSync(csvPath, 'utf8'));
const bySlug = new Map(slugLines.map((s) => [s.slug, s]));
const problems = [];
const clean = (v) => v.replace(/'/g, '\u2019').replace(/\\/g, '\\\\');

for (const row of rows) {
  const slug = row.slug;
  if (!slug) { problems.push('row without slug'); continue; }
  if (!bySlug.has(slug)) { problems.push(`unknown slug: ${slug}`); continue; }
  if (row.seoTitle && row.seoTitle.length > TITLE_MAX) problems.push(`${slug}: seoTitle ${row.seoTitle.length}/${TITLE_MAX}`);
  if (row.seoDescription && row.seoDescription.length > DESC_MAX) problems.push(`${slug}: seoDescription ${row.seoDescription.length}/${DESC_MAX}`);
}
if (strict) {
  const covered = new Set(rows.map((r) => r.slug));
  slugLines.forEach((s) => { if (!covered.has(s.slug)) problems.push(`not covered: ${s.slug}`); });
}
if (problems.length) {
  console.error(`FAIL: ${problems.length} problem(s), nothing written`);
  problems.forEach((p) => console.error(`  - ${p}`));
  process.exit(1);
}

// Replace only inside each product block, never touching other keys.
const sorted = [...bySlug.values()].sort((a, b) => a.line - b.line);
let changed = 0;
for (const row of rows) {
  const start = bySlug.get(row.slug).line;
  const nextLine = sorted.find((s) => s.line > start)?.line ?? lines.length;
  for (let i = start; i < nextLine; i += 1) {
    if (row.seoTitle && /^(\s{4}seoTitle:\s*)'/.test(lines[i])) {
      lines[i] = `${lines[i].match(/^(\s{4}seoTitle:\s*)/)[1]}'${clean(row.seoTitle)}',`;
      changed += 1;
    }
    if (row.seoDescription && /^(\s{4}seoDescription:\s*)'/.test(lines[i])) {
      lines[i] = `${lines[i].match(/^(\s{4}seoDescription:\s*)/)[1]}'${clean(row.seoDescription)}',`;
      changed += 1;
    }
  }
}

const output = lines.join('\n');
const before = (source.match(/^\s{4}id:\s*'/gm) || []).length;
const after = (output.match(/^\s{4}id:\s*'/gm) || []).length;
if (before !== after) {
  console.error(`FAIL: product count changed ${before} -> ${after}, nothing written`);
  process.exit(1);
}

console.log(`products: ${before}, csv rows: ${rows.length}, fields replaced: ${changed}`);
if (!write) {
  console.log('dry run only - re-run with --write to apply');
  process.exit(0);
}
writeFileSync(file, output, 'utf8');
console.log(`written: ${file}`);
