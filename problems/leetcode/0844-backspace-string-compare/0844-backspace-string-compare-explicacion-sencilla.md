# Backspace String Compare — Explicación sencilla

## Explicación simple con dibujos
Idea: cada letra es un plato que se apila. Cada `#` retira el plato de arriba; si la pila está vacía, no pasa nada.

Ejemplo `s = "ab#c"`, `t = "ad#c"`:

```text
s = "ab#c":
  leer "a" -> apilar        pila: [ a ]
  leer "b" -> apilar        pila: [ a  b ]
  leer "#" -> retirar "b"   pila: [ a ]
  leer "c" -> apilar        pila: [ a  c ]  -> "ac"

t = "ad#c":
  leer "a" -> apilar        pila: [ a ]
  leer "d" -> apilar        pila: [ a  d ]
  leer "#" -> retirar "d"   pila: [ a ]
  leer "c" -> apilar        pila: [ a  c ]  -> "ac"
```

Traza corta: `s` queda `"ac"` y `t` queda `"ac"`. Textos iguales -> `true`.

Qué recordar: `#` solo borra el último carácter guardado y se ignora con pila vacía.

