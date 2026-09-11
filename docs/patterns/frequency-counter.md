# Frequency Counter (Contador de Frecuencias)

## 1. Modelo Mental

El patrón **Frequency Counter** utiliza un Hash Map u objeto/diccionario para acumular las apariciones de cada valor:

```text
elemento -> cantidad de apariciones
```

Permite comparar dos colecciones o verificar redundancias evitando comparaciones cruzadas $O(n^2)$.

---

## 2. ¿Cuándo aparece?

- Determinar si dos cadenas son **anagramas** (mismas letras con idéntica frecuencia).
- Detectar si existen **duplicados** en un conjunto (`conteo > 1`).
- Agrupar elementos por pares o sets (por ejemplo, agrupar medias por color en **Sales by Match**).
- Encontrar elementos mayoritarios o únicos.

---

## 3. Problemas Resueltos en el Repositorio

- [Valid Anagram (LeetCode 242)](../../problems/leetcode/0242-valid-anagram/README.md)
- [Contains Duplicate (LeetCode 217)](../../problems/leetcode/0217-contains-duplicate/README.md)
- [Sales by Match (HackerRank)](../../problems/hackerrank/sales-by-match/README.md)

---

## Explicación simple con dibujos

La idea es contar. No comparar uno por uno.

La idea mágica es esta:

```text
elemento -> cantidad de apariciones
```

Eso significa: "por cada cosa, anoto cuántas hay".

```
   COSA  ----->  ¿CUÁNTAS HAY?
  🎴 Figurita --> 3
  🧦 Media roja -> 2
  🔤 Letra A ---> 1
```

Es como tener cajitas con etiquetas. Cada cajita guarda una sola cosa.

```
  +-------+  +-------+  +-------+
  |   A   |  |   B   |  |   C   |
  |   x2  |  |   x1  |  |   x3  |
  +-------+  +-------+  +-------+
   cajita     cajita     cajita
     A          B          C
```

### 1) Contar figuritas y medias de colores 🧦🎴

Imagina que tienes estas medias tiradas en el piso:

```
  🧦  🧦  🧦  🧦  🧦
 ROJA AZUL ROJA VERDE ROJA
```

Si quieres hacer PARES, no compares cada media con todas las demás.
¡Eso es muy lento! Mejor cuenta por color:

Paso 1: Pon un balde por cada color.

```
   _________     _________     _________
  /         \   /         \   /         \
 |   ROJA    | |   AZUL    | |   VERDE   |
 |           | |           | |           |
  \_________/   \_________/   \_________/
     BALDE         BALDE         BALDE
```

Paso 2: Tira cada media en su balde y cuenta.

```
  ROJA:  🧦 + 🧦 + 🧦  = 3
  AZUL:  🧦           = 1
  VERDE: 🧦           = 1
```

Paso 3: Guarda el resultado en tu libreta de detective:

```text
ROJA  -> 3
AZUL  -> 1
VERDE -> 1
```

Ahora ya sabes: con 3 rojas puedes hacer 1 par y te sobra 1.

```
  🧦🧦 = 1 par de ROJAS
  🧦   = 1 roja solita :(
```

Lo mismo con figuritas:

```
  Tienes: ⭐ ⭐ 🌙 ⭐ 🌙

   .------.  .------.
   |  ⭐  |  |  🌙  |
   |  x3  |  |  x2  |
   '------'  '------'

  ⭐ -> 3
  🌙 -> 2
```

¡Eso es el Frequency Counter! Es tu libreta de conteo.

```python
medias = ["roja", "azul", "roja", "verde", "roja"]
conteo = {}

for color in medias:
    if color in conteo:
        conteo[color] = conteo[color] + 1
    else:
        conteo[color] = 1

# conteo = {"roja": 3, "azul": 1, "verde": 1}
```

### 2) Anagramas con letras como bloques 🔤🧱

¿Son "gato" y "toga" la misma palabra desordenada?
Vamos a usar bloques como LEGO:

Palabra 1: GATO

```
  +---+ +---+ +---+ +---+
  | G | | A | | T | | O |
  +---+ +---+ +---+ +---+
```

Palabra 2: TOGA

```
  +---+ +---+ +---+ +---+
  | T | | O | | G | | A |
  +---+ +---+ +---+ +---+
```

No mires el ORDEN. Mira cuántos bloques de cada letra hay.

Cuenta la palabra GATO:

```
  G -> █ = 1
  A -> █ = 1
  T -> █ = 1
  O -> █ = 1
```

Cuenta la palabra TOGA:

```
  T -> █ = 1
  O -> █ = 1
  G -> █ = 1
  A -> █ = 1
```

¿Tienen lo mismo? ¡SÍ!

```
  GATO: { G:1, A:1, T:1, O:1 }
  TOGA: { T:1, O:1, G:1, A:1 }

  ¡SON IGUALES! => ¡SON ANAGRAMAS! 🎉
  +------------------+
  |  🎉 SÍ SON 🎉   |
  +------------------+
```

Y si fuera "gato" vs "gatos"?

```
  GATO:  G:1 A:1 T:1 O:1 S:0
  GATOS: G:1 A:1 T:1 O:1 S:1

       +---------------+
       |  ❌ NO SON ❌  |
       +---------------+
  ¡A GATOS le sobra una S!
```

Truco de detective: si las dos libretas de conteo son iguales, son anagramas.

### 3) Tabla de conteo paso a paso 📝👣

Vamos a contar la palabra "BANANA" letra por letra.
Mira cómo crece tu libreta:

Empiezas con libreta vacía:

```text
{}  <- libreta vacía
```

| Paso | Letra que llega | Dibujo | Tu libreta queda así |
|------|-----------------|--------|----------------------|
| 1 | B | ```[B]``` | ```B -> 1``` |
| 2 | A | ```[B][A]``` | ```B -> 1, A -> 1``` |
| 3 | N | ```[B][A][N]``` | ```B -> 1, A -> 1, N -> 1``` |
| 4 | A ¡otra A! | ```[B][A+1][N]``` | ```B -> 1, A -> 2, N -> 1``` |
| 5 | N ¡otra N! | ```[B][A][N+1]``` | ```B -> 1, A -> 2, N -> 2``` |
| 6 | A ¡otra A! | ```[B][A+1][N]``` | ```B -> 1, A -> 3, N -> 2``` |

Dibujo final de cajitas:

```
  +-----+  +-----+  +-----+
  |  B  |  |  A  |  |  N  |
  |-----|  |-----|  |-----|
  |  █  |  | ███ |  | ██  |
  |  x1 |  |  x3 |  |  x2 |
  +-----+  +-----+  +-----+
```

Resultado final:

```text
B -> 1
A -> 3
N -> 2
```

Receta para no olvidar:

```
  1. Prepara libreta vacía {}
  2. Mira una cosa
  3. ¿Ya está en la libreta?
       SÍ -> suma 1  (+1)
       NO -> escríbela con 1 (=1)
  4. Repite con la siguiente
  5. ¡Listo! Ya puedes responder
```

```
    OJO 👀
   / \
  |   |  Si ves conteo > 1, ¡hay repetido!
   \_/
    |
   / \
```

### 4) 3 Mini-ejercicios

---

**Ejercicio 1: Las medias perdidas 🧦**

Tienes estas medias:

```
  🔵 🔴 🔵 🟢 🔵 🔴
```

Pregunta: ¿cuántas hay de cada color? ¿Cuántos pares azules puedes hacer?

<details>
<summary>👉 Ver respuesta</summary>

Cuenta:

```text
🔵 AZUL -> 3
🔴 ROJA -> 2
🟢 VERDE -> 1
```

Dibujo:

```
  AZUL:  🧦🧦🧦 = 3 -> 1 par + 1 solita
  ROJA:  🧦🧦 = 2   -> 1 par
  VERDE: 🧦 = 1     -> 0 pares
```

Respuesta: ¡1 par azul! 💙

</details>

---

**Ejercicio 2: ¿Son anagramas? 🔤**

```text
Palabra 1: AMOR
Palabra 2: ROMA
```

¿Son anagramas? Cuenta las letras.

<details>
<summary>👉 Ver respuesta</summary>

Cuenta AMOR:

```
  A -> 1
  M -> 1
  O -> 1
  R -> 1
```

Cuenta ROMA:

```
  R -> 1
  O -> 1
  M -> 1
  A -> 1
```

```
  +--------------+
  | 🎉 ¡SÍ! 🎉  |
  +--------------+
```

¡Son iguales! Las dos tienen A:1, M:1, O:1, R:1.
¡SON ANAGRAMAS! 💖

</details>

---

**Ejercicio 3: Encuentra el repetido 🕵️**

Mira estos números:

```
  +---+ +---+ +---+ +---+ +---+
  | 3 | | 1 | | 3 | | 5 | | 1 |
  +---+ +---+ +---+ +---+ +---+
```

Pregunta: ¿qué números están repetidos? (pista: busca conteo > 1)

<details>
<summary>👉 Ver respuesta</summary>

Cuenta paso a paso:

```text
3 -> 1
1 -> 1
3 -> 2  ¡se repite!
5 -> 1
1 -> 2  ¡se repite!
```

Tabla final:

```
  +-----+-----+-----+
  |  3  |  1  |  5  |
  | x2  | x2  | x1  |
  +-----+-----+-----+
```

Respuesta: el 3 y el 1 están repetidos. El 5 está solito. ⭐

</details>

---

Resumen:

```
   _________________________
  /                         \
  | CONTAR es mejor que     |
  | comparar uno por uno.   |
  | Usa tu libreta {}       |
  \_________________________/
          \   ^__^
           \  (oo)\_______
              (__)\       )\/\
                  ||----w |
                  ||     ||
```
