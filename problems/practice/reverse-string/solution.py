s = "Hello, World!"

def reforma(s):
    ns = []
    # Empezamos en la última posición (len(s)-1), hasta -1 (exclusivo, o sea 0), bajando de 1 en 1
    for i in range(len(s) - 1, -1, -1):
        ns.append(s[i])

    return "".join(ns)


print(reforma(s))
