# Two Pointers (Dos Punteros)

## 1. Modelo Mental y Filosofía

> [!IMPORTANT]
> **Two Pointers NO significa memorizar `left++` y `right--`.**
> 
> Two Pointers es una técnica de **reducción del espacio de búsqueda mediante descarte seguro**. Mantenemos dos posiciones relevantes y las movemos según información matemática o lógica que garantiza que ninguna respuesta válida quede eliminada por error.

El movimiento de punteros **depende de las reglas del problema**, no de una receta rígida:

- En **Two Sum II** (array ordenado):
  ```text
  suma < target → left++  (descartamos el izquierdo: con cualquier otro elemento sumará aún menos)
  suma > target → right-- (descartamos el derecho: con cualquier otro elemento sumará aún más)
  ```
- En **Valid Palindrome**:
  ```text
  izquierda no es alfanumérico → left++ (ignoramos carácter no válido)
  derecha no es alfanumérico   → right-- (ignoramos carácter no válido)
  caracteres distintos         → return false (no es palíndromo)
  caracteres iguales           → left++; right-- (confirmado este extremo, cerramos hacia el centro)
  ```

---

## 2. ¿Qué problema intenta resolver?

Evitar la fuerza bruta cuadrática $O(n^2)$ de comparar todos los pares posibles $(i, j)$ mediante dos bucles anidados. Two Pointers reduce el tiempo a $O(n)$ en una sola pasada lineal.

---

## 3. ¿Cuándo aparece? (Señales de Reconocimiento)

- El array está **ordenado** (o puede ordenarse) y buscamos pares con una propiedad específica (suma, diferencia).
- El problema involucra **simetría o extremos convergentes** (palíndromos, reversa de cadenas).
- Se pide procesar elementos desde afuera hacia adentro (o desde un extremo al otro a ritmos distintos: fast & slow pointers).

---

## 4. ¿Cuándo NO usarlo?

- Cuando el array **no está ordenado** y el problema requiere devolver los **índices originales** (ordenar alteraría los índices; en ese caso conviene **Hash Map**).
- Cuando no existe una relación monótona que permita descartar elementos con certeza.
- Cuando se necesita recordar estados anteriores arbitrarios (allí corresponde Stack o Hash Map).

---

## 5. Cuándo usar `for` vs `while`

- **`for`**: Cuando de antemano conocemos el número exacto de iteraciones o recorremos secuencialmente elemento por elemento.
- **`while (left < right)`**: Cuando la continuación del algoritmo depende de una **condición lógica** y el movimiento de los punteros es condicional (a veces se mueve uno, a veces el otro, o avanzan salteando elementos).

---

## 6. Problemas Resueltos en el Repositorio

- [Two Sum II - Input Array Is Sorted](../../problems/leetcode/0167-two-sum-ii/README.md)
- [Valid Palindrome](../../problems/leetcode/0125-valid-palindrome/README.md)
- [Has Pair With Sum (Práctica fundacional)](../../problems/practice/has-pair-with-sum/README.md)

---

## Explicación simple con dibujos

La idea es usar dos dedos sobre una fila. Cada dedo marca una posición.

### 1) Tus dos dedos índices sobre una fila

Pon tus juguetes en fila sobre la mesa:

```text
Mesa:

[ 🧸 ] [ 🚗 ] [ 🎈 ] [ 🍎 ] [ ⭐ ]

   👆      👆
   Dedo1   Dedo2
```

Dedo1 = dedo izquierdo.
Dedo2 = dedo derecho.

Regla de oro:

```text
 👀 Miras lo que tocan tus dedos.
 🚶 Mueves UN dedo a la vez.
 🛑 Paras cuando se juntan o se cruzan.
```

Dibujo:

```text
Paso 0: dedos separados

  👇         👇
[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
  L                   R

Paso 1: se acercan

[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
        L         R

Paso 2: ¡se juntan! ¡STOP!

[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
              L
              R
           ¡CHOQUE!
```

Eso es Two Pointers: dos dedos, una fila, cero enredos.

---

### 2) Juego 1: Los extremos que se acercan

Este juego se llama "Abrazo del centro".
Un dedo empieza a la izquierda. El otro a la derecha.
Se van acercando hasta darse un abracito en el medio.

Sirve para 2 cosas:
a) Ver si una palabra se lee igual al revés (palíndromo)
b) Ver si dos números suman justo lo que queremos (suma)

#### Ejemplo A: ¿ANA es palíndromo?

Palabra ANA:

```text
Letras:  A   N   A
Pos:     0   1   2
```

Paso a paso:

```text
Paso 1:
 L           R
 👇         👇
[ A ] [ N ] [ A ]
  ¿A == A? ¡SÍ! 😄

Paso 2: los dos se mueven al centro
       L R
       👇👇
[ A ] [ N ] [ A ]
      ¿N sola? ¡SÍ! 🎉

Resultado: ¡Es palíndromo! ¡Fiesta!
  \ (^_^) /
```

#### Ejemplo B: ¿ALA NO es palíndromo? Probemos con GATO

```text
Paso 1:
 L               R
 👇             👇
[ G ] [ A ] [ T ] [ O ]
  ¿G == O? ¡NO! 😝

Resultado: ¡NO es palíndromo! ¡Buuu!
   ( T_T )
```

Idea para recordar:

```text
  ◀────── Abrazo ──────▶

[ L ] ......... [ R ]
   \             /
    \           /
     \         /
      \       /
       [ ♥ ]
      ¡Medio!
```

#### Ejemplo C: Suma con números ordenados

Queremos dos números que sumen 7.
Fila ordenada de menor a mayor:

```text
[ 1 ] [ 2 ] [ 4 ] [ 5 ]
```

```text
Paso 1:
  L           R
 👇         👇
[ 1 ] [ 2 ] [ 4 ] [ 5 ]
  1 + 5 = 6. ¡Muy chiquito!
  → mueve L a la derecha 🚶‍♂️➡️

Paso 2:
        L     R
       👇   👇
[ 1 ] [ 2 ] [ 4 ] [ 5 ]
  2 + 5 = 7. ¡JUSTO! 🎯🎉

Regla fácil:
 suma chica → mueve izquierda ➡️
 suma grande → mueve derecha ⬅️
 suma justa → ¡GANASTE! 🏆
```

Dibujo para tu cerebro:

```text
  suma < 7  →  [ L ] ──➡️ ───── [ R ]
  suma > 7  →  [ L ] ───── ⬅️── [ R ]
  suma = 7  →  [ L ] ──🎉🎉── [ R ]
```

---

### 3) Juego 2: El Explorador y el Escritor (lento y rápido)

Este es otro juego. Ya no es un abrazo.
Es una carrera donde uno corre y el otro escribe.

- 🏃 Explorador (fast / rápido): corre adelante, mira todo.
- ✏️ Escritor (slow / lento): camina despacio, escribe lo bueno.

Sirve para quitar repetidos. Como cuando copias solo una vez cada dibujo.

```text
Leyenda:
 🏃 = explorador (i)
 ✏️ = escritor (write)
 👀 = mirando
 ✅ = me lo quedo
 ❌ = repetido, lo salto
```

Fila con números repetidos:

```text
[ 1 ] [ 1 ] [ 2 ]
```

Paso a paso:

```text
Inicio: los dos empiezan juntos
 🏃✏️
 👇👇
[ 1 ] [ 1 ] [ 2 ]
  Guardamos el primero: [ 1 ]
  ✅

Paso 1: explorador avanza 1 paso
       🏃
       👇
  ✏️
  👇
[ 1 ] [ 1 ] [ 2 ]
  ¿1 == 1? ¡Repetido! ❌
  Escritor NO se mueve. Se queda quieto. 🧍

Paso 2: explorador avanza otro paso
             🏃
             👇
  ✏️
  👇
[ 1 ] [ 1 ] [ 2 ]
  ¿1 == 2? ¡Nuevo! ✅
  Escritor avanza y ESCRIBE el 2 ✏️➡️

Final bonito:
[ 1 ] [ 2 ] ← ¡solo 2 cajas buenas!
         ✨
```

Otro dibujo de la idea:

```text
Antes:
 ✏️      🏃
[ 1 ] [ 1 ] [ 2 ] [ 2 ] [ 3 ]
  ✅    ❌    ✅    ❌    ✅

Después:
[ 1 ] [ 2 ] [ 3 ]
  ✨    ✨    ✨
 ¡Sin repetidos!
```

Frase mágica:

```text
 🏃 corre y grita: "¿esto es nuevo?"
 ✏️ dice: "sí → lo escribo, no → lo salto"
```

---

### 4) Ejemplo con crayones: [rojo, rojo, azul]

Saca tus 3 crayones y ponlos en fila:

```text
Caja 0: 🟥 rojo
Caja 1: 🟥 rojo
Caja 2: 🟦 azul
```

Dibujo inicial:

```text
   ✏️  🏃
   👇  👇
[ 🟥 ] [ 🟥 ] [ 🟦 ]
  0      1      2
```

¿Qué pasa?

```text
Paso 0:
 Guardamos el primer rojo. Es nuestro favorito.
 [ 🟥 ] ← ✅ lo queremos
  ✏️ se queda en 0
  🏃 se queda en 0

Paso 1: 🏃 va a la caja 1
     ✏️    🏃
     👇    👇
  [ 🟥 ] [ 🟥 ] [ 🟦 ]
    ¿rojo == rojo? ¡IGUAL! ❌
    ¡Es gemelo! Lo saltamos.
    ✏️ NO se mueve.

     🧍✏️: "me quedo aquí"
     🏃: "sigo corriendo..."

Paso 2: 🏃 va a la caja 2
     ✏️           🏃
     👇           👇
  [ 🟥 ] [ 🟥 ] [ 🟦 ]
    ¿rojo == azul? ¡DIFERENTE! ✅
    ¡Nuevo color! ¡Qué bonito!
    ✏️ avanza 1 paso y escribe AZUL:

  [ 🟥 ] [ 🟦 ]
    ✨     ✨
```

Resultado final:

```text
  Antes: [ 🟥 ] [ 🟥 ] [ 🟦 ]  (3 crayones)
  Después: [ 🟥 ] [ 🟦 ]       (2 crayones buenos)

   🎨 ¡Sin repetidos!
   😄 ¡Mesa limpia!
```

Código idea (para cuando seas grande, no te asustes):

```text
write = 0
for explorer = 1, 2, 3, ...:
  si color[explorer] != color[write]:
    write = write + 1
    color[write] = color[explorer]
```

---

### 5) 3 Mini-ejercicios

#### Ejercicio 1: ¿OJO es palíndromo? 👀

```text
[ O ] [ J ] [ O ]
```

Dibuja tus dedos:

```text
  L           R
 👇         👇
[ ? ] [ ? ] [ ? ]
```

Preguntas:
1. ¿La letra L (O) es igual a la letra R (O)?
2. Mueve los dedos al centro. ¿Qué letra queda?
3. ¿Es palíndromo? ¡Grita SÍ o NO!

Respuesta escondida: ¡SÍ! OJO se lee igual al revés.

#### Ejercicio 2: Suma 6 con dedos ➕

```text
[ 1 ] [ 3 ] [ 4 ] [ 5 ]
Buscamos dos que sumen 6.
```

Ayuda paso a paso:
1. L en 1, R en 5. 1+5=6. ¿Ya ganaste? ¡Piensa!
2. Si no, ¿suma chica o grande? ¿Qué dedo mueves?
3. Dibuja cada paso con 👇👇.

Respuesta escondida: 1 + 5 = 6. ¡Lo lograste en el paso 1!

Prueba más difícil: busca dos que sumen 7 en la misma fila.
Pista: L=3? R=5? No... sigue moviendo.

#### Ejercicio 3: Crayones gemelos 🖍️

```text
[ 🟢 ] [ 🟢 ] [ 🟡 ] [ 🟡 ] [ 🔴 ]
 verde  verde amarillo amarillo rojo
```

Tú eres 🏃 y ✏️:
1. Empieza con write=0, explorer=1.
2. Avanza explorer. Si es diferente, write+1 y escribe.
3. ¿Cuántos colores únicos quedan al final?
4. Dibuja el final bonito: [ ? ] [ ? ] [ ? ]

Respuesta escondida: 3 únicos → [ 🟢 ] [ 🟡 ] [ 🔴 ].

---

Recuerda:

```text
   👆     👆
   L       R
 ¡Dos dedos lo pueden todo!

 Abrazo 🤗 → extremos que se acercan
 Carrera 🏃✏️ → explorador y escritor
```
