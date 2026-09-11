# Contains Duplicate — Explicación sencilla

## Explicación simple con dibujos

Ejemplo concreto: `nums = [1, 2, 3, 1]` (figuritas numeradas).

La memoria es una fila de cajitas `número -> veces visto`:

```text
Inicio: memoria = { }

Veo figurita 1:
  ¿[1->?] existe? No -> guardo [1->1]
  memoria = { [1->1] }

Veo figurita 2:
  ¿[2->?] existe? No -> guardo [2->1]
  memoria = { [1->1] [2->1] }

Veo figurita 3:
  ¿[3->?] existe? No -> guardo [3->1]
  memoria = { [1->1] [2->1] [3->1] }

Veo figurita 1 otra vez:
  ¿[1->?] existe? Sí -> sube a [1->2]
  memoria = { [1->2] [2->1] [3->1] }
  Como [1->2] supera 1 -> devuelvo true.
```

```text
Traza corta del ejemplo principal:
  1 -> guardo [1->1]
  2 -> guardo [2->1]
  3 -> guardo [3->1]
  1 -> ya existe, conteo llega a 2 -> true.
  Con [1, 2, 3, 4] ninguna cajita supera 1 -> false.
```

Qué recordar: si el número ya está en la memoria al mirarlo, hay duplicado; si no, guardarlo y seguir.

