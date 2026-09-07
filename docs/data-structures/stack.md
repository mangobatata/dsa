# Stack

Esta lección introduce la estructura Stack antes de aplicarla en Valid Parentheses.

Una Stack sirve para guardar elementos y trabajar siempre con el último que fue agregado.

La regla principal es:

```text
Last In, First Out
LIFO
```

En español:

```text
Último en entrar, primero en salir
```

## Concepto

Podés imaginar una Stack como una pila.

Agregás elementos arriba.

Sacás primero el elemento que quedó arriba.

Ejemplo:

```text
agrego A
agrego B
agrego C
```

La pila queda:

```text
C
B
A
```

Si sacás un elemento, sale primero:

```text
C
```

Después:

```text
B
```

Después:

```text
A
```

## Operaciones principales

### Push

Agregar un elemento al final o arriba de la Stack.

```text
push "("
```

### Pop

Sacar el último elemento agregado.

```text
pop -> "("
```

### Peek / Top

Mirar el último elemento agregado sin sacarlo.

```text
top -> "("
```

### Is Empty

Preguntar si la Stack está vacía.

```text
stack vacía -> true
```

## Complejidad

En una implementación típica:

```text
Operación          Promedio

Push               O(1)
Pop                O(1)
Peek               O(1)
Is Empty           O(1)
```

La Stack es útil cuando el problema necesita recordar algo pendiente y resolverlo en orden inverso.

## Señales para pensar en Stack

Podés pensar en Stack cuando aparecen preguntas como:

```text
¿Qué fue lo último que abrí?
```

```text
¿Qué fue lo último que quedó pendiente?
```

```text
¿Necesito deshacer pasos en orden inverso?
```

```text
¿Necesito comparar algo actual contra lo más reciente guardado?
```

## Conexión con Valid Parentheses

En Valid Parentheses, la idea no es memorizar:

```text
Valid Parentheses -> Stack
```

La idea es razonar:

```text
Si encuentro una apertura, queda pendiente.
```

```text
Si encuentro un cierre, debe cerrar la última apertura pendiente.
```

Preguntas para entrar al ejercicio:

```text
¿Qué símbolos quedan pendientes?
```

```text
¿Cuál fue el último símbolo abierto?
```

```text
¿Qué debería pasar cuando aparece un símbolo de cierre?
```

Ejercicio:

## Problemas que resolví usando Stack

* [Valid Parentheses](../../problems/leetcode/0020-valid-parentheses/README.md)
* [Backspace String Compare](../../problems/leetcode/0844-backspace-string-compare/README.md)
* [Balanced Brackets](../../problems/hackerrank/balanced-brackets/README.md)

## Errores o confusiones que tuve

- **Finalizar antes de tiempo:** Al procesar un string con retrocesos (`Backspace String Compare`), asumir que encontrar un `#` con stack vacía finalizaba el algoritmo en lugar de ignorar la tecla y seguir esperando caracteres válidos futuros.
- **Olvidar comprobar el estado final:** Creer que un recorrido sin errores garantiza validez sin verificar que la pila haya quedado completamente vacía (`stack.length === 0`). Si quedan aperturas sin cerrar, la secuencia es inválida.
- **La analogía de las prepizzas:** Visualizar las aperturas como prepizzas sin cocinar que quedan pendientes y los cierres como cocciones que resuelven únicamente la última abierta.
