# Valid Palindrome

## Fuente
LeetCode (Problema 125)

## Dificultad
Easy

## Problema
Determinar si una cadena de texto es un palíndromo, considerando únicamente caracteres alfanuméricos e ignorando la diferencia entre mayúsculas y minúsculas.

## Ejemplo
Input:
```text
s = "A man, a plan, a canal: Panama"
```
Output:
```text
true
```
*(Al limpiar espacios y puntuación queda `"amanaplanacanalpanama"`, que se lee igual al derecho y al revés)*

Input:
```text
s = "race a car"
```
Output:
```text
false
```

## Qué entendí
Hay que comparar simétricamente la cadena desde los extremos hacia el centro, ignorando cualquier carácter que no sea una letra o número, sin gastar memoria adicional limpiando la cadena previamente.

## Mi razonamiento inicial
> *"La base es Two Pointers pero cambia con el tema de comparar las letras y moverlas de acuerdo a si hay un carácter inválido..."*

En lugar de crear un string filtrado (que costaría $O(n)$ en memoria extra), colocamos dos punteros: uno al inicio (`i = 0`) y otro al final (`j = s.length - 1`). Si un puntero se topa con un carácter no alfanumérico, avanza individualmente sin exigir que el otro se mueva.

## Qué necesito recordar
- Posición del extremo izquierdo (`i`) y extremo derecho (`j`).

## Estructura o patrón elegido
**Two Pointers (Convergentes con avance condicional)**.

## ¿Por qué?
Porque permite verificar la simetría de la cadena en una sola pasada lineal $O(n)$ con memoria auxiliar constante $O(1)$.

## Pseudocódigo
```text
i = 0
j = longitud - 1

mientras i < j:
    si s[i] no es alfanumérico:
        i++
        continuar

    si s[j] no es alfanumérico:
        j--
        continuar

    si s[i] en minúscula != s[j] en minúscula:
        return false

    i++
    j--

return true
```

## Errores que cometí
- Intentar mover ambos punteros al unísono: aprendí que cuando uno de los extremos apunta a un espacio o signo de puntuación, **solo** ese puntero debe avanzar (`continue`).

## Solución
- [solution.ts](solution.ts) (TypeScript)

## Complejidad
### Tiempo
$O(n)$ — Cada puntero avanza como máximo $n$ posiciones a lo largo del string.

### Espacio
$O(1)$ — Solo variables numéricas para los punteros de índices, sin crear nuevos strings filtrados.

## Qué aprendí
Two Pointers no es una receta estática de `i++; j--`. Las reglas de movimiento se adaptan a la validez de los datos en cada extremo.

## Reconocimiento futuro
Problemas de simetría sobre secuencias (palíndromos, comparaciones reflejadas) donde se puedan descartar o saltear elementos no relevantes desde los extremos hacia adentro.
