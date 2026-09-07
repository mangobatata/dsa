# Contains Duplicate

## Fuente
LeetCode (Problema 217)

## Dificultad
Easy

## Problema
Dado un arreglo de enteros `nums`, determinar si algún valor aparece al menos dos veces en el arreglo. Devolver `true` si existe algún duplicado y `false` si todos los elementos son distintos.

## Ejemplo
Input:
```text
nums = [1, 2, 3, 1]
```
Output:
```text
true
```

Input:
```text
nums = [1, 2, 3, 4]
```
Output:
```text
false
```

## Qué entendí
Verificar si hay colisiones de valor en el conjunto. La búsqueda puede terminar anticipadamente (*early return*) en cuanto se detecte el primer número repetido.

## Mi razonamiento inicial
Probé dos enfoques en el código:
1. **Memoria de elementos vistos (Boolean Map / Set):**
   Anotar `hashMap[nums[i]] = true`. Si al mirar el número ya está en el mapa, retornar `true`.
2. **Contador de frecuencias:**
   Incrementar el contador de apariciones de cada número. Si en algún momento `counts[nums[i]] > 1`, retornar `true`.

Ambos demuestran cómo la memoria asociativa evita la comparación cuadrática de todos contra todos.

## Qué necesito recordar
- Los valores ya vistos o sus conteos de aparición.

## Estructura o patrón elegido
**Hash Map / Set (Seen / Frequency Counter)**.

## ¿Por qué?
Porque verificar si una clave existe en un Hash Map o Set toma tiempo promedio $O(1)$, logrando verificar el arreglo en una sola pasada.

## Pseudocódigo
```text
crear counts vacío

para cada num en nums:
    si num ya está en counts:
        counts[num] += 1
    si no:
        counts[num] = 1

    si counts[num] > 1:
        return true

return false
```

## Errores que cometí
- En un primer momento implementé el conteo numérico completo cuando para detectar duplicados basta con una bandera booleana de presencia o un Set, aunque ambos comparten la misma complejidad teórica.

## Solución
- [solution.ts](solution.ts) (TypeScript)

## Complejidad
### Tiempo
$O(n)$ — Se recorre el array una sola vez con operaciones $O(1)$ promedio por elemento. Si hay $n$ elementos se hacen a lo sumo $n$ iteraciones.

### Espacio
$O(n)$ — En el peor caso (todos los elementos son únicos), se almacenan los $n$ números en memoria auxiliar.

## Qué aprendí
El concepto elemental de "Seen" (elementos ya vistos) y cómo calcular el crecimiento lineal del tiempo ($n 	o n$, $2n 	o 2n$).

## Reconocimiento futuro
Cualquier problema donde se deba responder *"¿este elemento ya apareció antes?"* sin que el orden de los elementos esté prefijado.
