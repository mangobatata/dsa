# Big O — Guía Práctica de Complejidad

La notación Big O describe cómo escalan los recursos (tiempo de cómputo o memoria) a medida que el tamaño de la entrada ($n$) crece hacia el infinito.

---

## Regla de Oro: Separar Tiempo y Espacio

> [!IMPORTANT]
> **Time Complexity (Complejidad Temporal)** y **Space Complexity (Complejidad Espacial)** deben analizarse SIEMPRE por separado.
> 
> Un algoritmo puede tener tiempo $O(n)$ pero espacio $O(1)$ (por ejemplo, Two Pointers en Two Sum II), o tiempo $O(n)$ y espacio $O(n)$ (por ejemplo, Hash Map en Two Sum). Mezclarlos nubla el análisis del *Time-Space Tradeoff*.

---

## 1. Órdenes de Complejidad Principales

| Notación | Nombre | Crecimiento relativo | Ejemplo en el repositorio |
| :--- | :--- | :--- | :--- |
| **$O(1)$** | Constante | El costo no cambia según $n$ | Inserción/búsqueda en Hash Map (caso promedio), `push`/`pop` en Stack, cálculo de suma de punteros |
| **$O(\log n)$** | Logarítmico | El espacio de búsqueda se divide en cada paso | Binary Search (próxima etapa) |
| **$O(n)$** | Lineal | Crece proporcionalmente a $n$ | Un recorrido completo del array, conteo de frecuencias, llenar un Stack |
| **$O(n \log n)$** | Lineal-logarítmico | Típico de ordenamientos eficientes | Ordenar un array (`Array.prototype.sort`, `sort.Ints`) antes de Two Pointers |
| **$O(n^2)$** | Cuadrático | Bucles anidados donde cada elemento se compara con los demás | Búsqueda por fuerza bruta de pares (comparar cada par $(i, j)$) |

---

## 2. Time-Space Tradeoff (El Intercambio Tiempo-Espacio)

Muchas optimizaciones en DSA consisten en **gastar memoria auxiliar para ganar velocidad**:

### Caso de estudio: Two Sum
- **Fuerza bruta:**
  - Tiempo: $O(n^2)$ (dos bucles anidados comparando todos los pares).
  - Espacio auxiliar: $O(1)$ (no requiere memoria extra).
- **Con Hash Map:**
  - Tiempo: $O(n)$ (un solo recorrido lineal con lookups $O(1)$).
  - Espacio auxiliar: $O(n)$ (guardamos hasta $n$ elementos en el mapa).

### Caso de estudio: Two Sum II (Array Ordenado)
- Al saber que el array viene ordenado, **Two Pointers** permite resolverlo en:
  - Tiempo: $O(n)$.
  - Espacio auxiliar: $O(1)$.
- Aquí la propiedad de orden nos ahorra la memoria extra sin sacrificar el tiempo lineal.

---

## 3. Guía Rápida para Calcular Big O

### Para Tiempo:
1. Identificar cuál es la variable de entrada $n$ (longitud del array, tamaño del string, etc.).
2. Contar cuántas veces se ejecutan los bucles principales en el **peor caso**.
3. Multiplicar por el costo de las operaciones dentro del bucle:
   - `map.get()` o `map.set()`: $O(1)$ promedio.
   - `stack.push()` o `stack.pop()`: $O(1)$.
   - `array.indexOf()` o `nums.index()` en Python: **$O(n)$**, lo que dentro de un bucle de $n$ convertiría el algoritmo en $O(n^2)$.

### Para Espacio (Auxiliar):
1. **No contar** la memoria del input original ni del output obligatorio devuelto.
2. Contar únicamente las estructuras de datos adicionales creadas internamente:
   - ¿Un array que guarda caracteres pendientes (Stack)? Hasta $n$ elementos $\to O(n)$.
   - ¿Un Hash Map con frecuencias de caracteres? Hasta $k$ caracteres distintos. Si el alfabeto es fijo (ej. ASCII o alfabeto inglés de 26 letras), el espacio es $O(1)$ acotado; si son números arbitrarios, es $O(n)$.
   - ¿Solo un par de variables numéricas (`i`, `j`, `sum`)? $\to O(1)$.
