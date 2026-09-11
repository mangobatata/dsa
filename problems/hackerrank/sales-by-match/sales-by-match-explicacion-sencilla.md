# Sales by Match (Sock Merchant) — Explicación sencilla

## Explicación simple con dibujos

Ejemplo concreto: `ar = [1, 2, 1, 2, 1, 3, 2]` (medias de colores 1, 2, 3).

La memoria es una fila de cajitas `color -> cantidad de medias`:

```text
Inicio: memoria = { }, totalPares = 0

Recorro una media por vez:
  media 1 -> [1->1]
  media 2 -> [1->1] [2->1]
  media 1 -> [1->2] [2->1]
  media 2 -> [1->2] [2->2]
  media 1 -> [1->3] [2->2]
  media 3 -> [1->3] [2->2] [3->1]
  media 2 -> [1->3] [2->3] [3->1]

Cierro cajitas en pares (parte entera de cantidad / 2):
  color 1: [1->3] -> floor(3/2) = 1 par  (sobra 1 media)
  color 2: [2->3] -> floor(3/2) = 1 par  (sobra 1 media)
  color 3: [3->1] -> floor(1/2) = 0 pares (sobra 1 media)

  totalPares = 1 + 1 + 0 = 2
```

```text
Traza corta del ejemplo principal:
  conteo final: color 1 = 3, color 2 = 3, color 3 = 1.
  pares = 3//2 + 3//2 + 1//2 = 1 + 1 + 0 = 2.
```

Qué recordar: contar por color y sumar la división entera `cantidad // 2` de cada cajita.

