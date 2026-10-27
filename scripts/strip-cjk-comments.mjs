import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const distDir = process.argv[2] || 'dist';

const cjk = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;
const cjkOnly = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g;
// HTML comments, never IE conditional comments like <!--[if ...]>
const htmlComment = /<!--(?!\[if)[\s\S]*?-->/g;
// Inline (non-src) script blocks. JSON-LD is excluded by type: its CJK text
// is data, and stripping "//" there would corrupt the JSON.
const inlineScript = /(<script(?![^>]*\bsrc=)(?![^>]*application\/ld\+json)[^>]*>)([\s\S]*?)(<\/script>)/g;

let htmlFiles = 0;
let filesChanged = 0;
let commentsRemoved = 0;
let cjkCharsRemoved = 0;

function count(m) {
  commentsRemoved++;
  cjkCharsRemoved += (m.match(cjkOnly) || []).length;
}

function stripBlockComments(js) {
  let out = js.replace(/\/\*[\s\S]*?\*\//g, (m) => {
    if (!cjk.test(m)) return m;
    count(m);
    return '';
  });
  out = out.replace(/[ \t]*\/\/[^\r\n]*/g, (m) => {
    if (!cjk.test(m)) return m;
    count(m);
    return '';
  });
  return out;
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      walk(full);
    } else if (entry.endsWith('.html')) {
      htmlFiles++;
      const original = readFileSync(full, 'utf8');
      let updated = original.replace(htmlComment, (m) => {
        if (!cjk.test(m)) return m;
        count(m);
        return '';
      });
      updated = updated.replace(inlineScript, (m, open, body, close) => {
        if (!cjk.test(body)) return m;
        return open + stripBlockComments(body) + close;
      });
      if (updated !== original) {
        writeFileSync(full, updated, 'utf8');
        filesChanged++;
      }
    }
  }
}

walk(distDir);

// Self-check: never report a clean pass if we touched zero HTML files.
if (htmlFiles === 0) {
  console.error(`no html files found under ${distDir} - check failed`);
  process.exit(1);
}

console.log(`scanned=${htmlFiles} files_changed=${filesChanged} comments_removed=${commentsRemoved} cjk_chars_removed=${cjkCharsRemoved}`);
