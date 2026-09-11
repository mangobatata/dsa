# Has Pair With Sum (Introducción a Two Pointers) — Explicación sencilla

## Explicación simple con dibujos

Idea: dos dedos sobre el arreglo ordenado, uno al inicio y otro al final. Cada paso suma los dos valores señalados y mueve un solo dedo según el resultado.

Ejemplo: `nums = [1, 3, 4, 7, 10]`, `target = 11`.

```text
Paso 1:  L                 R
       [ 1,  3,  4,  7, 10 ]   suma = 1 + 10 = 11 == 11 -> true
```

Traza corta: 1 + 10 = 11, coincide en el primer intento → `true`.

Segundo ejemplo con el mismo arreglo y `target = 20`:

```text
Paso 1: [ 1,  3,  4,  7, 10 ]   1 + 10 = 11 < 20  -> L avanza
Paso 2: [ 1,  3,  4,  7, 10 ]   3 + 10 = 13 < 20  -> L avanza
Paso 3: [ 1,  3,  4,  7, 10 ]   4 + 10 = 14 < 20  -> L avanza
Paso 4: [ 1,  3,  4,  7, 10 ]   7 + 10 = 17 < 20  -> L avanza
            (L alcanza a R, se cruzan -> no hay par -> false)
```

Traza corta: 11 → 13 → 14 → 17, todas menores que 20, los dedos se cruzan → `false`.

Qué recordar: suma mayor que el objetivo mueve el dedo derecho; suma menor mueve el izquierdo; dedos cruzados significa que no existe el par.

