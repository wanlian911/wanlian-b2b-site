// Verifies an Astro page's FAQ block: the JS parses, items are complete,
// and the block is actually passed to <Layout ... faq={...} />.
// Run: node check-faq-block.mjs <file.astro> [<file2.astro> ...]
// Exit code 1 on any error.
import { readFileSync } from 'node:fs';

const files = process.argv.slice(2);
if (!files.length) {
  console.error('usage: node check-faq-block.mjs <file.astro> [...]');
  process.exit(2);
}
let errors = 0;

for (const file of files) {
  const src = readFileSync(file, 'utf8');
  const problems = [];

  // Any *Faqs / faq / ruFaq style const array
  const m = src.match(/const\s+(\w*[Ff]aq\w*)\s*=\s*(\[[\s\S]*?\n\]);/);
  if (!m) {
    problems.push('no FAQ const array found');
  }

  let items = [];
  if (!problems.length) {
    try {
      // Parsing is the real quoting test: an unescaped ASCII apostrophe inside a
      // single-quoted string makes this throw.
      items = new Function(`return ${m[2]};`)();
    } catch (e) {
      problems.push(`FAQ block does not parse: ${e.message}`);
    }
  }

  if (items.length) {
    if (items.length < 2) problems.push(`only ${items.length} FAQ item(s)`);
    items.forEach((it, i) => {
      if (!it.question || !it.answer) problems.push(`item ${i + 1}: empty question/answer`);
      if (String(it.answer || '').length < 40) problems.push(`item ${i + 1}: answer too thin to be useful`);
    });
  }

  const wired = new RegExp(`faq=\\{\\s*\\w*[Ff]aq\\w*\\s*\\}`).test(src);
  if (!wired) problems.push('FAQ const is not passed to <Layout faq={...}> — JSON-LD would never render');

  const locale = (file.match(/[\\/]([a-z]{2})[\\/]index\.astro$/) || [, 'en'])[1];
  console.log(`[${locale}] ${file}`);
  console.log(`  faqItems=${items.length} wiredToLayout=${wired ? 'yes' : 'no'}`);
  if (problems.length) {
    errors += problems.length;
    problems.forEach((p) => console.log(`  ERROR ${p}`));
  } else {
    console.log('  OK');
  }
}

console.log(`\nfiles=${files.length} errors=${errors}`);
process.exit(errors ? 1 : 0);
