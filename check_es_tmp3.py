import re, io, sys

ENG = set('''the and for with you your from which what where when should would could have are is was this that these those their they will than more most less between about into onto upon only also then such them its it can not no or of to in on a as at be by if whether because however still other any each who whom whose while during through under over out off up down how why does do did done has had may might must'''.split())

for p in sys.argv[1:]:
    s = io.open(p, encoding='utf-8').read()
    body = s.split('---',2)[2]
    # remove astro map/expression blocks fully (balanced-ish: strip from { to matching ))}) end or next newline pattern)
    body = re.sub(r'\{[^}]*\{[^}]*\}[^}]*\}', ' ', body)   # nested expr blocks
    body = re.sub(r'\{[^}]*\}', ' ', body)
    # remove attributes: tags may span lines, so handle via state machine is overkill; instead remove attr= values
    # simpler: keep only text between '>' and '<'
    chunks = re.findall(r'>([^<]*)<', body)
    found = []
    for ch in chunks:
        ch = re.sub(r'&[a-zA-Z#0-9]+;', ' ', ch)
        for w in re.findall(r"[A-Za-z']+", ch):
            if w.lower() in ENG and len(w) > 1:
                found.append(w)
    # unique with counts
    from collections import Counter
    c = Counter(w.lower() for w in found)
    interesting = {k:v for k,v in c.items() if k in ('the','and','for','with','you','your','which','what','where','when','should','from','are','this','that','they','will','than','their','how','why','who','have','would','could','is','of','to','in','on','it','its','not','or','as','be','can','may','must','then','only','also','other','any','each','all')}
    print('FILE:', p.split('\\')[-1])
    if interesting:
        for k,v in sorted(interesting.items()):
            print('   %s x%d' % (k,v))
    else:
        print('   clean: no English prose function words in text nodes')
