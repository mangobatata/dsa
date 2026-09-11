# Stack

Esta lección introduce la estructura Stack antes de aplicarla en Valid Parentheses.

Una Stack sirve para guardar elementos y trabajar siempre con el último que fue agregado.

La regla principal es:

```text
Last In, First Out
LIFO
```

En español:

```text
Último en entrar, primero en salir
```

## Concepto

Podés imaginar una Stack como una pila.

Agregás elementos arriba.

Sacás primero el elemento que quedó arriba.

Ejemplo:

```text
agrego A
agrego B
agrego C
```

La pila queda:

```text
C
B
A
```

Si sacás un elemento, sale primero:

```text
C
```

Después:

```text
B
```

Después:

```text
A
```

## Operaciones principales

### Push

Agregar un elemento al final o arriba de la Stack.

```text
push "("
```

### Pop

Sacar el último elemento agregado.

```text
pop -> "("
```

### Peek / Top

Mirar el último elemento agregado sin sacarlo.

```text
top -> "("
```

### Is Empty

Preguntar si la Stack está vacía.

```text
stack vacía -> true
```

## Complejidad

En una implementación típica:

```text
Operación          Promedio

Push               O(1)
Pop                O(1)
Peek               O(1)
Is Empty           O(1)
```

La Stack es útil cuando el problema necesita recordar algo pendiente y resolverlo en orden inverso.

## Señales para pensar en Stack

Podés pensar en Stack cuando aparecen preguntas como:

```text
¿Qué fue lo último que abrí?
```

```text
¿Qué fue lo último que quedó pendiente?
```

```text
¿Necesito deshacer pasos en orden inverso?
```

```text
¿Necesito comparar algo actual contra lo más reciente guardado?
```

## Conexión con Valid Parentheses

En Valid Parentheses, la idea no es memorizar:

```text
Valid Parentheses -> Stack
```

La idea es razonar:

```text
Si encuentro una apertura, queda pendiente.
```

```text
Si encuentro un cierre, debe cerrar la última apertura pendiente.
```

Preguntas para entrar al ejercicio:

```text
¿Qué símbolos quedan pendientes?
```

```text
¿Cuál fue el último símbolo abierto?
```

```text
¿Qué debería pasar cuando aparece un símbolo de cierre?
```

Ejercicio:

## Problemas que resolví usando Stack

* [Valid Parentheses](../../problems/leetcode/0020-valid-parentheses/README.md)
* [Backspace String Compare](../../problems/leetcode/0844-backspace-string-compare/README.md)
* [Balanced Brackets](../../problems/hackerrank/balanced-brackets/README.md)

## Errores o confusiones que tuve

- **Finalizar antes de tiempo:** Al procesar un string con retrocesos (`Backspace String Compare`), asumir que encontrar un `#` con stack vacía finalizaba el algoritmo en lugar de ignorar la tecla y seguir esperando caracteres válidos futuros.
- **Olvidar comprobar el estado final:** Creer que un recorrido sin errores garantiza validez sin verificar que la pila haya quedado completamente vacía (`stack.length === 0`). Si quedan aperturas sin cerrar, la secuencia es inválida.
- **La analogía de las prepizzas:** Visualizar las aperturas como prepizzas sin cocinar que quedan pendientes y los cierres como cocciones que resuelven únicamente la última abierta.

## Explicación simple con dibujos

Una Stack es una pila, como una pila de platos.

La regla es súper fácil, se llama LIFO:

```text
LIFO = Último en entrar, primero en salir
```

Es como decir: **¡el último que llega es el primero que sale!**

### 1) La pila de platos / torre de bloques

Imagina que estás ayudando a poner la mesa. Solo puedes poner platos ARRIBA y sacar platos de ARRIBA. ¡No puedes sacar el de abajo sin que todo se caiga!

Paso 0: La mesa está vacía.

```text
  mesa vacía

  --------------
  (nada aquí)
  --------------
```

Paso 1: Hacemos `push` del plato A. Push significa **poner arriba**.

```text
  push A

   +-----+
   |  A  |  <- arriba (top)
   +-----+
  --------------
```

Paso 2: Hacemos `push` del bloque B.

```text
  push B

   +-----+
   |  B  |  <- arriba (top)
   +-----+
   |  A  |
   +-----+
  --------------
```

Paso 3: Hacemos `push` del bloque C.

```text
  push C

   +-----+
   |  C  |  <- arriba (top)
   +-----+
   |  B  |
   +-----+
   |  A  |  <- abajo (bottom)
   +-----+
  --------------
```

¿Qué es `peek`? Peek significa **mirar sin tocar**. Solo miramos lo de arriba:

```text
  peek / top -> C

   +-----+
   |  C  |  <- ¡lo miramos, pero no lo sacamos!
   +-----+
   |  B  |
   +-----+
   |  A  |
   +-----+
  --------------
   ojo 👀
```

¿Qué es `pop`? Pop significa **sacar lo de arriba**. ¡POP! como una burbuja.

```text
  pop -> sale C

   ¡POP!
    (C)  -> sale primero porque llegó último

   +-----+
   |  B  |  <- ahora B está arriba
   +-----+
   |  A  |
   +-----+
  --------------
```

```text
  pop -> sale B

   ¡POP!
    (B)  -> sale segundo

   +-----+
   |  A  |  <- ahora A está arriba
   +-----+
  --------------
```

```text
  pop -> sale A

   ¡POP!
    (A)  -> sale último porque llegó primero

  --------------
  (pila vacía)
  --------------
```

¡Viste! Entraron en orden A, B, C y salieron al revés: C, B, A. Eso es LIFO. 🎉

### 2) La mochila mágica que solo deja sacar lo de arriba

Imagina tu mochila del cole. Metes tus cosas una arriba de otra:

```text
  Guardamos en la mochila (push, push, push):

   +------------------+
   |  🎨 colores (3º) | <- arriba
   |------------------|
   |  🍎 manzana (2º) |
   |------------------|
   |  📚 libro (1º)   | <- abajo
   +------------------+
         MOCHILA
```

Ahora tienes hambre. ¿Puedes sacar el libro que está abajo del todo? ¡No! Tienes que sacar primero lo de arriba:

```text
  Quiero el libro 📚... ¡pero está abajo!

   +------------------+
   |  🎨 colores      | <- 1º saco esto (pop)
   |------------------|
   |  🍎 manzana      | <- 2º saco esto (pop)
   |------------------|
   |  📚 libro        | <- 3º ¡por fin sale el libro!
   +------------------+

   Orden de salida: 🎨 -> 🍎 -> 📚
```

La mochila es como una Stack: **solo deja sacar lo de arriba**. Por eso si guardas 3 juguetes, el último que guardaste es el primero que puedes usar. ¡Qué buena memoria tiene la Stack!

### 3) Los paréntesis son cajitas que se cierran al revés

Mira estos signos: `( ) [ ] { }`. Son como cajitas que se abren y se cierran.

Cuando abres una cajita, queda pendiente, como una boca abierta que dice "¡ciérrame!":

```text
  Abrimos 3 cajitas: ( [ {

   +---+   +---+   +---+
   | ( |   | [ |   | { |  <- ¡todas abiertas!
   +---+   +---+   +---+
     1º      2º      3º
```

La regla es: **la última cajita que abriste es la primera que debes cerrar**. ¡Como las muñecas rusas!

```text
  Tenemos: ( [ {

  Llega } -> ¿cierra a la última abierta { ? ¡SÍ! ¡POP!

   ( [ { + } = ( [

   +---+   +---+
   | ( |   | [ |
   +---+   +---+
```

```text
  Tenemos: ( [

  Llega ] -> ¿cierra a la última abierta [ ? ¡SÍ! ¡POP!

   ( [ + ] = (

   +---+
   | ( |
   +---+
```

```text
  Tenemos: (

  Llega ) -> ¿cierra a la última abierta ( ? ¡SÍ! ¡POP!

   ( + ) = ¡todo cerrado! 🎉

  --------------
  (nada pendiente)
  --------------
```

Pero mira qué pasa si nos equivocamos:

```text
  Tenemos: ( [

  Llega ) -> ¿cierra a la última abierta [ ? ¡NO!

   ( [ + ) = ¡ERROR! ❌

   La [ quería un ] pero llegó un )
```

Por eso la Stack nos ayuda: siempre miramos con `peek` cuál fue **la última cajita abierta** y vemos si el cierre combina. ¡Somos detectives de cajitas! 🔍

### 4) Mini-ejercicios

**Ejercicio 1: La torre de bloques**

Haces push de 🟥 rojo, luego 🟦 azul, luego 🟨 amarillo. Después haces un pop. ¿Qué color sale?

```text
  pushes: 🟥 -> 🟦 -> 🟨

   +------+
   | 🟨   | <- arriba
   +------+
   | 🟦   |
   +------+
   | 🟥   | <- abajo
   +------+
```

<details>
<summary>Ver respuesta</summary>

¡Sale el 🟨 amarillo! Porque fue el último en entrar, es el primero en salir. Después de sacarlo, el 🟦 azul queda arriba.

```text
  pop -> 🟨

   +------+
   | 🟦   | <- ahora arriba
   +------+
   | 🟥   |
   +------+
```

</details>

**Ejercicio 2: La mochila del recreo**

En tu mochila guardas en este orden: 1º sándwich 🥪, 2º jugo 🧃, 3º pelota ⚽. Si metes la mano sin mirar, ¿qué sacas primero?

```text
   +------------------+
   |  ⚽ pelota (3º)   |
   |------------------|
   |  🧃 jugo (2º)    |
   |------------------|
   |  🥪 sándwich (1º)|
   +------------------+
```

<details>
<summary>Ver respuesta</summary>

¡Sacas la pelota ⚽ primero! Está arriba de todo. El sándwich 🥪, aunque entró primero, sale último porque está abajo del todo. ¡Eso es LIFO!

```text
  Orden de salida: ⚽ -> 🧃 -> 🥪
```

</details>

**Ejercicio 3: ¿Las cajitas están bien cerradas?**

Mira esta fila: `( [ ] )`. ¿Está bien cerrada o mal?

Pista: usa tu Stack imaginaria. Abre y cierra una por una:

```text
  Fila: ( [ ] )

  Paso 1: ( -> abro -> pila: ( 
  Paso 2: [ -> abro -> pila: ( [
  Paso 3: ] -> ¿cierra a [ ? ...
  Paso 4: ) -> ¿cierra a ( ? ...
```

<details>
<summary>Ver respuesta</summary>

¡Está BIEN cerrada! ✅ Mira:

```text
  (        -> pila: ( 
  ( [      -> pila: ( [
  ( [ ]    -> ] cierra a [ ¡POP! -> pila: (
  ( [ ] )  -> ) cierra a ( ¡POP! -> pila vacía 🎉
```

Pila vacía al final = todo cerrado. Si queda algo abierto, está mal.

</details>

