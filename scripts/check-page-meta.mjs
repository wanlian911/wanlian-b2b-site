// Pre-build gate: <Layout title / description> length discipline, with a ratchet.
//
// Google truncates around 60 / 155 characters, so over-long values are a real
// (if soft) SEO defect. Existing pages are grandfathered in
// scripts/page-meta-baseline.json: the gate fails only on NEW offenders, so it
// can be switched on without breaking every deploy. Shrink the baseline over time.
//
// Usage: node scripts/check-page-meta.mjs [--root=src] [--update]
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const LIMITS = { title: 60, description: 155 };
const BASELINE = 'scripts/page-meta-baseline.json';

const rootArg = process.argv.find((a) => a.startsWith('--root='));
const root = rootArg ? rootArg.slice(7) : 'src';
const update = process.argv.includes('--update');

function walk(dir, out) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name.endsWith('.astro')) out.push(p);
  }
  return out;
}

function layoutProps(src) {
  const at = src.indexOf('<Layout');
  if (at < 0) return null;
  const tail = src.slice(at);
  const close = tail.indexOf('\n>');
  const head = close < 0 ? tail.slice(0, 4000) : tail.slice(0, close);
  const value = (name) => {
    const plain = name + '="';
    const k = head.indexOf(plain);
    if (k >= 0) {
      const start = k + plain.length;
      const end = head.indexOf('"', start);
      return end < 0 ? null : { literal: head.slice(start, end) };
    }
    return head.indexOf(name + '={') >= 0 ? { expression: true } : null;
  };
  return { title: value('title'), description: value('description') };
}

let files;
try {
  files = walk(root, []);
} catch (e) {
  console.error(`FAIL: cannot read ${root} -> ${e.message}`);
  process.exit(2);
}
if (files.length === 0) {
  console.error(`FAIL: no .astro files found under ${root} - check --root`);
  process.exit(2);
}

const violations = [];
let layoutPages = 0;
let expressionTitles = 0;
for (const f of files) {
  const props = layoutProps(readFileSync(f, 'utf8'));
  if (!props) continue;
  layoutPages++;
  for (const key of ['title', 'description']) {
    const v = props[key];
    if (v === null) {
      violations.push(`${f}|missing-${key}`);
    } else if (v.expression) {
      if (key === 'title') expressionTitles++;
    } else if (v.literal.length > LIMITS[key]) {
      violations.push(`${f}|${key}=${v.literal.length}`);
    }
  }
}

const violationKeys = violations.map((v) => v.split('|')[0] + '|' + v.split('|')[1].split('=')[0]);

if (update) {
  const grouped = {};
  for (const k of violationKeys) {
    const [file, kind] = k.split('|');
    grouped[file] = grouped[file] || [];
    if (!grouped[file].includes(kind)) grouped[file].push(kind);
  }
  writeFileSync(BASELINE, JSON.stringify(grouped, null, 2) + '\n');
  console.log(`page-meta: baseline written with ${violationKeys.length} tolerated violation(s) across ${Object.keys(grouped).length} file(s)`);
  process.exit(0);
}

if (!existsSync(BASELINE)) {
  console.error(`FAIL: ${BASELINE} missing. Run: node scripts/check-page-meta.mjs --update`);
  process.exit(2);
}
const baseline = JSON.parse(readFileSync(BASELINE, 'utf8'));
const tolerated = new Set(Object.keys(baseline).flatMap((f) => (baseline[f] || []).map((k) => f + '|' + k)));

const fresh = violationKeys.filter((k) => !tolerated.has(k));
const fixed = [...tolerated].filter((k) => !violationKeys.includes(k));

console.log(`page-meta: files=${files.length} layoutPages=${layoutPages} dynamicTitles=${expressionTitles} violations=${violationKeys.length} tolerated=${tolerated.size} new=${fresh.length} resolved=${fixed.length}`);
fresh.slice(0, 30).forEach((k) => console.log(`  ERROR ${k}  (limit title<=${LIMITS.title}, description<=${LIMITS.description})`));
if (fixed.length && root === 'src') console.log(`  note: ${fixed.length} tolerated violation(s) no longer present - shrink ${BASELINE}`);
if (fresh.length) {
  console.error('FAIL: new over-long page metadata. Shorten it, or run --update only after reviewing the diff.');
  process.exit(1);
}
