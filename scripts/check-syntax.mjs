// Pre-build syntax smoke test.
//
// The other gates read source text, so none of them can tell that a TypeScript
// file no longer parses: a duplicated quote in src/i18n/locales.ts passed every
// gate and would only have failed deep inside astro build. This closes that gap.
//
// Safety rule: this script may fail the build ONLY for a syntax error it
// positively detected in a source file. Anything unexpected about the script
// itself (parser not installed, unreadable directory, different API shape)
// prints a WARN and exits 0, so the gate can never break a deploy by being
// unavailable or by being wrong about its own environment.
//
// Usage: node scripts/check-syntax.mjs [--root=src]
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const rootArg = process.argv.find((a) => a.startsWith('--root='));
const root = rootArg ? rootArg.slice(7) : 'src';

function walk(dir, out) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name.endsWith('.ts')) out.push({ file: p, kind: 'ts' });
    else if (entry.name.endsWith('.astro')) out.push({ file: p, kind: 'astro' });
  }
  return out;
}

// For .astro files only the frontmatter block is TypeScript.
function frontmatter(src) {
  if (!src.startsWith('---')) return null;
  const end = src.indexOf('\n---', 3);
  if (end < 0) return null;
  return src.slice(src.indexOf('\n') + 1, end);
}

async function main() {
  let esbuild;
  try {
    esbuild = await import('esbuild');
  } catch (e) {
    console.log(`syntax: SKIPPED esbuild-unavailable (${e.code || e.message})`);
    return 0;
  }

  let files;
  try {
    files = walk(root, []);
  } catch (e) {
    console.log(`syntax: SKIPPED cannot-read-${root} (${e.code || e.message})`);
    return 0;
  }
  if (files.length === 0) {
    console.log(`syntax: SKIPPED no-source-under-${root}`);
    return 0;
  }

  const errors = [];
  let checked = 0;
  for (const item of files) {
    let code;
    try {
      const src = readFileSync(item.file, 'utf8');
      if (item.kind === 'ts') {
        code = src;
      } else {
        const fm = frontmatter(src);
        if (fm === null) continue;
        code = fm;
      }
    } catch (e) {
      console.log(`syntax: SKIPPED read-failure ${item.file} (${e.code || e.message})`);
      return 0;
    }
    try {
      await esbuild.transform(code, { loader: 'ts' });
      checked++;
    } catch (e) {
      const first = (e && e.errors && e.errors[0]) || null;
      if (!first) {
        console.log(`syntax: SKIPPED parser-shape ${item.file}`);
        return 0;
      }
      errors.push(`${item.file}:${first.location ? first.location.line : '?'} ${first.text}`);
      checked++;
    }
  }

  console.log(`syntax: files=${checked} errors=${errors.length}`);
  errors.slice(0, 20).forEach((m) => console.log(`  ERROR ${m}`));
  return errors.length ? 1 : 0;
}

main().then((code) => {
  process.exitCode = code;
  if (code) process.exit(1);
}).catch((e) => {
  console.log(`syntax: SKIPPED internal-failure (${e && e.message ? e.message : 'unknown'})`);
  process.exit(0);
});
