import fs from 'node:fs';
import path from 'node:path';

let n = 0, cjk = 0, badHtml = 0, badScript = 0, badCanon = 0, badGtag = 0, ldOk = 0, ldFail = 0;
const cjkRe = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g;

function walk(d) {
  for (const e of fs.readdirSync(d)) {
    const f = path.join(d, e);
    if (fs.statSync(f).isDirectory()) { walk(f); continue; }
    if (!e.endsWith('.html')) continue;
    n++;
    const h = fs.readFileSync(f, 'utf8');
    const m = h.match(cjkRe);
    if (m) cjk += m.length;
    if (!h.includes('</html>') || !h.includes('</body>')) badHtml++;
    const so = (h.match(/<script/g) || []).length;
    const sc = (h.match(/<\/script>/g) || []).length;
    if (so !== sc) badScript++;
    if (!h.includes('rel="canonical"')) badCanon++;
    if (!h.includes('G-TQPERQY9VN')) badGtag++;
    for (const j of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(j[1]); ldOk++; } catch { ldFail++; }
    }
  }
}

walk('dist');
console.log(JSON.stringify({ htmlFiles: n, cjkRemaining: cjk, brokenHtml: badHtml, unbalancedScript: badScript, missingCanonical: badCanon, missingGtag: badGtag, ldJsonOk: ldOk, ldJsonFail: ldFail }));
if (n === 0) process.exit(1);
