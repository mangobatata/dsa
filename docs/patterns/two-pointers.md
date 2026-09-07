# Two Pointers (Dos Punteros)

## 1. Modelo Mental y Filosofía

> [!IMPORTANT]
> **Two Pointers NO significa memorizar `left++` y `right--`.**
> 
> Two Pointers es una técnica de **reducción del espacio de búsqueda mediante descarte seguro**. Mantenemos dos posiciones relevantes y las movemos según información matemática o lógica que garantiza que ninguna respuesta válida quede eliminada por error.

El movimiento de punteros **depende de las reglas del problema**, no de una receta rígida:

- En **Two Sum II** (array ordenado):
  ```text
  suma < target → left++  (descartamos el izquierdo: con cualquier otro elemento sumará aún menos)
  suma > target → right-- (descartamos el derecho: con cualquier otro elemento sumará aún más)
  ```
- En **Valid Palindrome**:
  ```text
  izquierda no es alfanumérico → left++ (ignoramos carácter no válido)
  derecha no es alfanumérico   → right-- (ignoramos carácter no válido)
  caracteres distintos         → return false (no es palíndromo)
  caracteres iguales           → left++; right-- (confirmado este extremo, cerramos hacia el centro)
  ```

---

## 2. ¿Qué problema intenta resolver?

Evitar la fuerza bruta cuadrática $O(n^2)$ de comparar todos los pares posibles $(i, j)$ mediante dos bucles anidados. Two Pointers reduce el tiempo a $O(n)$ en una sola pasada lineal.

---

## 3. ¿Cuándo aparece? (Señales de Reconocimiento)

- El array está **ordenado** (o puede ordenarse) y buscamos pares con una propiedad específica (suma, diferencia).
- El problema involucra **simetría o extremos convergentes** (palíndromos, reversa de cadenas).
- Se pide procesar elementos desde afuera hacia adentro (o desde un extremo al otro a ritmos distintos: fast & slow pointers).

---

## 4. ¿Cuándo NO usarlo?

- Cuando el array **no está ordenado** y el problema requiere devolver los **índices originales** (ordenar alteraría los índices; en ese caso conviene **Hash Map**).
- Cuando no existe una relación monótona que permita descartar elementos con certeza.
- Cuando se necesita recordar estados anteriores arbitrarios (allí corresponde Stack o Hash Map).

---

## 5. Cuándo usar `for` vs `while`

- **`for`**: Cuando de antemano conocemos el número exacto de iteraciones o recorremos secuencialmente elemento por elemento.
- **`while (left < right)`**: Cuando la continuación del algoritmo depende de una **condición lógica** y el movimiento de los punteros es condicional (a veces se mueve uno, a veces el otro, o avanzan salteando elementos).

---

## 6. Problemas Resueltos en el Repositorio

- [Two Sum II - Input Array Is Sorted](../../problems/leetcode/0167-two-sum-ii/README.md)
- [Valid Palindrome](../../problems/leetcode/0125-valid-palindrome/README.md)
- [Has Pair With Sum (Práctica fundacional)](../../problems/practice/has-pair-with-sum/README.md)
