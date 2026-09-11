# Two Sum — Explicación sencilla

## Explicación simple con dibujos

Ejemplo concreto: `nums = [11, 5, 7, 4, 78, 2]`, `target = 9`.

La memoria es una fila de cajitas `valor -> índice`:

```text
Paso 0 (inicio):
memoria = { }

Paso 1: i=0, num=11. Complemento = 9-11 = -2.
  ¿-2 está en memoria? No.
  Guardo: [11->0]
  memoria = { [11->0] }

Paso 2: i=1, num=5. Complemento = 9-5 = 4.
  ¿4 está en memoria? No.
  Guardo: [5->1]
  memoria = { [11->0] [5->1] }

Paso 3: i=2, num=7. Complemento = 9-7 = 2.
  ¿2 está en memoria? No.
  Guardo: [7->2]
  memoria = { [11->0] [5->1] [7->2] }

Paso 4: i=3, num=4. Complemento = 9-4 = 5.
  ¿5 está en memoria? Sí -> está en [5->1].
  En este recorrido 5+4 también suma 9; la traza del ejemplo
  continúa hasta el par 7+2.

Paso 5: i=4, num=78. Complemento = 9-78 = -69. No visto.
  Guardo: [78->4]

Paso 6: i=5, num=2. Complemento = 9-2 = 7.
  ¿7 está en memoria? Sí -> [7->2].
  Respuesta = [2, 5] porque 7 + 2 = 9.
```

```text
Traza corta del ejemplo principal:
  [7->2] guardado en i=2; al llegar a i=5 (num=2) se pide 7,
  7 ya está en memoria -> devuelvo [2, 5].
```

Qué recordar: parado en cada número, buscar `target - número` en la memoria; si no está, guardar `número -> índice` y avanzar.

