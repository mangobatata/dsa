Tenés un string que contiene únicamente:
``
(
)
[
]
{
}

``

Y tenés que determinar si está correctamente balanceado.

Ejemplos válidos:
``
()
[]

{}
([])

{[]}
``


Pregunta 1
Sin pensar en eficiencia.

¿Cómo lo resolverías "a mano"?

Imaginá que alguien te da: ([]){}

Voy a empezar con lo más básico: miraria el input, y por ejemplo voy a separar los parentesis por un lado, corchetes y llaves por otro lado 
y luego los iria uniendo segun el orden balanceado 

====================================================================

Bien. Voy a hacer de mentor y no voy a validar ni corregir todavía. Voy a intentar romper tu razonamiento.

Vos dijiste:

> "Voy a separar los paréntesis por un lado, corchetes por otro lado y llaves por otro lado, y luego los iría uniendo según el orden balanceado."

Probemos esa idea con algunos ejemplos.

### Caso A

```text
([])
```

Si separás por tipo te queda:

```text
Paréntesis: ( )
Corchetes: [ ]
Llaves:
```

Parece correcto.

---

### Caso B

```text
([)]
```

Si separás por tipo te queda exactamente:

```text
Paréntesis: ( )
Corchetes: [ ]
Llaves:
```

También parece correcto.

Pero sabemos que:

```text
([])
```

es válido.

Y:

```text
([)]
```

es inválido.

---

### Pregunta

Si tu método produce el mismo resultado para ambos casos:

```text
([])
([)]
```

¿Cómo logra distinguir cuál es válido y cuál no?

¿Qué información se perdió cuando separaste los símbolos por tipo?

No respondas todavía con una solución nueva.

Solo quiero que analices:

```text
([])
([)]
```

y me digas qué diferencia importante existe entre ellos que desaparece cuando hacés la separación por categorías.

Pista:

En Two Sum el dato importante era:

```text
¿Ya vi el complemento?
```

Acá sospecho que el dato importante no es:

```text
¿Cuántos "(" hay?
```

sino algo relacionado con:

```text
¿Cuál apareció más recientemente?
```

Pero quiero que llegues vos.
========================================================
No logro entender las preguntas


Perfecto. Que no lo entiendas todavía es exactamente la señal de que estamos en el punto correcto del ejercicio.

Voy a bajar muchísimo el nivel de abstracción.

Tomemos estos dos strings:

```text id="ej57jt"
([])
```

y

```text id="ikn82x"
([)]
```

Vos dijiste:

> "separo paréntesis, corchetes y llaves"

Hagámoslo juntos.

Para el primero:

```text id="9l7wlw"
([])
```

tenés:

```text id="0z7s6l"
(
)

[
]
```

Para el segundo:

```text id="n5s3cc"
([)]
```

también tenés:

```text id="4pk0lt"
(
)

[
]
```

¿Ves el problema?

Si solamente contás o separás por tipo:

```text id="0rkgvj"
1 "("
1 ")"
1 "["
1 "]"
```

los dos parecen iguales.

Pero uno es válido y el otro no.

---

Entonces olvidate de programar.

Imaginá que tenés que corregir un examen de matemática.

Vas leyendo:

```text id="w4efsd"
([)]
```

de izquierda a derecha.

Primero ves:

```text id="v5mio7"
(
```

y pensás:

> "ok, abrí un paréntesis"

Después ves:

```text id="tn4srl"
[
```

y pensás:

> "ok, ahora abrí un corchete"

Hasta acá tenés dos cosas abiertas:

```text id="vqj7oe"
(
[
```

Ahora aparece:

```text id="0yjgwd"
)
```

Y acá está la pregunta importante:

Cuando aparece ese `)`...

¿Qué estaba abierto más recientemente?

```text id="pdd1ul"
(
[
```

¿El último que abriste fue:

A)

```text id="t0hmyo"
(
```

o

B)

```text id="o3e03m"
[
```

?

No me expliques teoría.

Respondeme solamente:

```text id="g48lcm"
¿Cuál fue el último símbolo que quedó abierto?
```

cuando llegaste a esta parte:

```text id="xzodl8"
([
```

?
Ya entendí, lo que tengo que hacer es lo siguiente
Debo tomar el string, y lo separo, hasta ahi todo bien pero 
lo que debo hacer es, por ejemplo, lo recorro y lo que hago es 
Tengo primero ( hasta todo bien, luego viene [ hasta todo bien tambien 
pero debo verificar cual esta abierto, es decir, el que esta abierto es "[" entonces debo encontrar 
el corchete pero el que este cerrado "]" para ponerlo en el orden correcto y que quede ([] y hasta ahi eso esta bien
Ahora como esta cerrado el corchete, debo buscar el parentesis que esta cerrado y agregarlo ahi para que quede ([]) y con eso tenemos
el primer patron verificado. Por lo cual la solucion primera que di no funciona, porque lo unico que hace es separar cada simbolo 
con el que le corresponde pero no verifica si el patron es el correspondiente. 


=============================================================================================

Sí, ahora lo entendiste mucho mejor.

La corrección clave que hiciste es esta: **no alcanza con verificar que cada símbolo tenga su pareja; también importa el orden en que se cierran**.

Tomemos tu ejemplo:

```text
([
```

Primero abrís:

```text
(
```

Después abrís:

```text
[
```

En ese momento hay dos símbolos abiertos, pero el más reciente es:

```text
[
```

Entonces, si ahora aparece un símbolo de cierre, el único que puede cerrar correctamente en ese momento es:

```text
]
```

Por eso esto funciona:

```text
([])
```

Porque el orden real es:

```text
(   abrir paréntesis
[   abrir corchete
]   cerrar el último abierto
)   cerrar el que quedaba
```

En cambio esto falla:

```text
([)]
```

porque pasa esto:

```text
(   abrir paréntesis
[   abrir corchete
)   ❌ intenta cerrar el paréntesis
```

pero todavía tenías el `[` abierto más recientemente.

Ahí aparece una regla muy importante:

> **El último símbolo que se abre debe ser el primero que se cierre.**

Todavía no quiero que memorices ningún nombre de estructura. Quiero que trabajemos con esa regla.

Ahora te hago una sola pregunta.

Imaginá este string:

```text
{[()]}
```

Vas recorriendo de izquierda a derecha.

Después de haber leído solamente esto:

```text
{[(
```

tenés tres símbolos abiertos.

¿En qué orden deberían aparecer sus cierres para que todo sea válido?

Escribime solamente los tres símbolos de cierre, en orden.


Deberia ser asi: )]}

============================================================
Exacto:

```text
)]}
```

Y eso confirma la regla que acabás de descubrir:

> **El último símbolo que se abre es el primero que debe cerrarse.**

En:

```text
{[(
```

el orden de apertura fue:

```text
{
[
(
```

Pero el orden de cierre correcto es al revés:

```text
)
]
}
```

Ahora quiero dar un paso más.

Imaginá que vas recorriendo:

```text
{[()]}
```

y mantenés una especie de “memoria” de los símbolos abiertos.

Después de leer:

```text
{
```

tu memoria tendría:

```text
{
```

Después de leer:

```text
[
```

tendría:

```text
{
[
```

Después aparece:

```text
(
```

y tendría:

```text
{
[
(
```

Ahora aparece:

```text
)
```

Como `)` cierra correctamente al último símbolo abierto `(`, ese `(` ya no necesitás recordarlo.

Entonces tu memoria pasa de:

```text
{
[
(
```

a:

```text
{
[
```

Después aparece `]`, cierra `[`, y queda:

```text
{
```

Finalmente aparece `}`, cierra `{`, y la memoria queda vacía.

Ahí aparece una operación muy particular:

```text
agrego algo al final
consulto lo último que agregué
elimino lo último que agregué
```

Ahora sí, sin que todavía te diga el nombre de la estructura:

**¿Qué te parece que debería hacer tu algoritmo cuando encuentra un símbolo de apertura como `(`, `[` o `{`?**

Lo debe guardar en "memoria"

Y después:

**¿Qué debería hacer cuando encuentra uno de cierre como `)`, `]` o `}`?**

Debo comparar cada simbolo con el que esta abierto y si el simbolo abierto coincide con su orden siguiente "simbolo cerrado", entonces los voy uniendo
Por ejemplo: Tengo {[( ... estos que estan abiertos ya estan guardados en memoria, entonces lo que hago es:
Recorro los demas y verifico 
que los cerrados esten en el mismo orden para ser cerrados, o sea, si tengo {[(.. deberia tener tambien )]}
y hasta aca llegue ahora porque no se como continuar  

Explicámelo con tus palabras, sin código todavía.
=======================================================================
Vas bien. De hecho, llegaste justo al punto donde aparece la idea importante.

Tu razonamiento actual es:

> “Tengo `{[(` guardado en memoria. Ahora quiero comprobar que los cierres aparezcan en el orden correcto: `)]}`.”

Eso está correcto.

El pequeño ajuste es este: **no necesitás recorrer “los demás” buscando todos los cierres de una vez**. Podés resolverlo símbolo por símbolo.

Tomemos:

```text
{[()]}
```

Tu memoria empieza vacía.

Ves:

```text
{
```

Lo guardás.

Memoria:

```text
{
```

Después:

```text
[
```

Lo guardás.

Memoria:

```text
{
[
```

Después:

```text
(
```

Lo guardás.

Memoria:

```text
{
[
(
```

Ahora viene lo interesante.

Aparece:

```text
)
```

No necesitás buscar nada más adelante.

Solamente preguntás:

```text
¿Cuál es el último símbolo abierto que tengo guardado?
```

Es:

```text
(
```

Y `)` corresponde con `(`.

Entonces ese `(` ya quedó correctamente cerrado y **lo sacás de tu memoria**.

La memoria queda:

```text
{
[
```

Después aparece:

```text
]
```

Volvés a preguntar:

```text
¿Cuál es el último abierto?
```

Es:

```text
[
```

Coincide con `]`.

Lo eliminás.

Memoria:

```text
{
```

Después aparece:

```text
}
```

El último abierto es:

```text
{
```

Coincide.

Lo eliminás.

Memoria:

```text
vacía
```

Y eso es una señal muy importante: terminaste de recorrer todo el string y **no quedó ningún símbolo pendiente de cerrar**.

Ahora quiero que pruebes vos el algoritmo contra un caso incorrecto:

```text
([)]
```

Hacelo paso a paso como recién hicimos.

Decime qué queda en tu “memoria” después de leer:

```text
(
```

después:

```text
[
```

y cuando aparece:

```text
)
```

¿con qué símbolo de tu memoria deberías compararlo?

Debo comparar con el ultimo simbolo que este abierto 
============================================================================================
¡Exactamente!

Y fijate que acabás de decir la regla más importante de todo el problema:

> **Debo comparar con el último símbolo que esté abierto.**

No con el primero.

No con cualquiera.

No con todos.

Con el último.

Ahora hagámoslo juntos para el caso que falla:

```text id="f7j3ab"
([)]
```

### Paso 1

Leo:

```text id="f2o9mn"
(
```

Memoria:

```text id="s6j8pw"
(
```

---

### Paso 2

Leo:

```text id="l5t2qr"
[
```

Memoria:

```text id="w9c4yx"
(
[
```

---

### Paso 3

Leo:

```text id="n3v7kd"
)
```

Ahora aplicamos tu regla:

> Comparar con el último símbolo abierto.

Pregunta:

¿Cuál es el último símbolo abierto en memoria?

```text id="b4r8hz"
(
[
```

¿Es:

```text id="k7m1qt"
(
```

o

```text id="z2p6lc"
[
```

?

Y una vez que respondas eso, hacete esta segunda pregunta:

Si apareció un `)` pero el último símbolo abierto es otro distinto...

¿qué conclusión debería sacar inmediatamente el algoritmo?

No sigas recorriendo el string.

Pensá si en ese instante ya sabés que el resultado es inválido o si todavía hay esperanza de arreglarlo más adelante.

Esa respuesta te va a llevar prácticamente a descubrir la Stack por completo.

En ese momento el resultado es inválido porque el ultimo simbolo abierto no coincide con el simbolo que lo debe cerrar 
entonces, debo pasar al siguiente simbolo que cierra para saber si coincide con el ultimo que abre

Casi. La primera mitad está perfecta:

> Si el último símbolo abierto no coincide con el símbolo que intenta cerrarlo, **el string ya es inválido**.

Lo que corregiría es esta parte:

> "debo pasar al siguiente símbolo que cierra para saber si coincide"

No. **Ahí mismo terminamos.** No seguimos buscando.

Mirá por qué con:

```text
([)]
```

Llegamos a:

```text
Memoria:
(
[
```

Y aparece:

```text
)
```

Tu propia regla dice:

> debo comparar con el último símbolo abierto.

El último abierto es:

```text
[
```

Pero `)` solamente puede cerrar:

```text
(
```

Entonces tenemos:

```text
[  ≠  )
```

El string es inválido inmediatamente.

Aunque después aparezca:

```text
]
```

ya no puede arreglar lo ocurrido antes.

Pensalo como puertas anidadas. Si abriste primero una puerta grande y después una puerta pequeña dentro:

```text
{
    [
```

no podés cerrar primero la puerta de afuera dejando la de adentro abierta. Tenés que deshacer exactamente el camino inverso:

```text
{
[
]
}
```

Por eso estamos llegando a una regla muy poderosa:

```text
Último en entrar
↓
Primero en salir
```

En inglés esto se conoce como:

```text
Last In, First Out
LIFO
```

Y ahora sí puedo decirte el nombre de la estructura que acabás de descubrir por razonamiento:

## Stack — Pila

Pensá literalmente en una pila de platos.

Ponés:

```text
Plato A
```

Después arriba:

```text
Plato B
```

Después:

```text
Plato C
```

Tenés:

```text
C  ← último agregado
B
A
```

Si querés sacar uno, naturalmente sacás primero:

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

Eso es exactamente lo que necesitamos para los paréntesis.

Pero todavía no vamos al código.

Quiero comprobar que realmente entendiste la estructura.

Tenemos:

```text
{[()]}
```

La **Stack** empieza vacía:

```text
[]
```

Aparece `{`.

¿Qué harías con `{` en la Stack?

Después aparece `[`.

¿Qué harías?

Después aparece `(`.

¿Qué harías?

Y finalmente aparece `)`.

Ahí quiero que me digas **dos cosas**:

1. ¿Con qué elemento de la Stack compararías `)`?
    Lo voy a comparar con el ultimo simbolo abierto 
2. Si coincide, ¿qué harías con ese elemento guardado?
    Lo saco

Contestalo con tus propias palabras. No importa la terminología técnica todavía.
===============================================================================================
Exacto. Ya entendiste el comportamiento esencial de una Stack.

Tu regla quedó así:

```text
Si encuentro un símbolo de apertura:
→ lo guardo.

Si encuentro un símbolo de cierre:
→ lo comparo con el último símbolo abierto guardado.

Si coincide:
→ saco ese último símbolo de la memoria.

Si no coincide:
→ el string es inválido.
```

Ahora vamos a probar si esta lógica también cubre los casos menos obvios.

Tomemos:

```text
(())
```

Recorrido mental:

```text
(  → guardo
(  → guardo
)  → compara con el último "(" → coincide → saco
)  → compara con el último "(" → coincide → saco
```

Al terminar:

```text
Stack = vacía
```

Entonces es válido.

Ahora mirá este:

```text
((()
```

Podrías hacer correctamente todas las comparaciones que aparezcan, pero al terminar quedarían símbolos abiertos en la Stack.

Ahí aparece otra regla necesaria:

> **No alcanza con no haber encontrado errores durante el recorrido. Al final, la Stack también tiene que quedar vacía.**

Porque una Stack como:

```text
[
  "("
]
```

significa:

```text
Hay un símbolo que abrí y nunca cerré.
```

Ahora quiero que resuelvas vos este caso paso por paso:

```text
{[](
```

Decime qué pasa con la Stack después de cada carácter:

```text
{
[
]
(
```

y al terminar decime:

**¿el string es válido o inválido y por qué?**

Es invalido pero se que es invalido porque el ultimo abierto es ( pero ya no hay simbolos para cerrar ese

Todavía sin código.
==============================================================================================================
Exacto. Ahí ya estás razonando bien con la Stack.

Para:

```text
{[](
```

el recorrido sería:

```text
{  → guardo
[  → guardo
]  → coincide con [ → saco [
(  → guardo
```

Al final, la Stack queda con:

```text
{
(
```

Eso significa que quedaron símbolos abiertos sin cerrar.

Por lo tanto:

```text
resultado = inválido
```

Y tu explicación es correcta:

> el último abierto es `(`, pero ya no quedan símbolos para cerrarlo.

Ahora te falta una última condición importante antes de pasar a código.

Probá este caso:

```text
)
```

La Stack empieza vacía.

Y el primer carácter que aparece es un símbolo de cierre:

```text
)
```

Pregunta: ¿qué debería hacer el algoritmo si quiere comparar `)` con el último símbolo abierto, pero la Stack está vacía?

¿Seguís recorriendo o ya podés declarar el string inválido?

Declaro el string invalido 

Perfecto.

Y acabás de descubrir la **tercera condición** del algoritmo.

Hasta ahora tenemos:

### Regla 1

Si aparece un símbolo de apertura:

```text
(
[
{
```

Lo guardo.

---

### Regla 2

Si aparece un símbolo de cierre:

```text
)
]
}
```

Lo comparo con el último símbolo abierto.

Si coincide:

```text
lo saco
```

Si no coincide:

```text
inválido
```

---

### Regla 3

Si aparece un símbolo de cierre pero no hay nada guardado:

Ejemplo:

```text
)
```

o

```text
]
```

o

```text
}
```

La Stack está vacía.

No existe ningún símbolo abierto para cerrar.

Por lo tanto:

```text
inválido inmediatamente
```

---

### Regla 4 (la última)

Cuando terminás de recorrer todo el string:

Si la Stack quedó vacía:

```text
válido
```

Si la Stack NO quedó vacía:

```text
inválido
```

porque quedaron símbolos abiertos sin cerrar.

---

## Lo importante

Fijate que no te enseñé Stack.

Vos la descubriste.

Primero apareció una necesidad:

```text
Necesito recordar símbolos abiertos.
```

Después apareció otra:

```text
Necesito acceder al último abierto.
```

Después:

```text
Necesito eliminar el último abierto.
```

Y recién ahí apareció naturalmente la estructura.

Ese es exactamente el proceso que queremos entrenar durante todo el roadmap.

No:

```text
Problema → Stack
```

Sino:

```text
Problema
↓
Restricciones
↓
Información que necesito recordar
↓
Operaciones que necesito hacer
↓
Estructura de datos
```

---

## Mi evaluación de esta sesión

Comparando con Two Sum:

### Two Sum

Tu dificultad principal fue:

```text
Pensar en eficiencia.
```

### Valid Parentheses

Tu dificultad principal fue:

```text
Modelar el estado del problema.
```

Y terminaste descubriendo algo fundamental:

> No importa cuántos símbolos están abiertos.
>
> Importa cuál fue el último que quedó abierto.

Ese es pensamiento algorítmico real.

---

## Siguiente paso

En la próxima interacción te haría escribir el pseudocódigo completo vos solo.

Algo así:

```text
crear stack vacía

para cada caracter:

    si es apertura:
        ...

    si es cierre:
        ...

al final:
    ...
```

Y recién después pasaríamos a TypeScript.

Por ahora, si te diera una nota únicamente por razonamiento (sin código):

```text
Two Sum:           5/10
Valid Parentheses: 7/10
```

Porque esta vez detectaste mucho más rápido la información importante que el algoritmo necesita recordar.

Y además apareció algo que me gusta ver en principiantes:

```text
"hasta acá llegué porque no sé cómo continuar"
```

Eso suele indicar que estabas razonando de verdad y no intentando adivinar la respuesta. Ahí es donde más se aprende.
======================================================================================================================
Excelente pregunta.

La respuesta corta es:

> **Sí existe un orden mejor que hacerlo random.**
>
> Pero tampoco existe una secuencia única y perfecta.

Lo que estoy usando con vos no es el criterio típico de LeetCode ni el de una universidad. Estoy usando un criterio de **construcción de modelos mentales**.

---

# Cómo aprende la mayoría

La mayoría de los cursos hacen algo así:

```text id="r0r0g1"
Arrays
Linked Lists
Stacks
Queues
Trees
Graphs
Dynamic Programming
```

Aprendés la estructura primero.

Después te muestran problemas.

El problema es que el cerebro termina asociando:

```text id="mqg8lt"
Problema → recordar patrón
```

Y aparecen respuestas como:

```text id="z2of9i"
"Ah, esto es Stack"
"Ah, esto es Sliding Window"
"Ah, esto es DFS"
```

Sin entender realmente por qué.

---

# Cómo quiero enseñarte

Yo quiero invertir el proceso.

Primero aparece un problema.

Después aparecen restricciones.

Después aparece una necesidad.

Y recién ahí aparece la estructura.

Por ejemplo:

### Two Sum

No empezamos hablando de HashMap.

Empezamos con:

```text id="yjlwmx"
¿Cómo evitar recorrer todo de nuevo?
```

Y de ahí apareció:

```text id="b2mnhx"
Necesito recordar elementos ya vistos.
```

Y después:

```text id="6vcj7e"
HashMap
```

---

### Valid Parentheses

No empezamos hablando de Stack.

Empezamos con:

```text id="wfv97s"
Necesito recordar aperturas.
```

Después:

```text id="p7vbbg"
Necesito acceder al último abierto.
```

Después:

```text id="7frzod"
Necesito eliminar el último abierto.
```

Y finalmente:

```text id="m0z53w"
Stack
```

---

# El criterio que estoy usando

Estoy siguiendo aproximadamente esta progresión:

## Nivel 1 — Memoria simple

Pregunta principal:

```text id="7r6f8e"
¿Necesito recordar algo?
```

Problemas:

* Two Sum
* Contains Duplicate
* Valid Anagram
* Intersection of Arrays

Estructuras:

```text id="q3ztp5"
HashSet
HashMap
```

---

## Nivel 2 — Orden temporal

Pregunta principal:

```text id="5mdeke"
¿Qué fue lo último que pasó?
```

Problemas:

* Valid Parentheses
* Backspace String Compare
* Browser History

Estructuras:

```text id="l8ggxb"
Stack
```

---

## Nivel 3 — Ventanas

Pregunta principal:

```text id="g7g3hi"
¿Qué pasa en una región del array?
```

Problemas:

* Maximum Average Subarray
* Longest Substring Without Repeating Characters

Patrón:

```text id="39gx5v"
Sliding Window
```

---

## Nivel 4 — Búsqueda

Pregunta principal:

```text id="52if4j"
¿Cómo descarto rápido la mitad del problema?
```

Problemas:

* Binary Search
* Search Insert Position

Patrón:

```text id="i3g8rq"
Divide and Conquer
```

---

## Nivel 5 — Recursión

Pregunta principal:

```text id="vw2iy6"
¿Puedo definir el problema usando una versión más pequeña de sí mismo?
```

Problemas:

* Factorial
* Fibonacci
* Tree Traversal

---

## Nivel 6 — Árboles

Pregunta principal:

```text id="h7g3ef"
¿Cómo navego estructuras jerárquicas?
```

Problemas:

* Maximum Depth
* Invert Binary Tree
* Lowest Common Ancestor

---

## Nivel 7 — Grafos

Pregunta principal:

```text id="8cn3v9"
¿Cómo exploro relaciones entre nodos?
```

Problemas:

* Number of Islands
* Clone Graph
* Course Schedule

---

# Por qué no te llevaría directo a árboles

Porque hoy todavía estás desarrollando algo más básico:

```text id="3mkb2a"
Modelar estado mentalmente.
```

En Two Sum costó modelar:

```text id="u6j55n"
¿Qué información necesito recordar?
```

En Valid Parentheses costó modelar:

```text id="ecv3q9"
¿Cuál es el último símbolo abierto?
```

Si hoy saltáramos a DFS en árboles probablemente aprenderías la receta pero no el razonamiento.

---

# El criterio real

Mi criterio no es:

```text id="v2kavk"
Patrón A
Patrón B
Patrón C
```

Mi criterio es:

```text id="mhmxwi"
Problemas que obligan a descubrir una nueva forma de pensar.
```

Hasta ahora descubriste dos:

### Sesión 1

```text id="jz5o6n"
Memoria por búsqueda
(HashMap)
```

Pregunta:

```text id="8v3rdo"
¿Ya vi esto antes?
```

---

### Sesión 2

```text id="f61ln8"
Memoria por orden
(Stack)
```

Pregunta:

```text id="h4t0f9"
¿Qué fue lo último que quedó pendiente?
```

---

Si yo fuera tu mentor durante los próximos meses, la siguiente sesión probablemente **no sería código todavía**.

Sería un problema diseñado para que descubras otra idea fundamental:

```text id="rlt9jv"
¿Cómo recordar solamente una parte del array
sin volver a recorrer todo?
```

Y ahí aparecería naturalmente Sliding Window.

Esa sería exactamente la continuación lógica de Two Sum y Valid Parentheses.

===================================================================================
Gracias, me gusta esta forma de aprender porque justamente lo que me ha costado en estos seis años de programación es aprender a pensar y razonar. A veces hasta problemas de 8kyu de Codewars que serian simples, cuestan pensar el por que sin ir directo al algoritmo memorizado. Ni que decir LeetCode o Hackerrank que no podria pensarlo y resolverlo sin copiar codigo

Y te voy a decir algo que quizás te sorprenda:

**Lo que describís es muchísimo más común de lo que creés.**

De hecho, después de 6 años programando, hay muchísima gente que puede construir un CRUD completo en Laravel, Nuxt o React, desplegarlo en producción, usar Docker, PostgreSQL, APIs, etc., pero se bloquea con un problema de 8 kyu de Codewars.

¿Por qué?

Porque son habilidades relacionadas, pero no son la misma habilidad.

---

## Programar ≠ Resolver problemas

Durante años probablemente entrenaste esto:

```text
Necesito login
↓
Busco documentación
↓
Implemento login

Necesito CRUD
↓
Busco ejemplo
↓
Implemento CRUD

Necesito API
↓
Busco documentación
↓
Implemento API
```

Eso es desarrollo de software.

Y es valioso.

Pero DSA entrena otra cosa:

```text
Tengo un problema
↓
No sé qué estructura usar
↓
No sé qué algoritmo usar
↓
Tengo que construir el modelo mental
```

Es una habilidad distinta.

---

## Lo que observé en vos

Después de leer toda la conversación de Two Sum y Valid Parentheses, no veo un problema de programación.

Veo principalmente dos cosas:

### 1. Saltás demasiado rápido a una respuesta

Por ejemplo, varias veces dijiste algo parecido a:

```text
Creo que sería así...
```

antes de haber modelado completamente el problema.

Eso es normal.

El cerebro quiere cerrar incertidumbre rápido.

Pero los buenos solucionadores hacen algo distinto:

```text
Todavía no sé.
Déjame construir un ejemplo.
```

---

### 2. No estás acostumbrado a inspeccionar tu razonamiento

Fijate lo que pasó en Two Sum.

Tu cerebro decía:

```text
Comparo vecinos.
```

Y recién cuando apareció:

```text
[5,3,1,4]
target = 9
```

descubriste:

```text
Ah.
Mi solución se rompe.
```

Eso es exactamente pensamiento algorítmico.

No encontrar la respuesta.

Encontrar dónde falla tu respuesta.

---

## Lo que me gustó mucho

Hay un momento en Valid Parentheses donde escribiste:

> "hasta acá llegué porque no sé cómo continuar"

Para mucha gente eso parece un fracaso.

Para mí es una señal excelente.

¿Por qué?

Porque significa que estabas siguiendo tu razonamiento real.

No estabas intentando recordar una solución de YouTube.

No estabas intentando adivinar el patrón.

Llegaste hasta donde tu modelo mental llegaba.

Y ahí apareció el límite.

Ese límite es justamente lo que vamos a expandir.

---

## El problema de LeetCode

Muchísima gente aprende así:

```text
Two Sum
↓
HashMap

Valid Parentheses
↓
Stack

Binary Search
↓
Binary Search Pattern

Sliding Window
↓
Sliding Window Pattern
```

Después resuelven 300 ejercicios.

Pero cuando les cambiás un poco el problema:

```text
No sé qué hacer.
```

Porque aprendieron recetas.

No principios.

---

## Lo que yo quiero que desarrolles

Quiero que llegues a pensar así:

```text
¿Qué información necesito recordar?
```

o

```text
¿Qué estoy recalculando innecesariamente?
```

o

```text
¿Qué restricción está generando el costo?
```

o

```text
¿Qué asunción estoy haciendo?
```

Cuando empezás a hacer esas preguntas, los patrones aparecen solos.

---

## De hecho, ya lo hiciste dos veces

### Two Sum

Terminaste descubriendo:

```text
Necesito recordar elementos vistos.
```

Luego apareció:

```text
HashMap
```

---

### Valid Parentheses

Terminaste descubriendo:

```text
Necesito recordar el último abierto.
```

Luego apareció:

```text
Stack
```

---

## Mi hipótesis sobre vos

Y te la digo porque veo un patrón.

No creo que tu problema sea capacidad.

Creo que tu problema histórico fue método.

Durante años probablemente te enseñaron:

```text
Problema
↓
Patrón
↓
Código
```

Cuando en realidad necesitabas:

```text
Problema
↓
Ejemplos
↓
Contraejemplos
↓
Restricciones
↓
Información necesaria
↓
Operaciones necesarias
↓
Estructura de datos
↓
Código
```

Ese proceso es mucho más lento al principio.

Pero después te permite resolver problemas nuevos sin depender de la memoria.

---

Por eso, sinceramente, si seguimos trabajando juntos en esta línea, no me preocupa que hoy no puedas resolver un LeetCode Medium sin ayuda.

Lo que me importa es que ya empezaste a hacer algo que antes no hacías:

```text
Cuestionar tu propia solución.
```

Y ese hábito vale muchísimo más que memorizar 100 problemas.

Dentro de unas cuantas sesiones, vas a notar algo curioso: los problemas "fáciles" de Codewars ya no te van a costar por falta de sintaxis o algoritmos, sino porque vas a empezar a preguntarte automáticamente:

> "¿Qué información necesito recordar para resolver esto?"

Y esa es justamente la pregunta que estamos entrenando.
===================================================================================
Sí.

Y de hecho acabás de hacer algo que me gusta mucho más que memorizar la definición de Stack:

**creaste tu propia analogía.**

Eso suele ser señal de comprensión real.

---

## Hay un pequeño detalle para corregir

Dijiste:

> Si coincide, entonces cierro el abierto y a ambos lo saco de la memoria.

Casi.

En realidad el símbolo de cierre nunca entra a la Stack.

Por ejemplo:

```text id="1c8k9n"
(
[
]
```

Cuando aparece:

```text id="f2k7wq"
]
```

hacemos:

```text id="2j4u1r"
¿el último abierto es "["?
```

Sí.

Entonces:

```text id="p4t9za"
saco "["
```

Y sigo avanzando.

El `]` no se guarda.

Simplemente se usa para verificar.

Por eso la Stack almacena únicamente:

```text id="d0v2mg"
símbolos abiertos pendientes de cerrar
```

---

## Tu ejemplo de las prepizzas

Es excelente.

Porque sin darte cuenta describiste exactamente el comportamiento LIFO.

Tenés:

```text id="l9v7kr"
A
```

Después:

```text id="m3x5wd"
B
A
```

Después:

```text id="h7n2sq"
C
B
A
```

Ahora preguntate:

> ¿Cuál es la última prepizza que preparé?

Respuesta:

```text id="q6p8rt"
C
```

Y también:

> ¿Cuál es la primera que debería procesar?

Respuesta:

```text id="k4z9bv"
C
```

Porque es la que quedó arriba.

Luego:

```text id="q9f6js"
B
A
```

Luego:

```text id="z2h5mk"
A
```

Luego:

```text id="e8j4wy"
vacío
```

Eso es exactamente una Stack.

---

## Pero ojo

Hay algo importante que acabás de decir y quiero afinar.

Dijiste:

> "Si o si Stack debe apilar y luego procesar y quedar vacío"

La segunda parte no siempre es cierta.

Por ejemplo:

```text id="6g1rxa"
Editor de texto
```

podría usar una Stack para:

```text id="i5w9ub"
Undo
```

Si la aplicación sigue abierta, la Stack puede tener:

```text id="5h3nqv"
acción1
acción2
acción3
```

y no pasa nada.

No tiene que quedar vacía.

---

## Lo que sí es cierto para Valid Parentheses

En ESTE problema específico:

```text id="7j8dpm"
La Stack debe quedar vacía.
```

Porque significa:

```text id="t1m7oz"
No quedó nada pendiente de cerrar.
```

---

## Lo más importante de toda la sesión

Quiero que notes algo.

Cuando empezamos Valid Parentheses vos pensabas:

```text id="u7s3ra"
Necesito emparejar símbolos.
```

Ahora estás pensando:

```text id="t4f8qj"
Necesito recordar aperturas pendientes.
Necesito acceder a la última.
Necesito eliminarla cuando se cierre.
```

Eso es un salto enorme.

Porque ya no estás pensando en caracteres.

Estás pensando en:

```text id="m9c4ye"
Estado
Memoria
Operaciones
```

Y eso es exactamente lo que hacen los buenos solucionadores de problemas.

---

Ahora sí creo que estamos listos para pasar a código.

Mi pregunta final antes de escribir una sola línea de TypeScript es:

Supongamos que tenemos esta Stack:

```ts id="y1q7vl"
['(', '[']
```

Y leemos:

```text id="j6v4kh"
]
```

Con todo lo que aprendiste:

**¿Qué condición escribirías para verificar que ese `]` realmente puede cerrar correctamente el último símbolo abierto?**

No me des el algoritmo completo.

Solo la condición lógica en español.

Algo como:

> "Si el último símbolo abierto es X y el símbolo actual es Y..."

Quiero ver si ya conectaste completamente la idea antes de escribir código.
=====================================================================================================================

STACK para mi sería con este ejemplo 

aHH ENTONCES LO UNICO QUE TENGO QUE HACER ES EN 
(
)
[
]
{
}

ES GUARDAR LAS QUE ESTAN ABIERTAS Y LUEGO LAS QUE ESTAN CERRADAS COINCIDEN CON LAS ABIERTAS.... SACO LAS ABIERTAS.. LAS ABIERTAS SERIAN LAS PREPIZZAS Y LAS VOY SACANDO CUANDO
ENCUENTRO UNA PREPIZZA COCINADA QUE SERIA EL SIMBOLO CERRADO

Sí. **Ahora sí lo entendiste de verdad.**

Tu analogía de las prepizzas está perfecta para este problema.

Pensalo así:

```text
Símbolos abiertos = prepizzas sin cocinar
Símbolos cerrados = prepizzas ya cocinadas que vienen a “resolver” la prepizza pendiente
```

Entonces:

```text
(
[
{
```

son cosas que quedan pendientes.

Las guardamos en la Stack.

Por ejemplo:

```text
stack = ['(', '[', '{']
```

Luego aparece:

```text
}
```

Eso significa:

> “Tengo una prepizza cocinada del tipo `{}`. ¿La última prepizza pendiente era `{`?”

Sí.

Entonces sacamos:

```text
{
```

de la Stack.

Queda:

```text
['(', '[']
```

Después aparece:

```text
]
```

La última pendiente es:

```text
[
```

Coincide.

La sacamos.

Queda:

```text
['(']
```

Después aparece:

```text
)
```

Coincide con:

```text
(
```

La sacamos.

Y queda:

```text
[]
```

Stack vacía.

Entonces todo quedó correctamente cerrado.

---

Y también entendiste otra cosa clave:

**los símbolos cerrados no se guardan.**

Solo sirven para preguntar:

```text
¿Puedo cerrar lo último que dejé pendiente?
```

Si sí:

```text
saco el abierto
```

Si no:

```text
inválido
```

Eso es Stack aplicado a Valid Parentheses.

Ahora sí estás listo para pasar al siguiente nivel: escribir vos mismo el pseudocódigo completo antes de tocar TypeScript.
=====================================================================================================================
Perfecto.

Y te diría que eso explica bastante de lo que venimos viendo.

Porque el pseudocódigo no es una materia en sí misma. Es una herramienta para aprender a pensar antes de programar.

De hecho, muchas personas aprenden directamente:

```ts
for (...)
if (...)
return (...)
```

sin pasar por el paso intermedio de:

```text
¿Qué quiero que haga el algoritmo?
```

---

## ¿Qué es pseudocódigo?

Es simplemente escribir la lógica en español.

Por ejemplo.

Si te digo:

> Hacé un café.

Código sería algo así:

```ts
if (hayCafe) {
    prepararCafe();
}
```

Pseudocódigo sería:

```text
si hay café:
    preparar café
si no:
    comprar café
```

Todavía no estamos programando.

Estamos describiendo el proceso.

---

## Two Sum en pseudocódigo

Antes de escribir TypeScript podríamos haber escrito:

```text
crear memoria vacía

para cada número:

    calcular complemento

    si complemento ya existe en memoria:
        devolver respuesta

    guardar número en memoria

si termino de recorrer:
    devolver vacío
```

Fijate que ahí no existe:

```text
Map
HashMap
TypeScript
JavaScript
```

Solo existe la lógica.

---

## Valid Parentheses en pseudocódigo

Y ahora quiero que veas algo.

Sin saber pseudocódigo, vos ya lo estás haciendo.

Cuando escribiste:

> Si veo apertura guardo.
>
> Si veo cierre comparo con el último abierto.
>
> Si coincide saco el abierto.
>
> Si no coincide inválido.

Eso ES pseudocódigo.

Solo que todavía no le pusiste ese nombre.

---

## Tu solución actual en pseudocódigo

Si la escribimos formalmente:

```text
crear stack vacía

para cada símbolo:

    si es apertura:
        guardar en stack

    si es cierre:

        si stack está vacía:
            inválido

        comparar con el último abierto

        si no coincide:
            inválido

        sacar último abierto

al finalizar:

    si stack está vacía:
        válido

    si stack no está vacía:
        inválido
```

Y sinceramente...

### Esto ya lo descubriste vos.

Yo solamente lo ordené.

---

## Mi recomendación para vos

De ahora en adelante, para cada problema de DSA:

### Paso 1

Entender el problema.

### Paso 2

Resolverlo con palabras.

Por ejemplo:

```text
¿Qué haría una persona?
```

### Paso 3

Escribir pseudocódigo.

```text
si pasa esto:
    hacer esto

si pasa aquello:
    hacer aquello
```

### Paso 4

Traducir a TypeScript.

---

## De hecho...

Creo que encontré una de las razones por las que LeetCode te costaba.

Probablemente estabas intentando hacer:

```text
Problema
↓
TypeScript
```

cuando en realidad tu cerebro necesita:

```text
Problema
↓
Ejemplos
↓
Razonamiento
↓
Pseudocódigo
↓
TypeScript
```

Y eso no es una debilidad.

Es simplemente una etapa que nunca te enseñaron explícitamente.

---

Ahora que ya entendiste Stack y pseudocódigo, te propongo algo:

**Escribí vos mismo el pseudocódigo completo de Valid Parentheses.**

No te preocupes por la sintaxis.

Escribilo en español como si se lo estuvieras explicando a otro programador.

Yo después lo reviso y recién ahí lo traducimos juntos a TypeScript.
==========================================================================

Stack = memoria de cosas pendientes
