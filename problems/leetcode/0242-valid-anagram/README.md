# Valid Anagram

## Fuente
LeetCode (Problema 242)

## Dificultad
Easy

## Problema
Dadas dos cadenas de texto `s` y `t`, determinar si `t` es un anagrama de `s` (es decir, si contiene exactamente las mismas letras con las mismas frecuencias exactas, en cualquier orden).

## Ejemplo
Input:
```text
s = "anagram"
t = "nagaram"
```
Output:
```text
true
```

Input:
```text
s = "rat"
t = "car"
```
Output:
```text
false
```

## Qué entendí
Dos cadenas son anagramas si y solo si tienen la misma longitud y la cantidad de apariciones de cada letra es idéntica en ambas.

## Mi razonamiento inicial
Primero descartar inmediatamente si sus longitudes son distintas: si `s.length !== t.length`, es imposible que sean anagramas.
Luego, contar cuántas veces aparece cada letra en `s` y cuántas en `t`, guardando esos conteos en memorias asociativas (`memoS` y `memoT`).
Finalmente, recorrer las letras registradas y comprobar que la cantidad en `memoS` sea igual a la de `memoT`.

## Qué necesito recordar
- Frecuencias de cada letra en ambas cadenas.

## Estructura o patrón elegido
**Frequency Counter (Hash Map / Object)**.

## ¿Por qué?
Porque contar frecuencias toma tiempo lineal $O(n)$, siendo más eficiente que ordenar ambas cadenas ($O(n \log n)$).

## Pseudocódigo
```text
si longitud de s es diferente a longitud de t:
    devolver false

crear memoriaS vacía
crear memoriaT vacía

para cada letra de s:
    si la letra ya existe en memoriaS:
        aumentar su contador en 1
    si no:
        guardar la letra con contador = 1

para cada letra de t:
    si la letra ya existe en memoriaT:
        aumentar su contador en 1
    si no:
        guardar la letra con contador = 1

para cada letra guardada en memoriaS:
    si memoriaS[letra] != memoriaT[letra]:
        devolver false

devolver true
```

## Errores que cometí
- Asegurarse de verificar primero las longitudes para evitar iteraciones innecesarias si una palabra tiene más letras que la otra.

## Solución
- [solution.ts](solution.ts) (TypeScript)

## Complejidad
### Tiempo
$O(n)$ — Se realizan recorridos lineales independientes sobre las cadenas de tamaño $n$.

### Espacio
$O(1)$ — Aunque usamos dos mapas auxiliares, la cantidad máxima de claves posibles está acotada por el tamaño del alfabeto (26 letras para caracteres en inglés), lo que constituye espacio constante $O(1)$.

## Qué aprendí
A estructurar y escribir pseudocódigo completo antes de codificar, y a aplicar el patrón Frequency Counter para comparar colecciones donde el orden de los elementos no es relevante.

## Reconocimiento futuro
Problemas donde se deban comparar dos secuencias para ver si tienen idénticos componentes o permutaciones (anagramas, recombinaciones de listas).
