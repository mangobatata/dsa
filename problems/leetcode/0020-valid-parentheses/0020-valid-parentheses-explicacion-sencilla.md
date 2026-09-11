# Valid Parentheses — Explicación sencilla

## Explicación simple con dibujos
Idea: cada apertura es una prepizza sin cocinar que se guarda en una cajita apilada. Cada cierre es la cocción: solo sirve si coincide con la cajita de arriba.

Ejemplo `s = "{[()]}"`:

```text
Paso 1: leer "{"  -> guardar      pila: [ { ]
Paso 2: leer "["  -> guardar      pila: [ {  [ ]
Paso 3: leer "("  -> guardar      pila: [ {  [  ( ]
Paso 4: leer ")"  -> coincide "(" pila: [ {  [ ]
Paso 5: leer "]"  -> coincide "[" pila: [ { ]
Paso 6: leer "}"  -> coincide "{" pila: [ ]
```

Traza corta: `{` se apila, `[` se apila, `(` se apila, `)` desapila `(`, `]` desapila `[`, `}` desapila `{`. Pila vacía al final -> `true`.

Qué recordar: los cierres no se guardan, solo resuelven la última apertura pendiente.

