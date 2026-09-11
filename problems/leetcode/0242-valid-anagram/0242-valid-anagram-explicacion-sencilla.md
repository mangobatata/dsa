# Valid Anagram — Explicación sencilla

## Explicación simple con dibujos

Ejemplo concreto: `s = "anagram"`, `t = "nagaram"` (letras como figuritas).

Se arman dos filas de cajitas `letra -> conteo`:

```text
Contar s = "anagram":
  a -> [a->1] -> ... -> [a->3] [n->1] [g->1] [r->1] [m->1]
  memoriaS = { [a->3] [n->1] [g->1] [r->1] [m->1] }

Contar t = "nagaram":
  n -> [n->1], a -> [a->1], g -> [g->1] ...
  memoriaT = { [n->1] [a->3] [g->1] [r->1] [m->1] }

Comparar letra por letra:
  [a->3] vs [a->3] OK
  [n->1] vs [n->1] OK
  [g->1] vs [g->1] OK
  [r->1] vs [r->1] OK
  [m->1] vs [m->1] OK
  -> devuelvo true.
```

```text
Traza corta del ejemplo principal:
  longitudes iguales (7 == 7) -> cuento ambas.
  s: a=3, n=1, g=1, r=1, m=1.
  t: a=3, n=1, g=1, r=1, m=1.
  Todos los conteos coinciden -> true.
  Con s="rat", t="car": [r->1][a->1][t->1] vs [c->1][a->1][r->1],
  la t no existe en memoriaT con igual conteo -> false.
```

Qué recordar: misma longitud y mismo conteo letra por letra; si una cajita difiere, no es anagrama.

