# Valid Palindrome — Explicación sencilla

## Explicación simple con dibujos

Idea: dos dedos que avanzan desde los extremos hacia el centro. Cada dedo salta los caracteres no alfanuméricos sin esperar al otro; solo se comparan cuando ambos apuntan a una letra o número.

Ejemplo: `s = "race a car"` (índices 0 a 9).

```text
s =  r  a  c  e     a     c  a  r
     0  1  2  3  4  5  6  7  8  9
     L                          R

Paso 1: L=0('r') vs R=9('r') -> iguales, L=1, R=8
Paso 2: L=1('a') vs R=8('a') -> iguales, L=2, R=7
Paso 3: L=2('c') vs R=7('c') -> iguales, L=3, R=6
Paso 4: L=3('e') vs R=6(' ') -> R salta solo a 5
Paso 5: L=3('e') vs R=5('a') -> distintos -> return false
```

Traza corta: (r,r) igual → (a,a) igual → (c,c) igual → saltar espacio en R → (e,a) distinto → `false`.

Qué recordar: un carácter inválido solo mueve su propio dedo; la comparación solo ocurre entre dos caracteres válidos.

