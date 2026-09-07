# Valid Parentheses

## Fuente
LeetCode (Problema 20)

## Dificultad
Easy

## Problema
Dada una cadena de texto compuesta exclusivamente por los caracteres `(`, `)`, `[`, `]`, `{`, `}`, determinar si la secuencia está correctamente balanceada.

Una secuencia es válida si:
1. Cada paréntesis abierto se cierra con el mismo tipo de paréntesis.
2. Los paréntesis se cierran en el orden correcto de anidamiento.
3. Cada símbolo de cierre corresponde a una apertura previa.

## Ejemplo
Input:
```text
s = "{[()]}"
```
Output:
```text
true
```

Input:
```text
s = "([)]"
```
Output:
```text
false
```

## Qué entendí
No se trata simplemente de contar que haya la misma cantidad de aperturas y cierres. Importa estrictamente el **orden temporal de anidamiento**: el cierre más inmediato siempre debe corresponder a la apertura más reciente que todavía no haya sido cerrada.

## Mi razonamiento inicial
Al principio pensaba en *"emparejar símbolos"*.
Luego descubrí la analogía clave:
- **Símbolos abiertos = prepizzas sin cocinar:** Quedan pendientes en la memoria.
- **Símbolos cerrados = prepizzas cocinadas:** No se guardan en la memoria; solo vienen a resolver la última apertura pendiente. Si coinciden, sacamos la apertura pendiente; si no coinciden o no había ninguna pendiente, la cadena es inválida.

## Qué necesito recordar
- La lista de aperturas pendientes, necesitando acceder rápidamente a la **última** que entró.

## Estructura o patrón elegido
**Stack (Pila — LIFO: Last In, First Out)**.

## ¿Por qué?
Porque el comportamiento requerido es exactamente LIFO: lo último en abrirse es lo primero que debe cerrarse. La Stack ofrece `push` y `pop` en $O(1)$.

## Pseudocódigo
```text
crear stack vacía

para cada carácter en s:
    si es símbolo de apertura ('(', '[', '{'):
        guardar en stack

    si es símbolo de cierre (')', ']', '}'):
        si la stack está vacía:
            return false

        último_abierto = stack.pop()
        si no coincide con el cierre actual:
            return false

al finalizar el recorrido:
    si la stack está vacía:
        return true
    si no:
        return false
```

## Errores que cometí
- **Creer que los símbolos de cierre también se debían guardar:** Entendí que los cierres no se apilan; se usan para contrastar y descartar.
- **Olvidar comprobar el estado final:** Creer que con no encontrar fallos durante el bucle ya era suficiente, olvidando el caso `s = "((("` donde la cadena termina pero quedaron aperturas sin cerrar (`stack.length === 0`).
- **Verificar cierres cuando la pila está vacía:** En casos como `s = ")"` se debe verificar que la pila tenga al menos un elemento antes de contrastar el tope.

## Solución
- [solution.ts](solution.ts) (TypeScript)
- [solution.js](solution.js) (JavaScript)
- [solution.py](solution.py) (Python)
- [solution.go](solution.go) (Go)

## Complejidad
### Tiempo
$O(n)$ — Se recorre la cadena una sola vez, y cada operación de `push` o `pop` toma $O(1)$.

### Espacio
$O(n)$ — En el peor caso (por ejemplo una cadena de puras aperturas `"(((((("`), la Stack contendrá los $n$ caracteres.

## Qué aprendí
El concepto de memoria LIFO (Stack) para resolver anidamientos. Separar mentalmente el estado del problema: qué se acumula (aperturas) vs qué actúa como gatillo de resolución (cierres).

## Reconocimiento futuro
Cuando un problema involucre:
- Símbolos o tags anidados (`html`, paréntesis, corchetes).
- Operaciones donde el evento actual deba resolver lo más reciente pendiente.
- Procesamiento en orden inverso al de llegada.
-> Pensar inmediatamente en **Stack**.
