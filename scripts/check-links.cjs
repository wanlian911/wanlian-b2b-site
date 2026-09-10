#!/usr/bin/env node
/**
 * 发版前站内质量检查（构建产物 dist/ 静态分析）
 * 1. 站内链接目标是否存在（死链）
 * 2. 站内链接是否缺尾斜杠（避免 308 重定向浪费抓取预算）
 * 3. canonical 是否自指（避免跨语言/跨页错误规范）
 *
 * 用法：node scripts/check-links.cjs
 * 退出码：0 = 全部通过；1 = 发现问题
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

if (!fs.existsSync(dist)) {
  console.error('未找到 dist/，请先运行 npm run build');
  process.exit(1);
}

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(dist);

const ASSET_RE = /\.(?:css|js|mjs|jpg|jpeg|png|webp|avif|gif|svg|ico|xml|txt|json|pdf|mp4|webm|woff2?|ttf|eot)$/i;

// 目标路径是否对应 dist 中的真实文件
function targetExists(clean) {
  const rel = clean.replace(/^\//, '');
  const abs = path.join(dist, rel);
  if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return true;
  if (fs.existsSync(abs) && fs.statSync(abs).isDirectory() && fs.existsSync(path.join(abs, 'index.html'))) return true;
  if (fs.existsSync(abs + '.html')) return true;
  if (fs.existsSync(path.join(abs, 'index.html'))) return true;
  return false;
}

const brokenLinks = [];
const noSlashLinks = [];
const canonicalMismatch = [];

for (const f of files) {
  const rel = path.relative(dist, f).replace(/\\/g, '/');
  const selfPath = '/' + rel.replace(/index\.html$/, '');
  const html = fs.readFileSync(f, 'utf8');

  const canMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (canMatch) {
    const can = canMatch[1].replace(/^https?:\/\/[^/]+/, '');
    if (can !== selfPath) canonicalMismatch.push({ page: selfPath, canonical: can });
  }

  const hrefRe = /href="([^"]+)"/g;
  let m;
  while ((m = hrefRe.exec(html)) !== null) {
    const href = m[1];
    if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/_astro/')) continue;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean || clean === '/') continue;
    if (!targetExists(clean)) {
      brokenLinks.push({ page: selfPath, href: clean });
      continue;
    }
    if (!ASSET_RE.test(clean) && !clean.endsWith('/')) {
      noSlashLinks.push({ page: selfPath, href: clean });
    }
  }
}

console.log('=== check-links ===');
console.log('扫描 HTML 文件:', files.length);

console.log('\n[1] 死链（目标不存在）:', brokenLinks.length);
brokenLinks.slice(0, 30).forEach(x => console.log(`  ${x.page}  ->  ${x.href}`));
if (brokenLinks.length > 30) console.log(`  ... 其余 ${brokenLinks.length - 30} 条`);

console.log('\n[2] 缺尾斜杠（触发 308）:', noSlashLinks.length);
const byHref = {};
for (const x of noSlashLinks) { (byHref[x.href] = byHref[x.href] || new Set()).add(x.page); }
Object.keys(byHref).slice(0, 20).forEach(h => console.log(`  ${h}  (${byHref[h].size} 个页面)`));
if (Object.keys(byHref).length > 20) console.log(`  ... 其余 ${Object.keys(byHref).length - 20} 个目标`);

console.log('\n[3] canonical 非自指:', canonicalMismatch.length);
canonicalMismatch.slice(0, 20).forEach(x => console.log(`  ${x.page}  ->  ${x.canonical}`));
if (canonicalMismatch.length > 20) console.log(`  ... 其余 ${canonicalMismatch.length - 20} 条`);

const failed = brokenLinks.length + noSlashLinks.length + canonicalMismatch.length;
console.log('\n结果:', failed === 0 ? 'PASS（全部通过）' : `FAIL（共 ${failed} 个问题）`);
process.exit(failed === 0 ? 0 : 1);
