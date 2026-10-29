// Gate: verify that each locale's body text is actually written in that locale.
// Guards against dictionary-swapped "pidgin" output and untranslated pages,
// which pass every metadata check (lang/dir, hreflang, canonical, 200, prefixes).
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src');
const BASELINE_PATH = path.join(ROOT, 'scripts', 'locale-language-baseline.json');
const LO = ['en', 'es', 'ru', 'fr', 'ar', 'pt', 'de', 'tr', 'id'];
const FAMILY = { es: 'rom', pt: 'rom', fr: 'rom', en: 'ger', de: 'ger', ru: 'slav', ar: 'sem', tr: 'tur', id: 'aus' };

const FULL = {
  en: [' the ', ' and ', ' with ', ' your ', ' are ', ' that ', ' this ', ' from ', ' will ', ' you ', ' our ', ' we '],
  es: [' los ', ' las ', ' del ', ' cómo ', ' dónde ', ' según ', ' también ', ' cuando ', ' hasta ', ' donde ', 'ción', ' qué ', ' está ', ' por ', ' para ', ' se ', ' su '],
  pt: [' de ', ' da ', ' do ', ' dos ', ' das ', ' uma ', ' os ', ' as ', ' são ', ' nossa ', ' nosso ', ' você ', ' também ', ' após ', ' pelos ', ' pelas ', ' pressão ', ' produção ', ' conformidade ', ' estão ', 'ão ', 'ões ', 'ção', ' está ', ' para ', ' com ', ' cada '],
  de: [' und ', ' nicht ', ' werden ', ' können ', ' müssen ', ' wird ', ' dass ', ' über ', ' wäre ', ' welche ', ' für ', ' von ', ' der ', ' die ', ' das ', ' ist ', ' mit ', ' auch '],
  fr: [' une ', ' dans ', ' vous ', ' nous ', ' cette ', ' également ', ' très ', ' être ', ' avant ', ' après ', ' le ', ' la ', ' les ', ' des ', ' est ', ' pour ', ' avec '],
  ru: [' и ', ' не ', ' для ', ' или ', ' это ', ' при ', ' если ', ' когда ', ' как ', ' но ', ' с ', ' на '],
  ar: [' من ', ' في ', ' على ', ' إلى ', ' الذي ', ' التي ', ' مع ', ' كيف ', ' لماذا ', ' هل ', ' أو ', ' ثم '],
  tr: [' için ', ' değil ', ' nasıl ', ' ancak ', ' bir ', ' ile ', ' olduğu ', 'ması ', 'ları ', 'leri ', ' ve ', ' bu ', ' gibi '],
  id: [' yang ', ' dengan ', ' untuk ', ' adalah ', ' atau ', ' kami ', ' anda ', ' dari ', ' dalam ', ' tidak ', ' dapat ', ' setiap ', ' juga ', ' sebelum ', ' setelah ', ' dan ', ' ini ']
};

const NARROW = {
  en: [' the ', ' with ', ' your ', ' that ', ' this ', ' will ', ' our '],
  es: [' los ', ' las ', ' del ', ' cómo ', ' dónde ', ' según ', ' también ', ' qué '],
  pt: [' nossa ', ' nosso ', ' você ', ' também ', ' após ', ' pressão ', ' produção ', ' conformidade ', ' estão ', 'ões ', 'ção'],
  de: [' und ', ' nicht ', ' werden ', ' können ', ' müssen ', ' dass ', ' über ', ' welche '],
  fr: [' une ', ' dans ', ' vous ', ' nous ', ' cette ', ' également ', ' très ', ' avant '],
  ru: [' и ', ' не ', ' для ', ' или ', ' это ', ' если ', ' когда '],
  ar: [' من ', ' في ', ' على ', ' إلى ', ' الذي ', ' التي ', ' كيف '],
  tr: [' için ', ' değil ', ' nasıl ', ' ancak ', ' olduğu ', 'ması ', 'ları ', 'leri '],
  id: [' yang ', ' dengan ', ' untuk ', ' adalah ', ' kami ', ' anda ', ' sebelum ', ' setelah ', ' setiap ']
};

// Rule 2: single-character tokens match across unrelated languages
// (Turkish "kelepce" scored as French via a bare c-cedilla). Drop them.
let dropped = 0;
for (const table of [FULL, NARROW]) {
  for (const L of Object.keys(table)) {
    const kept = [];
    for (const t of table[L]) { if (t.trim().length > 1) kept.push(t); else dropped++; }
    table[L] = kept;
  }
}

function prof(F, L) { return FAMILY[F] === FAMILY[L] ? NARROW[F] : FULL[F]; }

// Rule 1: keep every Unicode letter. Replacing non-ASCII with a space makes
// voc/uber/i-in style tokens unreachable, which reads as "clean" but is blind.
function clean(raw) {
  const s = String(raw)
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]*>/g, ' ');
  return ' ' + s.replace(/[^\p{L}]+/gu, ' ').toLowerCase() + ' ';
}

function cnt(hay, list) {
  let n = 0;
  for (const s of list) {
    let i = 0;
    for (;;) { const j = hay.indexOf(s, i); if (j < 0) break; n++; i = j + 1; }
  }
  return n;
}

function median(a) { const v = a.slice().sort((x, y) => x - y); return v.length ? v[Math.floor(v.length / 2)] : 0; }

function scriptPct(t) {
  const letters = (t.match(/\p{L}/gu) || []).length;
  const nonLatin = (t.match(/[\u0400-\u04FF\u0600-\u06FF]/gu) || []).length;
  return letters === 0 ? 0 : Math.round(100 * nonLatin / letters);
}

function selfTest() {
  const problems = [];
  const pidginPt = ('A Wanlian Fluid é uma fabricante e exportadora sediada em Quanzhou de katup industriais, '
    + 'com linhas de produção próprias e pressão de teste por unit para cada conformidade de produção.').repeat(12);
  const goodId = ('Setiap katup dengan dudukan elastis diperiksa sebelum pengiriman, dan kami dapat '
    + 'menyediakan laporan pengujian untuk setiap unit yang anda pilih atau butuhkan.').repeat(12);
  if (cnt(clean(goodId), prof('id', 'id')) < 20) problems.push('id native profile did not fire on Indonesian sample');
  if (cnt(clean(pidginPt), prof('id', 'id')) > 10) problems.push('id native profile fired on Portuguese skeleton sample');
  if (dropped === 0) problems.push('no single-char tokens were dropped - sanitizer may be inert');
  // Accent survival: if clean() or the file write mangles accented letters, every
  // Romance/Germanic profile silently stops matching and the gate reports "clean".
  if (cnt(clean('você também pressão produção estão'), prof('pt', 'id')) < 4) problems.push('accented Portuguese tokens unmatched - accent handling broken');
  if (cnt(clean('kelepçe için değil nasıl'), prof('tr', 'id')) < 2) problems.push('Turkish diacritic tokens unmatched - accent handling broken');
  return { problems: problems, dropped: dropped };
}

const st = selfTest();
if (st.problems.length) {
  console.log('SELF-TEST FAILED - the gate itself is broken, refusing to certify anything:');
  for (const p of st.problems) console.log('  - ' + p);
  process.exitCode = 1;
  process.exit(1);
}

function listFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listFiles(p));
    else if (/\.(astro|ts)$/.test(e.name)) out.push(p);
  }
  return out;
}

function locOf(rel) {
  const p = rel.split('/');
  if (p[0] === 'pages') return (p.length > 2 && LO.indexOf(p[1]) >= 0) ? p[1] : (p.length === 2 ? 'en' : null);
  const dm = rel.match(/(?:^|\/)([a-z]{2})-parts\//);
  if (dm && LO.indexOf(dm[1]) >= 0) return dm[1];
  const fm = rel.match(/\.([a-z]{2})\.ts$/);
  if (fm && LO.indexOf(fm[1]) >= 0) return fm[1];
  if (/\/(products|guides|tags)\.ts$/.test(rel)) return 'en';
  return null;
}

const items = [];
for (const f of listFiles(path.join(SRC, 'pages')).concat(listFiles(path.join(SRC, 'utils')))) {
  const rel = path.relative(SRC, f).split(path.sep).join('/');
  const raw = fs.readFileSync(f, 'utf8');
  if (rel === 'utils/ui.ts' || rel === 'i18n/ui.ts') {
    const rx = /^ {2}([a-z]{2}): \{/gm;
    const marks = [];
    let m;
    while ((m = rx.exec(raw)) !== null) marks.push({ loc: m[1], at: m.index });
    for (let i = 0; i < marks.length; i++) {
      const end = i + 1 < marks.length ? marks[i + 1].at : raw.length;
      const seg = raw.slice(marks[i].at, end);
      if (LO.indexOf(marks[i].loc) >= 0 && seg.length > 400) items.push({ rel: 'i18n/ui.ts#' + marks[i].loc, exp: marks[i].loc, txt: clean(seg) });
    }
    continue;
  }
  const e = locOf(rel);
  if (!e) continue;
  items.push({ rel: rel, exp: e, txt: clean(raw) });
}

if (items.length < 100) {
  console.log('FAIL: only ' + items.length + ' units scanned - expected 500+. The scanner is not seeing the source tree.');
  process.exit(1);
}

const groups = {};
for (const it of items) (groups[it.exp] = groups[it.exp] || []).push(it);

const violations = [];
const uniform = [];
for (const L of LO) {
  const g = groups[L] || [];
  if (!g.length || L === 'en') continue;
  for (const F of LO) {
    if (F === L) continue;
    const score = (x) => {
      const a = cnt(x.txt, prof(F, L));
      const b = cnt(x.txt, prof(L, L));
      return { a: a, b: b, r: a / (a + b + 1) };
    };
    const per = g.map(score);
    const med = median(per.map((x) => x.r));
    const medFor = median(per.map((x) => x.a));
    if (med > 0.45 && medFor >= 25) uniform.push({ loc: L, f: F, med: med, medFor: medFor, n: g.length });
    for (let i = 0; i < g.length; i++) {
      const s = per[i];
      if (s.r > med + 0.25 && s.a >= 25 && s.a > s.b) violations.push({ loc: L, f: F, rel: g[i].rel, nat: s.b, for: s.a, r: s.r, med: med });
    }
  }
}

const scriptBad = [];
for (const L of ['ru', 'ar']) {
  const g = groups[L] || [];
  if (!g.length) continue;
  const med = median(g.map((x) => scriptPct(x.txt)));
  if (med < 50) scriptBad.push(L + ' median non-Latin letters ' + med + '%');
}

let baseline = { units: [] };
if (fs.existsSync(BASELINE_PATH)) baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8'));
const allowed = new Set(baseline.units);

console.log('units=' + items.length + '  singleCharTokensDropped=' + st.dropped + '  violations=' + violations.length + '  baseline=' + allowed.size);
for (const L of LO) {
  const g = groups[L] || [];
  if (!g.length) continue;
  const med = median(g.map((x) => cnt(x.txt, prof(L, L))));
  console.log('  ' + L + ' units=' + g.length + ' medianNativeScore=' + med + ' flagged=' + violations.filter((v) => v.loc === L).length);
}

const fresh = violations.filter((v) => !allowed.has(v.loc + ' ' + v.rel));
const resolved = baseline.units.filter((u) => !violations.some((v) => v.loc + ' ' + v.rel === u));
if (resolved.length) console.log('  note: ' + resolved.length + ' baseline unit(s) now pass - shrink the baseline: ' + resolved.join(', '));
for (const u of uniform) console.log('  LOCALE_LEVEL ' + u.loc + ' vs ' + u.f + ' medianRatio=' + u.med.toFixed(2) + ' medianForeign=' + u.medFor);
for (const s of scriptBad) console.log('  SCRIPT ' + s);

if (fresh.length || uniform.length || scriptBad.length) {
  console.log('FAIL: locale language identity problems found');
  for (const v of fresh) console.log('  NEW ' + v.loc + ' body looks like ' + v.f + ' (native=' + v.nat + ' foreign=' + v.for + ' ratio=' + v.r.toFixed(2) + ' localeMedian=' + v.med.toFixed(2) + ')  src/' + v.rel);
  console.log('  Fix by translating from the English source. Do not add to the baseline unless the text really is correct.');
  process.exit(1);
}
console.log('OK: no new locale-language violations (' + violations.length + ' known, ratcheted)');
