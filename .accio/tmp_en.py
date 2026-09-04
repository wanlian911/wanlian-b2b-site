import re
files = [
    r'C:\Users\WHD\AccioWork\2026-09-04-15-14-36-204-baee3281\wanlian-b2b-site\src\pages\es\guides\fire-water-cannon-buying-guide.astro',
    r'C:\Users\WHD\AccioWork\2026-09-04-15-14-36-204-baee3281\wanlian-b2b-site\src\pages\es\guides\fire-extinguisher-selection-guide.astro'
]
stop = [' the ', ' and ', ' for ', ' with ', ' from ', ' that ', ' this ', ' you ', ' your ', ' our ', ' are ', ' is ', ' to ', ' of ', ' on ', ' in ', ' at ', ' what ', ' which ', ' when ', ' can ', ' need ', ' fire ', ' water ', ' guide ', ' request ', ' quote ', ' chat ', ' frequently ', ' asked ', ' questions ', ' smoke ', ' wet ', ' dry ', ' powder ', ' class ', ' when ', ' how ', ' why ', ' or ', ' not ', ' note ', ' send ', ' series ', ' unit ', ' page ', ' best ', ' suitable ', ' fixed ', ' remote ', ' auto ', ' selection ', ' buying ', ' range ', ' standard ', ' yes ', ' no ']
for f in files:
    s = open(f, encoding='utf-8').read()
    body = s.split('---', 2)[2]  # after frontmatter
    # remove tags and comments
    txt = re.sub(r'<!--.*?-->', ' ', body, flags=re.S)
    txt = re.sub(r'<[^>]+>', ' ', txt)
    txt = re.sub(r'\{[^}]*\}', ' ', txt)  # JSX expressions/attributes remnants
    txt = re.sub(r'https?://\S+', ' ', txt)
    words = re.split(r'\s+', txt)
    words = [w for w in words if w]
    joined = ' ' + ' '.join(words) + ' '
    lower = ' ' + joined.lower() + ' '
    hits = [st for st in stop if st in lower]
    print('===', f.replace('\\', '/').split('es/guides/')[-1])
    print('visible words:', len(words), '| suspicious EN tokens:', hits if hits else 'NONE')
