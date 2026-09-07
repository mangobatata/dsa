# Sales by Match (Sock Merchant)

## Fuente
HackerRank

## Dificultad
Easy

## Problema
Dado un arreglo de números enteros que representan los colores de una pila de medias, determinar cuántos pares de medias del mismo color se pueden formar para la venta.

## Ejemplo
Input:
```text
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]
```
Output:
```text
2
```
*(Se forman: 1 par del color 1, 1 par del color 2; sobra una media del color 1, una del color 2 y una del color 3)*

## Qué entendí
Debemos agrupar las medias por su color, contar cuántas hay de cada uno, y para cada color calcular cuántos grupos de 2 unidades completas se pueden armar.

## Mi razonamiento inicial
Recorrer las medias y poblar un mapa de conteo de frecuencias.
Luego, iterar sobre los colores en el mapa y acumular la cantidad de pares.

## Qué necesito recordar
- La cantidad de medias contabilizadas para cada color (`color -> cantidad`).

## Estructura o patrón elegido
**Frequency Counter (Hash Map)**.

## ¿Por qué?
Porque permite totalizar las cantidades en una sola pasada $O(n)$ y calcular los pares de cada color matemáticamente en tiempo constante.

## Pseudocódigo
```text
si ar está vacío:
    devolver 0

crear memo vacío
totalPares = 0

para cada media en ar:
    si media existe en memo:
        memo[media] += 1
    si no:
        memo[media] = 1

para cada color en memo:
    totalPares += Math.floor(memo[color] / 2)

devolver totalPares
```

## Errores que cometí
- **Condición errónea de paridad (`% 2 === 0`):** Al inicio escribí:
  ```ts
  if (memo[value] % 2 === 0) {
    totalPares += Math.floor(memo[value] / 2);
  }
  ```
  Esto provocaba que si había 3 medias de un color, al no ser par (`3 % 2 !== 0`), no sumaba nada, ignorando el par válido que sí existía. Se corrigió eliminando el `if` y sumando directamente `Math.floor(memo[color] / 2)`.
- **Retorno ante array vacío:** Inicialmente devolvía `-1` ante `ar.length === 0`, cuando la cantidad real de pares en un conjunto vacío es `0`.

## Solución
- [solution.ts](solution.ts) (TypeScript)
- [solution.py](solution.py) (Python)

## Complejidad
### Tiempo
$O(n)$ — Una pasada sobre el array de $n$ medias, y luego una pasada sobre las $k$ claves únicas del mapa ($k \le n$).

### Espacio
$O(k)$ — Memoria para almacenar los $k$ colores distintos en el mapa.

## Qué aprendí
Que la división entera (`Math.floor(n / 2)` en TS o `n // 2` en Python) resuelve tanto los casos pares como impares sin necesidad de comprobaciones lógicas adicionales de paridad.

## Reconocimiento futuro
Problemas donde se deban contar elementos y formar lotes, pares o grupos de tamaño fijo a partir de cantidades individuales.
