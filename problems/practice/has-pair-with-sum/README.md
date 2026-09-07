# Has Pair With Sum (Introducción a Two Pointers)

## Fuente
Practice (Ejercicio conceptual guiado)

## Dificultad
Easy

## Problema
Dado un arreglo de números enteros ordenado de forma ascendente y un valor `target`, determinar si existe algún par de elementos dentro del arreglo cuya suma sea exactamente igual a `target`. Devolver `true` o `false`.

## Ejemplo
Input:
```text
nums = [1, 3, 4, 7, 10]
target = 11
```
Output:
```text
true
```
*(Porque `1 + 10 = 11`)*

Input:
```text
nums = [1, 3, 4, 7, 10]
target = 20
```
Output:
```text
false
```

## Qué entendí
Comprobar si dos elementos suman el valor objetivo sin comparar todos los pares posibles ($O(n^2)$), aprovechando que el arreglo ya está ordenado.

## Mi razonamiento inicial
Poner un dedo en el primer elemento (`i = 0`) y otro en el último (`j = len - 1`).
Calcular su suma:
- Si la suma coincide con el objetivo -> encontrado (`true`).
- Si la suma es mayor que el target -> mover el puntero derecho a la izquierda (`j--`) porque ese número es muy grande para cualquier combinación.
- Si la suma es menor que el target -> mover el puntero izquierdo a la derecha (`i++`).
- Si los punteros se cruzan -> no existe tal par (`false`).

> *"Two Pointers es descartar posibilidades con seguridad."*

## Qué necesito recordar
- Las posiciones `i` y `j`.

## Estructura o patrón elegido
**Two Pointers**.

## ¿Por qué?
Porque el orden ascendente nos da la garantía matemática de descartar un elemento completo en cada comparación, evaluando el arreglo en tiempo lineal $O(n)$ con memoria auxiliar $O(1)$.

## Pseudocódigo
```text
iz = 0
der = última posición del array

mientras iz < der:
    suma = nums[iz] + nums[der]

    si suma === target:
        devolver true

    si suma > target:
        der--

    si suma < target:
        iz++

si termina el mientras:
    devolver false
```

## Errores que cometí
- **Usar `for` en vez de `while`:** Aprendí a diferenciar que `for` se utiliza cuando sabemos exactamente cómo recorrer/repetir secuencialmente, mientras que `while` se usa cuando queremos continuar mientras una condición lógica sea verdadera (`iz < der`).

## Solución
- [solution.ts](solution.ts) (TypeScript)
- [solution.go](solution.go) (Go)

## Complejidad
### Tiempo
$O(n)$ — En cada iteración se reduce la distancia entre punteros en 1. A lo sumo $n$ pasos.

### Espacio
$O(1)$ — Memoria constante, solo punteros numéricos.

## Qué aprendí
La disciplina de precisión algorítmica:
1. Leer el problema completo.
2. Escribir claramente qué busco.
3. Hacer UNA operación.
4. Comparar contra el objetivo.
5. Decidir el siguiente movimiento.

## Reconocimiento futuro
Búsqueda de relaciones entre pares en colecciones ordenadas sin necesidad de espacio adicional.
