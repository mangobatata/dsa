# Backspace String Compare

## Fuente
LeetCode (Problema 844)

## Dificultad
Easy

## Problema
Dadas dos cadenas de texto `s` y `t`, determinar si son iguales cuando ambas son escritas en un editor de texto donde el carácter `#` representa la tecla de retroceso (borra el carácter inmediato anterior).

Si el editor está vacío y se presiona `#`, el texto sigue vacío.

## Ejemplo
Input:
```text
s = "ab#c"
t = "ad#c"
```
Output:
```text
true
```
*(En `s`, `#` borra la `'b'`, quedando `"ac"`. En `t`, `#` borra la `'d'`, quedando `"ac"`)*

Input:
```text
s = "a##c"
t = "#a#c"
```
Output:
```text
true
```
*(Ambas quedan `"c"`)*

## Qué entendí
Hay que simular el comportamiento de un teclado con tecla de borrado sobre un string y comparar los resultados finales de ambos textos.

## Mi razonamiento inicial
- Si el carácter es normal: lo guardo en la memoria.
- Si aparece `#`: elimino el último carácter guardado.
- Me pregunté: ¿qué pasa ante `s = "###a"` cuando la memoria está vacía? Mi primera intuición fue *"podríamos llegar a finalizar el algoritmo"*. Pero el mentor me hizo notar que en un editor real borrar sobre vacío simplemente no hace nada y el algoritmo debe seguir para procesar la `'a'` futura.

La regla quedó:
```text
si carácter es "#":
    si hay elementos guardados:
        borrar el último
    si no hay elementos:
        continuar
```

Para no repetir código, diseñé una función auxiliar que procesa cualquier string y luego comparo los resultados finales.

## Qué necesito recordar
- Los caracteres escritos que aún no han sido borrados (LIFO).

## Estructura o patrón elegido
**Stack (Pila)**.

## ¿Por qué?
Porque el retroceso (`#`) afecta de manera inmediata y exclusiva al **último** carácter ingresado.

## Pseudocódigo
```text
función processString(s):
    crear stack vacía
    para cada char en s:
        si char != '#':
            stack.push(char)
        si char == '#' y stack tiene elementos:
            stack.pop()
    devolver stack

función backspaceCompare(s, t):
    resultadoS = processString(s)
    resultadoT = processString(t)
    devolver resultadoS.join("") === resultadoT.join("")
```

## Errores que cometí
- **Querer abortar anticipadamente:** Creer que un `#` con stack vacía significaba el fin del algoritmo en vez de ignorar la pulsación y continuar.
- **Comparación por referencia:** Comparar arrays directamente en JS (`resultS === resultT` da `false` porque son objetos distintos en memoria). Se resolvió convirtiéndolos a string con `.join("")`.

## Solución
- [solution.ts](solution.ts) (TypeScript)

## Complejidad
### Tiempo
$O(n + m)$ — Se procesa cada string linealmente (longitudes $n$ y $m$).

### Espacio
$O(n + m)$ — Espacio auxiliar para las stacks que guardan los caracteres resultantes.

## Qué aprendí
A abstraer operaciones repetitivas en funciones auxiliares limpias (`processString`) y a manejar edge cases de operaciones sobre estructuras vacías.

## Reconocimiento futuro
Problemas que simulen editores de texto, operaciones undo/redo o anulaciones sobre el elemento inmediatamente precedente.
