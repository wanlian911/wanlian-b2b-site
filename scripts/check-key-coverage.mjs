// Gate: every category that a built product page actually belongs to must exist as a key in that
// locale's per-category lookup tables.
//
// Why this exists: those tables feed blocks rendered behind a guard ({faqs.length > 0 && ...} or
// {info && ...}). When a key does not equal the real localized category name the lookup returns
// nothing, the block disappears from every page in that category, the build still exits 0, no URL
// 404s and every other gate stays green. Observed on de, where all six keys of faqByCategory and
// categoryInfo were invented names, so Applications and Testing vanished from all 45 German product
// pages, and guideByCategory did the same to the Related-Guides section.
//
// The truth set is read from the build output (JSON-LD Product.category), not by comparing locale
// key sets against each other: localized category sets legitimately differ (de merges two categories
// that the English catalogue keeps apart), so a name-set comparison would be wrong.
//
// Usage: node scripts/check-key-coverage.mjs [distDir] [--json]
// Proof that it can fail: WLFE_KEYCOVERAGE_SELFTEST=1 injects a category no key can match.

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const NL = String.fromCharCode(10);
const DQ = String.fromCharCode(34);
const SQ = String.fromCharCode(39);
const CAT_MARK = DQ + 'category' + DQ + ':' + DQ;
const arrFrom = Array.from;
const objKeys = Object.keys;
const readText = (f) => readFileSync(f, 'utf8').replace(/\r/g, '');
const RECORD_TAIL = ': Record<string,';
const COLON_AFTER = new RegExp(String.fromCharCode(94) + String.fromCharCode(92) + 's*:');

const ARGS = process.argv.slice(2);
const AS_JSON = ARGS.indexOf('--json') >= 0;
const DIST = ARGS.filter((a) => a.slice(0, 2) !== '--')[0] || 'dist';
const SELFTEST = process.env.WLFE_KEYCOVERAGE_SELFTEST === '1';

// Only category-keyed maps can be checked this way; other Record maps in the same file are keyed by
// something else and would produce false failures. Every Record name seen is printed so the blind
// spot stays visible.
function isCategoryKeyed(name) {
  return name.slice(-10) === 'ByCategory' || name === 'categoryInfo';
}

function categoriesIn(html) {
  const found = [];
  let at = html.indexOf(CAT_MARK);
  while (at >= 0) {
    const start = at + CAT_MARK.length;
    const end = html.indexOf(DQ, start);
    if (end < 0) break;
    found.push(html.slice(start, end));
    at = html.indexOf(CAT_MARK, end);
  }
  return found;
}

function recordNames(text) {
  const names = [];
  for (const line of text.split(NL)) {
    const t = line.trim();
    if (t.slice(0, 6) !== 'const ') continue;
    const tail = t.indexOf(RECORD_TAIL);
    if (tail < 0) continue;
    const name = t.slice(6, tail);
    if (/^[A-Za-z0-9_]+$/.test(name)) names.push(name);
  }
  return names;
}
function topKeys(text, declName) {
  const anchor = 'const ' + declName + RECORD_TAIL;
  const at = text.indexOf(anchor);
  if (at < 0) return null;
  const eq = text.indexOf('= {', at);
  if (eq < 0) return null;
  const open = eq + 2;
  if (open < 0) return null;
  let depth = 0;
  const keys = [];
  for (let i = open; i < text.length; i++) {
    const ch = text[i];
    if (ch === '{') {
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0) break;
    } else if (depth === 1 && (ch === SQ || ch === DQ)) {
      const end = text.indexOf(ch, i + 1);
      if (end < 0) break;
      if (COLON_AFTER.test(text.slice(end + 1, end + 12))) keys.push(text.slice(i + 1, end));
      i = end;
    }
  }
  return keys;
}

const problems = [];
const report = { locales: [], pages: 0, tables: 0, keys: 0, records: 0 };

if (!existsSync(DIST)) {
  problems.push('dist directory not found: ' + DIST + ' - run astro build first');
} else {
  const candidates = [{ code: 'en', prefix: '' }];
  for (const entry of readdirSync(DIST)) {
    if (!/^[a-z]{2}$/.test(entry)) continue;
    if (existsSync(join(DIST, entry, 'products', 'index.html'))) candidates.push({ code: entry, prefix: entry + '/' });
  }

  for (const loc of candidates) {
    if (!existsSync(join(DIST, loc.prefix, 'products', 'index.html'))) continue;
    const dir = join(DIST, loc.prefix, 'products');

    const cats = new Map();
    let pages = 0;
    for (const entry of readdirSync(dir)) {
      const pageDir = join(dir, entry);
      let isDir = false;
      try { isDir = statSync(pageDir).isDirectory(); } catch (e) { isDir = false; }
      if (!isDir) continue;
      const file = join(pageDir, 'index.html');
      if (!existsSync(file)) continue;
      const found = arrFrom(new Set(categoriesIn(readText(file)))).filter((c) => c.length);
      if (!found.length) continue;
      if (found.length > 1) {
        problems.push(loc.code + '/' + entry + ': ' + found.length + ' different category values in one page -> ' + found.join(' | '));
      }
      pages++;
      cats.set(found[0], (cats.get(found[0]) || 0) + 1);
    }
    if (SELFTEST) cats.set('ZZ deliberately missing category', 1);
    if (!pages) continue;

    const srcFile = join('src', 'pages', loc.prefix, 'products', '[slug].astro');
    const info = { code: loc.code, pages: pages, categories: arrFrom(cats.keys()).sort(), records: [], tables: {} };
    if (!existsSync(srcFile)) {
      info.skipped = 'no ' + srcFile;
      report.locales.push(info);
      continue;
    }
    const text = readText(srcFile);
    info.records = recordNames(text);
    report.records += info.records.length;
    const targets = info.records.filter(isCategoryKeyed);
    if (!targets.length) {
      info.skipped = 'no category-keyed Record table';
      report.locales.push(info);
      continue;
    }
    for (const name of targets) {
      const keys = topKeys(text, name);
      if (keys === null) { problems.push(loc.code + '/' + name + ': declaration found but keys unparsable'); continue; }
      if (!keys.length) { problems.push(loc.code + '/' + name + ': parsed 0 keys - parser broken or table empty'); continue; }
      const keySet = new Set(keys);
      const missing = arrFrom(cats.keys()).filter((c) => !keySet.has(c)).sort();
      const unused = keys.filter((k) => !cats.has(k)).sort();
      report.pages += pages;
      report.tables += 1;
      report.keys += keys.length;
      info.tables[name] = { keys: keys.length, missing: missing, unused: unused };
      if (missing.length) {
        problems.push(loc.code + ': ' + name + ' has no key for ' + missing.length + '/' + cats.size +
          ' real categories -> ' + missing.join(' | ') +
          ' (those pages silently lose the block fed by ' + name + '[product.category])');
      }
    }
    report.locales.push(info);
  }

  if (!report.locales.length) problems.push('no locale with built product pages found under ' + DIST);
  if (!report.pages) problems.push('parsed 0 product pages from ' + DIST + ' - gate would be a no-op');
  if (!report.tables) problems.push('no category-keyed table found in any locale product page - gate would be a no-op');
  if (!report.keys) problems.push('parsed 0 lookup keys across all locales - parser is broken');
}

if (AS_JSON) {
  process.stdout.write(JSON.stringify({ report: report, problems: problems }, null, 2) + NL);
} else {
  const out = [];
  out.push('scanned locales=' + report.locales.length + ' productPages=' + report.pages +
    ' categoryTables=' + report.tables + ' lookupKeys=' + report.keys + ' recordDeclsSeen=' + report.records);
  for (const l of report.locales) {
    const parts = [];
    for (const n of objKeys(l.tables)) {
      const t = l.tables[n];
      parts.push(n + '=' + t.keys + 'keys' +
        (t.missing.length ? ' MISSING=' + t.missing.length : '') +
        (t.unused.length ? ' unused=' + t.unused.length : ''));
    }
    out.push('  ' + l.code + ' pages=' + l.pages + (l.skipped ? '  SKIP: ' + l.skipped : '  ' + parts.join(' ')));
    for (const n of objKeys(l.tables)) {
      for (const x of l.tables[n].missing) out.push('      ' + n + ' MISSING key for category: ' + x);
      for (const x of l.tables[n].unused) out.push('      ' + n + ' key used by no built page: ' + x);
    }
  }
  process.stdout.write(out.join(NL) + NL);
}

if (problems.length) {
  process.stdout.write(problems.map((x) => 'check-key-coverage: ' + x).join(NL) + NL);
  process.stdout.write('check-key-coverage: ' + problems.length + ' problem(s)' + NL);
  process.exit(1);
}
process.stdout.write('check-key-coverage: OK' + NL);
