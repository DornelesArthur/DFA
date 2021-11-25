# Matriz DFA
dfa = []
for y in range(38):
    linha = []
    for x in range(24):
        linha.append(x)
    dfa.append(linha)

for x in range(38):
    print(dfa[x])