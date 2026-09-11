const fs = require('fs');
const f = process.argv[2];
const s = fs.readFileSync(f, 'utf8');
const links = [...s.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
console.log('FILE:', f);
console.log('--- LINKS:');
links.forEach(l => console.log(' ', l));
const noRu = links.filter(l => l.startsWith('/') && !l.startsWith('/ru') && !l.includes('wa.me'));
console.log('Internal links missing /ru prefix:', noRu.length ? noRu.join(', ') : 'NONE');
console.log('Layout closed:', s.includes('</Layout>'));
console.log('locale ru:', s.includes('locale="ru"'));
const t = s.match(/title="([^"]+)"/); const d = s.match(/description="([^"]+)"/);
console.log('title len:', t ? t[1].length : 'MISSING', '|', t && t[1]);
console.log('desc len:', d ? d[1].length : 'MISSING');
const ids = [...s.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
console.log('IDS:', ids.join(','));
const tag = re => [...s.matchAll(new RegExp(re, 'g'))].length;
const pairs = { p: ['<p[\\s>]', '</p>'], div: ['<div[\\s>]', '</div>'], li: ['<li[\\s>]', '</li>'], td: ['<td[\\s>]', '</td>'], th: ['<th[\\s>]', '</th>'], tr: ['<tr[\\s>]', '</tr>'], ul: ['<ul[\\s>]', '</ul>'], table: ['<table[\\s>]', '</table>'], thead: ['<thead[\\s>]', '</thead>'], tbody: ['<tbody[\\s>]', '</tbody>'], details: ['<details[\\s>]', '</details>'], summary: ['<summary[\\s>]', '</summary>'], main: ['<main[\\s>]', '</main>'], article: ['<article[\\s>]', '</article>'], nav: ['<nav[\\s>]', '</nav>'], h2: ['<h2[\\s>]', '</h2>'], h1: ['<h1[\\s>]', '</h1>'], strong: ['<strong[\\s>]', '</strong>'], a: ['<a[\\s>]', '</a>'], em: ['<em[\\s>]', '</em>'] };
let balanced = true;
for (const [n, [o, c]] of Object.entries(pairs)) {
  const a = tag(o), b = tag(c);
  if (a !== b) { balanced = false; console.log('UNBALANCED:', n, a, b); }
}
console.log(balanced ? 'TAG BALANCE: OK' : 'TAG BALANCE: FAIL');
// visible text only: strip frontmatter (first 2 --- blocks), strip tags
let body = s.replace(/^---[\s\S]*?---\n?/, '').replace(/^---[\s\S]*?---\n?/, '');
body = body.replace(/\{[^}]*\}/g, ' ').replace(/<[^>]+>/g, ' ');
body = body.replace(/"[^"]*"/g, ' ');
const latin = [...body.matchAll(/\b[A-Za-z][A-Za-z&;=#\u221A/-]{3,}\b/g)].map(m => m[0]);
const ok = new Set(['ZST','ZSTDY','ZSTBS','T-ZSTBS','NFPA','UL','FM','LPCB','GB','DN','OS','Y','mm','bar','min','Q','K','sqrtP','GB 5135','NFPA 13','ISO','9001','ZSFZ','ZSFM','ZSFY','ZSJZ','DN15-DN20','DN15','DN20','K=80','K=115','K','80','115','57','68','79','93','141','webp','png','jpg','wa','me','B2B','OEM','ODM','MOQ','Chrome','chrome','chrome finish']);
const bad = [...new Set(latin)].filter(w => !ok.has(w));
console.log('VISUAL LATIN TOKENS (manual review):', bad.length ? bad.join(' | ') : 'NONE');
