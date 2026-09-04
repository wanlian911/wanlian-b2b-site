import re, io, sys

for p in sys.argv[1:]:
    s = io.open(p, encoding='utf-8').read()
    body = s.split('---',2)[2]
    chunks = re.findall(r'>([^<]*)<', body)
    print('FILE:', p.split('\\')[-1])
    for ch in chunks:
        for m in re.finditer(r'\bas\b', ch):
            a = max(0, m.start()-50); b = min(len(ch), m.end()+50)
            print('   ...' + ch[a:b].replace('\n',' ') + '...')
