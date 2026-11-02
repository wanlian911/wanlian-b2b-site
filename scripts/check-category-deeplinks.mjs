// Gate: every literal #category=<name> deep link in a locale's pages must name a
// category that locale's own product data actually emits, otherwise the products
// page loads, the filter matches nothing, and nothing fails.
// Data files mix quote styles (fr uses double quotes wherever a name contains '),
// so both are parsed here.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
const LOCALES = ['en', 'es', 'ru', 'fr', 'ar', 'pt', 'de', 'tr', 'id'];
const SQ = String.fromCharCode(39);
const DQ = String.fromCharCode(34);
const NL = String.fromCharCode(10);

function unescapeJs(s) {
  return s.split('\\\\' + SQ).join(SQ).split('\\\\' + DQ).join(DQ).split('\\\\n').join(NL);
}

function dataFiles(locale) {
  const out = [];
  const one = path.join(SRC, 'utils', locale === 'en' ? 'products.ts' : 'products.' + locale + '.ts');
  if (fs.existsSync(one)) out.push(one);
  const dir = path.join(SRC, 'utils', locale + '-parts');
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir)) if (f.endsWith('.ts')) out.push(path.join(dir, f));
  }
  return out;
}

export function categoriesFor(locale) {
  let blob = '';
  for (const f of dataFiles(locale)) blob += fs.readFileSync(f, 'utf8') + NL;
  const cats = [];
  for (const delim of [SQ, DQ]) {
    const rx = new RegExp('category: *' + delim + '([^' + delim + ']+)' + delim, 'g');
    let m;
    while ((m = rx.exec(blob)) !== null) {
      const v = unescapeJs(m[1]);
      if (cats.indexOf(v) < 0) cats.push(v);
    }
  }
  return cats;
}

function pageFiles(locale) {
  const dir = locale === 'en' ? path.join(SRC, 'pages') : path.join(SRC, 'pages', locale);
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isFile() && e.name.endsWith('.astro')) out.push(path.join(dir, e.name));
  }
  return out;
}

const HREF_RX = new RegExp('href:\\s*(' + SQ + '|' + DQ + ')((?:(?!\\1)[\\s\\S])+?)\\1', 'g');

export function audit() {
  const violations = [];
  let ok = 0;
  let templateSafe = 0;
  const perLocale = [];
  for (const loc of LOCALES) {
    const cats = categoriesFor(loc);
    if (cats.length === 0) {
      violations.push({ loc: loc, file: '(data)', line: 0, value: 'no categories parsed for ' + loc });
      continue;
    }
    let locOk = 0;
    let locBad = 0;
    for (const f of pageFiles(loc)) {
      const txt = fs.readFileSync(f, 'utf8');
      const lines = txt.split(NL);
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const tpl = line.match(/#\w+=\$\{encodeURIComponent\(/g);
        if (tpl) templateSafe += tpl.length;
        for (const delim of [SQ, DQ]) {
          const rx = new RegExp('href: *' + delim + '([^' + delim + ']+)' + delim, 'g');
          let m;
          while ((m = rx.exec(line)) !== null) {
            const href = unescapeJs(m[1]);
            const at = href.indexOf('#category=');
            if (at < 0) continue;
            const raw = href.slice(at + '#category='.length);
            if (raw.indexOf('$') >= 0 || raw.indexOf('{') >= 0) { templateSafe++; continue; }
            // Split on the raw ampersand first: inside a category name the
            // ampersand is always percent-encoded (%26), so a raw & here means a
            // following parameter, not part of the name.
            let dec = raw.split('&')[0];
            try { dec = decodeURIComponent(dec); } catch (e) { /* keep raw */ }
            if (cats.indexOf(dec) >= 0) { locOk++; ok++; }
            else {
              locBad++;
              violations.push({ loc: loc, file: path.basename(f), line: i + 1, value: dec });
            }
          }
        }
      }
    }
    perLocale.push({ loc: loc, cats: cats.length, ok: locOk, bad: locBad });
  }
  return { violations: violations, ok: ok, templateSafe: templateSafe, perLocale: perLocale };
}

function selfTest() {
  const cats = categoriesFor('fr');
  if (cats.length < 4) throw new Error('selftest: fr categories under-parsed: ' + cats.length);
  const withApostrophe = cats.filter((c) => c.indexOf(SQ) >= 0);
  if (withApostrophe.length === 0) throw new Error('selftest: no apostrophe-bearing fr category found - quote parsing is broken');
  const trCats = categoriesFor('tr');
  const amp = trCats.filter((c) => c.indexOf('&') >= 0);
  if (amp.length === 0) throw new Error('selftest: tr has no ampersand category - control invalid');
  return { frCats: cats.length, frApostrophe: withApostrophe.length, trAmpersand: amp.length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const st = selfTest();
  const res = audit();
  for (const p of res.perLocale) {
    process.stdout.write(p.loc.padEnd(4) + ' cats=' + p.cats + ' literalOk=' + p.ok + ' literalBad=' + p.bad + '\n');
  }
  for (const v of res.violations) {
    process.stdout.write('BAD ' + v.loc + ' ' + v.file + ':' + v.line + ' [' + v.value + ']\n');
  }
  process.stdout.write('selftest frCats=' + st.frCats + ' frWithApostrophe=' + st.frApostrophe + ' trWithAmpersand=' + st.trAmpersand + '\n');
  process.stdout.write('TOTAL literalOk=' + res.ok + ' templateGeneratedSafe=' + res.templateSafe + ' violations=' + res.violations.length + '\n');
  if (res.violations.length > 0) {
    process.stdout.write('FAIL: category deep links do not match the locale product data\n');
    process.exit(1);
  }
  process.stdout.write('OK: every category deep link matches its locale product data\n');
}
