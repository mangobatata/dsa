# Two Sum II - Input Array Is Sorted — Explicación sencilla

## Explicación simple con dibujos

Idea: dos dedos sobre el arreglo ordenado, uno al inicio (L) y otro al final (R).

Ejemplo: `numbers = [2, 7, 11, 15]`, `target = 9`.

```text
Paso 1:  L              R
       [ 2,  7, 11, 15 ]   suma = 2 + 15 = 17 > 9  -> R se mueve a la izquierda
            L       R
Paso 2: [ 2,  7, 11, 15 ]   suma = 2 + 11 = 13 > 9  -> R se mueve a la izquierda
            L   R
Paso 3: [ 2,  7, 11, 15 ]   suma = 2 + 7 = 9 == 9   -> respuesta [1, 2]
```

Traza corta: 17 (muy grande, mover R) → 13 (muy grande, mover R) → 9 (igual, devolver `[1, 2]`).

Qué recordar: si la suma es grande, mover R; si es chica, mover L; nunca mover ambos a la vez.

