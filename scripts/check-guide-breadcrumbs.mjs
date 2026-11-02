// Gate: every generated guide page must emit a BreadcrumbList.
//
// Why: Layout writes the JSON-LD only when a page passes the breadcrumbs prop. 55 guide pages were
// created without it and nothing failed - they shipped a visible trail with no structured data.
// This turns that silent omission into a build error.
//
// It inspects the produced HTML rather than the sources, because a source can look correct and
// still fail to emit. Run after `astro build`.
import { readdirSync, readFileSync } from 'node:fs';

const MARKER = '"@type":"BreadcrumbList"';
const NL = String.fromCharCode(10);
const DIST = process.argv[2] || 'dist';

function emitTest(s) { return s.indexOf(MARKER) >= 0; }

function isGuidePath(rel) {
  const p = rel.split(String.fromCharCode(92)).join('/');
  return p.indexOf('/guides/') >= 0 || p.indexOf('guides/') === 0;
}

function walk(dir, rel, out) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch (e) { return out; }
  for (const ent of entries) {
    const abs = dir + '/' + ent.name;
    const relPath = rel.length === 0 ? ent.name : rel + '/' + ent.name;
    if (ent.isDirectory()) { walk(abs, relPath, out); continue; }
    if (ent.name.endsWith('.html')) out.push({ abs: abs, rel: relPath });
  }
  return out;
}

const problems = [];
function selfTest() {
  if (!emitTest('x' + MARKER + 'y')) problems.push('selftest: marker missed');
  if (emitTest('{"@type":"Product"}')) problems.push('selftest: marker matched where absent');
  if (!isGuidePath('guides/a/index.html')) problems.push('selftest: en guide not classified');
  if (!isGuidePath('de/guides/a/index.html')) problems.push('selftest: locale guide not classified');
  if (isGuidePath('de/products/a/index.html')) problems.push('selftest: product page misclassified');
}

selfTest();
if (problems.length) {
  process.stdout.write('CHECKER IS BROKEN - verdict cannot be trusted' + NL + problems.join(NL) + NL);
  process.exit(2);
}

const all = walk(DIST, '', []);
const guides = all.filter(function (f) { return isGuidePath(f.rel); });
const missing = [];
for (const g of guides) {
  let text = '';
  try { text = readFileSync(g.abs, 'utf8'); } catch (e) { problems.push('unreadable ' + g.rel); continue; }
  if (!emitTest(text)) missing.push(g.rel);
}

process.stdout.write('guide_pages=' + guides.length + ' html_pages=' + all.length + ' missing_breadcrumb=' + missing.length + NL);
if (guides.length === 0) {
  process.stdout.write('FAIL - found no guide pages under ' + DIST + '; the scan is vacuous' + NL);
  process.exit(1);
}
if (missing.length > 0) {
  process.stdout.write(missing.slice(0, 25).join(NL) + NL);
  process.exit(1);
}
if (problems.length > 0) {
  process.stdout.write(problems.join(NL) + NL);
  process.exit(1);
}
process.stdout.write('OK - every guide page emits BreadcrumbList' + NL);
