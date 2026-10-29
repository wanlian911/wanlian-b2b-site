// Gate: a translated page must not emit an internal link that leaves its own locale.
//
// Why: the Arabic product page shipped a "related guides" block whose cards pointed
// at /guides/... (English) while sitting under an Arabic heading. Nothing failed -
// the page returned 200, hreflang stayed valid, and the visitor simply left their
// language. Static scan, so it runs pre-build like the other gates.
//
// A language switcher link is legitimately cross-locale, but it is rendered by
// Header/Footer from localeHref[], not written as a literal, so literals are safe
// to treat as defects.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, sep } from 'node:path';

const LOCALES = ['es', 'ru', 'fr', 'ar', 'pt', 'de', 'tr', 'id'];
const SECTIONS = [
  '/guides/', '/products/', '/contact/', '/about/', '/faq/', '/faq/',
  '/glossary/', '/sourcing-guide/', '/certificates/', '/blog/', '/tags/',
  '/applications/', '/cost-calculator/', '/whitepaper/', '/projects/'
];

// Ratchet: known debt that must not grow. Shrink these as the pages get fixed.
// The three Indonesian competitor guides are still partly English (64% of their
// paragraphs by stop-word density, measured on the live pages) and are held back
// with noindex; prefixing their remaining links now would point at untranslated
// pages. Counts here are from a main-aligned tree, not from a stale clone.
const BASELINE = {
  'src/pages/id/guides/wanlian-fluid-vs-ca-fire.astro': 1,
  'src/pages/id/guides/wanlian-fluid-vs-forede.astro': 1,
  'src/pages/id/guides/wanlian-fluid-vs-mueller.astro': 1
};

function walk(dir, acc) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith('.astro')) acc.push(p);
  }
  return acc;
}

const files = walk(join(process.cwd(), 'src', 'pages'), []);
const findings = new Map();
let scanned = 0;
let literals = 0;

for (const abs of files) {
  const rel = abs.split(sep).join('/');
  const relFromCwd = rel.slice(rel.indexOf('src/'));
  const m = relFromCwd.match(/^src\/pages\/([a-z]{2})\//);
  if (!m || !LOCALES.includes(m[1])) continue;
  const loc = m[1];
  scanned++;
  const src = readFileSync(abs, 'utf8');
  const hits = [];
  const BQ = String.fromCharCode(96);
  const prefixes = ['href: ' + "'", 'href: ' + '"', 'href: ' + BQ,
    'href=' + "'", 'href=' + '"', 'href=' + BQ,
    "href={'", 'href={"', 'href={' + BQ];
  for (const pre of prefixes) {
    for (const sec of SECTIONS) {
      const form = pre + sec;
      let i = src.indexOf(form);
      while (i !== -1) {
        hits.push(sec);
        i = src.indexOf(form, i + 1);
      }
    }
  }
  literals += hits.length;
  if (hits.length) findings.set(relFromCwd, hits.length);
}

if (scanned === 0) {
  process.stderr.write('check-link-locale-prefix: scanned 0 translated pages - gate is not working, failing.\n');
  process.exit(1);
}

const errors = [];
const shrunk = [];
for (const [file, count] of findings) {
  const allowed = BASELINE[file] === undefined ? 0 : BASELINE[file];
  if (count > allowed) {
    errors.push(file + ': ' + count + ' unprefixed internal links (allowed ' + allowed + ')');
  }
}
for (const file of Object.keys(BASELINE)) {
  const now = findings.get(file) || 0;
  if (now < BASELINE[file]) shrunk.push(file + ': ' + now + ' (baseline ' + BASELINE[file] + ') - tighten BASELINE');
}

process.stdout.write(
  'check-link-locale-prefix: translatedPages=' + scanned +
  ' unprefixedLiterals=' + literals +
  ' offendingFiles=' + findings.size + '\n'
);

if (errors.length) {
  process.stderr.write('check-link-locale-prefix: FAIL\n');
  for (const e of errors) process.stderr.write('  ' + e + '\n');
  process.stderr.write('  Fix: prefix the link with /<locale>/ , or resolve it from that\n');
  process.stderr.write('  locale data module (see src/pages/de/products/[slug].astro).\n');
  process.exit(1);
}
for (const s of shrunk) process.stdout.write('  note: ' + s + '\n');
process.stdout.write('check-link-locale-prefix: ok\n');
