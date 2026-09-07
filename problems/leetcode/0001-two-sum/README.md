# Two Sum

## Fuente
LeetCode (Problema 1)

## Dificultad
Easy

## Problema
Dado un arreglo de números enteros `nums` y un número entero `target`, encontrar y devolver los **índices** de los dos números que sumados sean exactamente iguales al objetivo (`target`).

Se garantiza que existe exactamente una solución válida y no se permite usar el mismo elemento dos veces.

## Ejemplo
Input:
```text
nums = [11, 5, 7, 4, 78, 2]
target = 9
```

Output:
```text
[2, 5]
```
*(Porque `nums[2] + nums[5] = 7 + 2 = 9`)*

## Qué entendí
El problema no pide encontrar los valores en sí, sino sus **posiciones originales (índices)** en el arreglo. No hace falta comparar todos los pares entre sí si podemos recordar lo que ya vimos a medida que avanzamos.

## Mi razonamiento inicial
Al principio pensé en una solución de fuerza bruta: recorrer todo el array con dos bucles anidados y comparar cada elemento contra todos los demás de a pares (~$O(n^2)$).

Luego intenté plantear "guardar pares", pero me di cuenta de que no guardaba pares, sino números individuales conforme los iba pasando con el dedo.

Posteriormente pensé en preguntar si el número actual ya había salido, pero el mentor me corrigió: no pregunto por el número actual, sino por lo que **le falta** al número actual para llegar al objetivo (`target - actual`).

La idea central que descubrí:
> "Parado en un elemento cualquiera, calculo `target - elemento_actual`. Si ese resultado **ya está** en mi memoria, encontré el par (ese resultado + el elemento actual). Si **no está**, guardo el elemento actual en la memoria junto con su índice y sigo."

## Qué necesito recordar
- Los valores que ya pasé y la posición exacta donde apareció cada uno (`valor -> índice`).

## Estructura o patrón elegido
**Hash Map (Técnica del Complemento)**.

## ¿Por qué?
Porque una estructura asociativa clave-valor permite responder la pregunta *"¿ya vi el complemento necesario?"* en tiempo promedio $O(1)$, evitando tener que recorrer todo el array nuevamente en cada paso.

## Pseudocódigo
```text
crear memoria vacía (hash_map)

para cada i, num en nums:
    complemento = target - num

    si complemento está en hash_map:
        devolver [hash_map[complemento], i]

    guardar hash_map[num] = i

si termina el recorrido sin encontrar:
    devolver []
```

## Errores que cometí
- **Pensar en "guardar pares":** Al inicio intenté conceptualizar la memoria como pares precalculados, cuando en realidad solo se necesita registrar números sueltos conforme se recorren.
- **Preguntar por el elemento actual en vez del complemento:** Pregunté a la memoria *"¿ya vi `7`?"* en lugar de *"¿ya vi `9 - 7 = 2`?"*.
- **Olvidar insertar en el mapa (en Go):** En la primera versión de `solution.go`, implementé la verificación del complemento pero olvidé asignar `hashMap[nums[i]] = i` dentro del bucle, haciendo que el mapa permaneciera vacío y siempre devolviera `nil`.
- **Riesgo de $O(n^2)$ encubierto en Python:** Usar `nums.index(num)` dentro de un bucle de Python realiza una búsqueda lineal en cada iteración, anulando la ganancia del algoritmo si no se usa un diccionario con índices.

## Solución
- [solution.ts](solution.ts) (TypeScript)
- [solution.py](solution.py) (Python)
- [solution.go](solution.go) (Go)
- [solution.php](solution.php) (PHP)

## Complejidad
### Tiempo
$O(n)$ — Se realiza un único recorrido lineal sobre el arreglo. Cada búsqueda e inserción en el Hash Map toma $O(1)$ en promedio.

### Espacio
$O(n)$ — En el peor caso (cuando los dos números están al final), el Hash Map almacenará hasta $n - 1$ elementos en memoria adicional.

## Qué aprendí
El concepto de **Time-Space Tradeoff**: cambiar un poco de memoria auxiliar ($O(n)$) para transformar un algoritmo lento de $O(n^2)$ en una pasada rápida de $O(n)$.

## Reconocimiento futuro
Cuando vea un problema donde se busquen dos elementos que cumplan una relación matemática fija (suma, resta) y necesite conservar o devolver sus índices originales en una colección desordenada: pensar inmediatamente en **Hash Map + Complemento**.
