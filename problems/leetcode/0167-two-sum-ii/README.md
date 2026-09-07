# Two Sum II - Input Array Is Sorted

## Fuente
LeetCode (Problema 167)

## Dificultad
Medium

## Problema
Dado un arreglo de números enteros ordenado de forma ascendente (`numbers`) y un número `target`, encontrar dos números que sumados den `target`.

Se debe devolver los índices de ambos números sumándoles 1 (1-indexed). Se garantiza una única solución y no se puede usar el mismo elemento dos veces.

## Ejemplo
Input:
```text
numbers = [2, 7, 11, 15]
target = 9
```
Output:
```text
[1, 2]
```
*(Porque `numbers[0] + numbers[1] = 2 + 7 = 9`; en base 1 son `[1, 2]`)*

## Qué entendí
A diferencia de Two Sum original (que venía desordenado), aquí el arreglo **ya está ordenado**. Esta propiedad permite resolver el problema sin gastar memoria en un Hash Map.

## Mi razonamiento inicial
Colocar dos punteros:
- `i` al inicio (el menor valor posible)
- `j` al final (el mayor valor posible)

Calcular la suma `numbers[i] + numbers[j]`:
- Si la suma es **mayor** que el target: el número de la derecha es demasiado grande. Como cualquier otro número a la izquierda de `i` sería aún más chico o igual, la única opción para reducir la suma es mover `j` hacia la izquierda (`j--`).
- Si la suma es **menor** que el target: el número de la izquierda es demasiado pequeño. Para aumentar la suma, movemos `i` hacia la derecha (`i++`).
- Si la suma es igual al target: encontramos la respuesta.

Two Pointers es descartar posibilidades con seguridad matemática.

## Qué necesito recordar
- Las posiciones `i` y `j`.

## Estructura o patrón elegido
**Two Pointers**.

## ¿Por qué?
Porque la monotonicidad del arreglo ordenado garantiza que mover un puntero descarta con total certeza todas las demás combinaciones con ese elemento, logrando tiempo lineal sin memoria auxiliar.

## Pseudocódigo
```text
i = 0
j = longitud de numbers - 1

mientras i < j:
    suma = numbers[i] + numbers[j]

    si suma == target:
        return [i + 1, j + 1]

    si suma > target:
        j--

    si suma < target:
        i++

return []
```

## Errores que cometí
- Olvidar que el enunciado requería índices 1-indexed (devolver `[i+1, j+1]` en vez de `[i, j]`).

## Solución
- [solution.ts](solution.ts) (TypeScript)
- [solution.py](solution.py) (Python)
- [solution.go](solution.go) (Go)

## Complejidad
### Tiempo
$O(n)$ — En cada paso se descarta un elemento; se realizan como máximo $n$ iteraciones.

### Espacio
$O(1)$ — Espacio de memoria constante, sin estructuras auxiliares.

## Qué aprendí
Cómo el orden previo de los datos permite optimizar el uso de memoria auxiliar de $O(n)$ (Hash Map) a $O(1)$ (Two Pointers).

## Reconocimiento futuro
Búsqueda de pares o triples con una suma o restricción objetivo sobre arreglos que ya se encuentren **ordenados**.
