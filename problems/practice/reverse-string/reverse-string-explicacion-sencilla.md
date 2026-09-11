# Reverse String (Recorrido Inverso) — Explicación sencilla

## Explicación simple con dibujos

Idea: un explorador recorre la cadena desde el final hacia el inicio, y un escritor copia cada carácter que el explorador señala en una lista nueva.

Ejemplo corto: `s = "abc"` (el mismo proceso vale para `"Hello, World!"`).

```text
s =  [ a,  b,  c ]
        0   1   2
Explorador (i) empieza en 2, resultado = []

Paso 1: i=2 -> lee 'c' -> resultado = [c]
Paso 2: i=1 -> lee 'b' -> resultado = [c, b]
Paso 3: i=0 -> lee 'a' -> resultado = [c, b, a]
Fin (i < 0) -> unir -> "cba"
```

Traza corta con `"Hello, World!"`: el explorador lee `!`, `d`, `l`, `r`, ... hasta `H`; el escritor acumula `"!dlroW ,olleH"`.

Qué recordar: el índice empieza en `longitud - 1`, termina en `0`, y cada carácter leído se agrega al resultado en ese mismo orden.

