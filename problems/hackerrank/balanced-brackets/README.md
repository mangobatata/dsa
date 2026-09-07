# Balanced Brackets

## Fuente
HackerRank

## Dificultad
Medium

## Problema
Dado un string con símbolos `()`, `[]` y `{}`, determinar si todos los brackets están balanceados, devolviendo `"YES"` o `"NO"`.

Un conjunto está balanceado si cada apertura tiene su correspondiente cierre del mismo tipo y en el orden inverso en que aparecieron.

## Ejemplo
Input:
```text
s = "{[()]}"
```
Output:
```text
YES
```

Input:
```text
s = "{[(])}"
```
Output:
```text
NO
```

## Qué entendí
Es una aplicación del problema de balanceo de paréntesis donde se devuelven cadenas descriptivas (`YES`/`NO`) y se deben controlar estrictamente los casos en que la cadena inicia con cierres o finaliza con aperturas pendientes.

## Mi razonamiento inicial
Recorrer la cadena:
- Si el símbolo es de apertura, se guarda en una pila.
- Si el símbolo es de cierre:
  - Si la pila está vacía, no hay apertura previa: devolver inmediatamente `"NO"`.
  - Si el último abierto en la pila no coincide con el cierre actual: devolver `"NO"`.
  - Si coincide: sacar el último abierto de la pila y continuar.
- Al terminar el recorrido: si la pila quedó vacía devolver `"YES"`; de lo contrario `"NO"`.

## Qué necesito recordar
- Las aperturas pendientes que esperan su cierre.

## Estructura o patrón elegido
**Stack (Pila)**.

## ¿Por qué?
Porque los corchetes deben cerrarse en estricto orden inverso al que se abrieron (LIFO).

## Pseudocódigo
```text
crear stack vacío

recorrer el input:
    si el símbolo es de apertura:
        guardarlo en stack
    si no (es de cierre):
        si stack está vacío:
            devolver NO

        last = stack.pop()
        si last no corresponde con el cierre:
            devolver NO

al terminar el recorrido:
    si stack está vacío:
        devolver YES
    si no:
        devolver NO
```

## Errores que cometí
- Intentar acceder al tope del stack sin verificar antes si `stack.length === 0`, provocando accesos a `undefined` al toparse con cierres sin aperturas.

## Solución
- [solution.ts](solution.ts) (TypeScript)
- [solution.py](solution.py) (Python)
- [solution.go](solution.go) (Go)

## Complejidad
### Tiempo
$O(n)$ — Recorrido lineal sobre los $n$ caracteres.

### Espacio
$O(n)$ — En el peor caso la pila almacena hasta $n$ aperturas.

## Qué aprendí
Cómo estructurar de forma limpia la verificación de emparejamiento tanto en lenguajes dinámicos (TS, Python) como en Go manejando slices de strings/runas.

## Reconocimiento futuro
Validación sintáctica de lenguajes, compiladores, expresiones aritméticas y árboles de sintaxis abstracta.
