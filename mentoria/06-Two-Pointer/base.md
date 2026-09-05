calculo suma

suma < target → muevo SOLO izq
suma > target → muevo SOLO der
suma = target → encontré respuesta

vuelvo a calcular
vuelvo a decidir

Two Pointer es descartar posibilidades con seguridad

[1, 3, 4, 7, 10, 12]
 ↑              ↑

1 + 12 = 13
13 > 11
→ mover der

[1, 3, 4, 7, 10, 12]
 ↑          ↑

1 + 10 = 11
11 === target
→ encontrado


otra habilidad que tenemos que entrenar junto con DSA: precisión

Cuando resolvamos ejercicios, quiero que adoptemos esta pequeña disciplina:

1. Leo el problema completo.
2. Escribo claramente qué busco.
3. Hago UNA operación.
4. Comparo contra el objetivo original.
5. Recién entonces decido el siguiente movimiento.
============================================

[2, 4, 5, 8, 11, 14]
 ↑               ↑

target = 13

2 + 14 = 16
16 > 13
→ der--

[2, 4, 5, 8, 11, 14]
 ↑           ↑

2 + 11 = 13
13 === target
→ encontrado
===========================================

[1, 3, 6, 8, 12, 17]
 ↑                ↑
target = 10

1+17=18
18>10
-> der--

[1, 3, 6, 8, 12, 17]
 ↑           ↑

1+12=13
13>10
-> der--

[1, 3, 6, 8, 12, 17]
 ↑        ↑
1+8=9
9<10
-> iz++

[1, 3, 6, 8, 12, 17]
    ↑     ↑
3+8=11
11>10
-> der--

[1, 3, 6, 8, 12, 17]
    ↑  ↑
3+6=9
9<10
-> iz++

iz = 0
der = última posición

mientras iz < der
    calcular suma

    si suma === target
        encontrado

    si suma < target
        iz++

    si suma > target
        der--

si los punteros se encuentran
    no existe solución



FOR
↓
Sé cómo quiero recorrer/repetir.

"por cada elemento..."
"desde 0 hasta n..."
"repetir n veces..."


WHILE
↓
Quiero continuar mientras una condición sea verdadera.

"mientras queden elementos..."
"mientras no se encuentren..."
"mientras tenga algo en el Stack..."

============================
PSEUDOCODIGO:

iz = 0
der = última posición del array

mientras iz < der:

    suma = nums[iz] + nums[der]

    si suma === target:
        encontrado

    si suma > target:
        der--

    si suma < target:
        iz++

si termina el while:
    no encontrado


