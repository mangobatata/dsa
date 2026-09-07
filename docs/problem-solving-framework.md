# Problem-Solving Framework

Una metodología estructurada para abordar problemas de DSA sin saltar prematuramente al código.

---

## 1. El Ciclo Fundamental

```text
Problema
   ↓
Ejemplo manual paso a paso
   ↓
Estado / Memoria necesaria
   ↓
Estructura de datos o Patrón
   ↓
Pseudocódigo en español
   ↓
Edge cases (casos límite)
   ↓
Código (TypeScript / Python / Go)
   ↓
Cálculo de Big O (Tiempo y Espacio)
```

---

## 2. Los 16 Pasos del Pensamiento Algorítmico

1. **¿Qué entra?**
   - Tipos de datos, restricciones, tamaño de la entrada, posibles valores negativos, strings vacíos, arrays de 1 elemento.

2. **¿Qué tiene que salir?**
   - ¿Un booleano, un índice, un par de índices, un array de elementos, un conteo?

3. **Hacer un ejemplo manual con papel o trazado mental.**
   - Simular cómo lo resolvería una persona a mano con un ejemplo pequeño y no trivial.

4. **¿Qué información necesito recordar?**
   - ¿Valores ya vistos? ¿Posiciones/índices? ¿Frecuencias de aparición? ¿Último elemento pendiente? ¿Punteros en extremos?

5. **¿Importa el orden de llegada?**
   - Si importa el orden temporal o anidamiento: posible **Stack** (LIFO) o **Queue** (FIFO).
   - Si no importa el orden: posible **Hash Map** / **Set**.

6. **¿Necesito buscar algo rápidamente?**
   - Si la búsqueda debe ser en tiempo promedio $O(1)$: pensar en **Hash Map** o **Set**.
   - Si la entrada ya está ordenada: pensar en **Binary Search** o **Two Pointers**.

7. **¿Necesito contar frecuencias?**
   - Mapear `elemento -> cantidad de apariciones` con un **Frequency Counter**.

8. **¿Estoy comparando extremos o recorriendo desde dos lados?**
   - Si el array está ordenado o es un palíndromo: evaluar **Two Pointers** (convergentes: `left` y `right`).

9. **¿Estoy trabajando con un rango o ventana continua?**
   - Evaluar **Sliding Window** (fija o dinámica).

10. **¿Qué estructura o patrón representa mejor esa información?**
    - Justificar la elección en base a las operaciones requeridas (búsqueda, inserción, extracción en orden inverso).

11. **¿Cuándo puedo descartar una posibilidad con seguridad?**
    - Por ejemplo, en Two Pointers: si la suma actual supera al objetivo en un array ordenado, cualquier suma con el elemento derecho actual será aún mayor, por lo que podemos descartarlo (`right--`).

12. **¿Cuándo puedo terminar anticipadamente (early exit / return)?**
    - ¿Longitudes distintas en anagramas?
    - ¿Elemento duplicado ya encontrado?
    - ¿Fallo en correspondencia de apertura y cierre?

13. **Escribir pseudocódigo.**
    - Redactar la lógica en lenguaje natural estructurado. Si no se puede expresar en palabras claras, todavía no se entiende el algoritmo.

14. **Probar casos límite (Edge Cases).**
    - Input vacío: `[]` o `""`.
    - 1 solo elemento: `[7]`.
    - Elementos repetidos: `[2, 2, 2]`.
    - No hay solución válida.
    - Símbolos de cierre al inicio sin apertura previa.

15. **Traducir a código.**
    - Implementar de forma limpia en el lenguaje elegido (TypeScript, Python, Go), manteniendo la separación de responsabilidades.

16. **Calcular Big O.**
    - Analizar por separado:
      - **Time Complexity**: ¿cuántas iteraciones y qué costo tiene cada operación interna?
      - **Space Complexity**: ¿cuánta memoria auxiliar adicional se reserva en el peor caso?

---

## 3. Trampas Comunes de Aprendizaje

- **Saltar directo a escribir `for` o `while`:** Conduce a código desordenado y bugs lógicos.
- **Memorizar recetas en vez de invariantes:** No memorizar `i++; j--`, entender *por qué* y *bajo qué condición lógica* se mueve cada puntero.
- **Confundir índice con valor:** `i` es la posición; `nums[i]` es el dato almacenado.
- **Olvidar el estado final:** Al salir de un bucle, verificar si quedaron elementos pendientes en la memoria (por ejemplo, `stack.length === 0`).
