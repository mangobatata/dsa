# Balanced Brackets — Explicación sencilla

## Explicación simple con dibujos
Idea: cada apertura es una prepizza sin cocinar que se apila en una pila de platos. Cada cierre es la cocción que solo puede cocinar el plato de arriba.

Ejemplo `s = "{[()]}"`:

```text
Paso 1: leer "{"  -> apilar       pila: [ { ]
Paso 2: leer "["  -> apilar       pila: [ {  [ ]
Paso 3: leer "("  -> apilar       pila: [ {  [  ( ]
Paso 4: leer ")"  -> cocina "("   pila: [ {  [ ]
Paso 5: leer "]"  -> cocina "["   pila: [ { ]
Paso 6: leer "}"  -> cocina "{"   pila: [ ]
```

Traza corta: `{` se guarda, `[` se guarda, `(` se guarda, `)` saca `(`, `]` saca `[`, `}` saca `{`. Pila vacía al final -> `"YES"`.

Qué recordar: el cierre siempre debe coincidir con la última apertura pendiente; si la pila está vacía o el tipo no coincide, es `"NO"`.

