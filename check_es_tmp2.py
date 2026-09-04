import re, io, sys

def tokens_of_textnode(body):
    # crude HTML tokenizer that yields only text content (drops tags+attrs)
    body = re.sub(r'<script.*?</script>', ' ', body, flags=re.S)
    body = re.sub(r'{[^}]*}', ' ', body)
    out = []
    for seg in re.split(r'<[^>]+>', body):
        seg = re.sub(r'&[a-zA-Z#0-9]+;', ' ', seg)
        seg = re.sub(r'[^\w\u00C0-\u024F\u00D1\u00F1 ]+', ' ', seg)
        out.append(seg)
    return ' '.join(out)

for p in sys.argv[1:]:
    s = io.open(p, encoding='utf-8').read()
    body = s.split('---',2)[2]
    text = tokens_of_textnode(body)
    words = re.findall(r"[\w\u00C0-\u024F\u00D1\u00F1]+", text)
    # flag runs of >=4 words that are pure ascii alpha (no accents) longer than 2 chars
    flags = []
    run = []
    for w in words:
        if re.fullmatch(r'[A-Za-z]{3,}', w):
            run.append(w)
            if len(run) >= 4:
                flags.append(' '.join(run))
        else:
            run = []
    print('FILE:', p.split('\\')[-1])
    seen = []
    for f in flags:
        if f not in seen:
            seen.append(f)
            print('  RUN:', f)
    if not seen:
        print('  No >=4-word ASCII runs')
