// Pre-build gate: Tailwind variant classes must use a colon, never a hyphen.
// A wrong token such as "hover-underline" does not throw, does not 404 and does
// not fail the build: the utility simply never gets generated, so the style is
// silently missing. This gate is the only thing that catches it.
//
// Usage: node scripts/check-class-variants.mjs [--root=src] [--quiet]
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const rootArg = process.argv.find((a) => a.startsWith('--root='));
const root = rootArg ? rootArg.slice(7) : 'src';
const quiet = process.argv.includes('--quiet');

const KNOWN_VARIANTS = new Set([
  'hover', 'focus', 'focus-visible', 'focus-within', 'active', 'visited', 'disabled',
  'group-hover', 'group-focus', 'group-focus-within', 'group-open', 'peer-hover', 'peer-focus',
  'open', 'first', 'last', 'odd', 'even', 'only',
  'sm', 'md', 'lg', 'xl', '2xl', 'max-sm', 'max-md',
  'rtl', 'ltr', 'motion-safe', 'motion-reduce', 'dark', 'print'
]);

// Only prefixes that can never be confused with a real utility name. Words such
// as "placeholder" and "marker" are deliberately absent: `placeholder-gray-500`
// is a legitimate utility, not a variant written with the wrong separator.
const BAD_PREFIXES = [
  'hover-', 'focus-', 'focus-visible-', 'focus-within-', 'active-', 'visited-', 'disabled-',
  'group-hover-', 'group-focus-', 'group-focus-within-', 'group-open-', 'peer-hover-',
  'open-', 'first-', 'last-', 'odd-', 'even-', 'only-',
  'sm-', 'md-', 'lg-', 'xl-', '2xl-', 'max-sm-', 'max-md-',
  'rtl-', 'ltr-', 'motion-safe-', 'motion-reduce-', 'dark-'
];

// A class token is `<variant>:<variant>:...:<utility>`. A defect shows up when a
// separator colon degraded into a hyphen, e.g. `hover-underline`.
function badTokensIn(value) {
  const hits = [];
  for (const token of value.split(' ')) {
    if (!token) continue;
    const segments = token.split(':');
    for (let i = 0; i < segments.length; i++) {
      const isLast = i === segments.length - 1;
      const base = segments[i].split('/')[0];
      if (!isLast && KNOWN_VARIANTS.has(base)) continue;
      if (BAD_PREFIXES.some((p) => base.startsWith(p))) hits.push(token);
    }
  }
  return [...new Set(hits)];
}

function astroFiles(dir, out) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) astroFiles(p, out);
    else if (entry.name.endsWith('.astro')) out.push(p);
  }
  return out;
}

function classValues(src) {
  const out = [];
  const marker = 'class="';
  let i = 0;
  while (true) {
    const k = src.indexOf(marker, i);
    if (k < 0) break;
    const start = k + marker.length;
    const end = src.indexOf('"', start);
    if (end < 0) break;
    out.push(src.slice(start, end));
    i = end + 1;
  }
  return out;
}

let files;
try {
  files = astroFiles(root, []);
} catch (e) {
  console.error(`FAIL: cannot read ${root} -> ${e.message}`);
  process.exit(2);
}

// Guard against a vacuous pass: if the walk finds nothing the path is wrong.
if (files.length === 0) {
  console.error(`FAIL: no .astro files found under ${root} - check --root`);
  process.exit(2);
}

let attrCount = 0;
const bad = [];
for (const f of files) {
  const src = readFileSync(f, 'utf8');
  if (src.charCodeAt(0) === 0xfeff) bad.push(`${f}: UTF-8 BOM (breaks frontmatter parsing)`);
  for (const value of classValues(src)) {
    attrCount++;
    for (const token of badTokensIn(value)) bad.push(`${f}: ${token}`);
  }
}

console.log(`class-variants: files=${files.length} classAttrs=${attrCount} violations=${bad.length}`);
if (!quiet) bad.slice(0, 30).forEach((b) => console.log(`  ERROR ${b}`));
if (bad.length) {
  console.error('FAIL: Tailwind variants must be written with a colon (hover:underline, sm:flex-col).');
  process.exit(1);
}
