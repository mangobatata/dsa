Ahora haría algo deliberado: **no aprender una estructura nueva todavía**.

Ya descubriste:

- **HashMap** con Two Sum → recordar algo visto y encontrarlo rápido.
- **Stack** con Valid Parentheses → guardar pendientes y resolver primero el último.
- En ambos llegaste a soluciones **O(n)**.

El siguiente entrenamiento debería comprobar si realmente podés **reconocer Stack sin que yo te diga “esto es Stack”**.

### Ejercicio 3 — Backspace String Compare

Tenés dos strings donde `#` significa **borrar el último carácter escrito**.

Ejemplos:

```text
s = "ab#c"
t = "ad#c"
```

Procesando `s`:

```text
a → "a"
b → "ab"
# → borra b → "a"
c → "ac"
```

Procesando `t`:

```text
a → "a"
d → "ad"
# → borra d → "a"
c → "ac"
```

Al final:

```text
"ac" === "ac"
→ true
```

Otro:

```text
s = "a#c"
t = "b"
```

queda:

```text
"c" !== "b"
→ false
```

Y ojo con este:

```text
s = "a##"
```

El primer `#` borra `a`. El segundo encuentra que ya no hay nada que borrar.

No te voy a decir qué estructura usar.

Quiero que hagamos lo mismo que hicimos con Two Sum y Valid Parentheses: **problema → razonamiento → necesidad de memoria → estructura → pseudocódigo → código**.

Tu primera pregunta es solamente esta:

> Mientras recorrés `"ab#c"`, ¿qué información necesitás recordar para poder ejecutar correctamente el `#` cuando aparezca?

No pienses todavía en `push`, `pop`, arrays ni código. Explicámelo como si el programa fuera una persona.

### Mi respuesta

Necesito recordar que cuando aparece # el último caracter que se guardo se debe eliminar

### Mentor

Correcto. Y fijate en las palabras que acabás de usar:

> **“el último carácter que se guardó se debe eliminar”**

Eso ya nos da una pista enorme.

Tenemos:

```text
Input: "ab#c"
```

Procesamos:

```text
a → guardo a
b → guardo b

Memoria:
[a, b]
    ↑
  último

# → necesito eliminar EL ÚLTIMO guardado
```

Después:

```text
[a]
```

y seguimos:

```text
c → guardo c

[a, c]
```

Ahora conectalo con lo que acabamos de aprender en Valid Parentheses:

```text
entra un elemento → lo guardo
necesito eliminar → elimino el último que entró
```

Pero **no quiero que me digas todavía el nombre de la estructura**.

Quiero probar algo un poquito más difícil:

```text
Input: "abc##d"
```

Recorrelo mentalmente carácter por carácter y decime **cómo va quedando tu memoria** después de:

```text
a
b
c
#
#
d
```

Ahí veremos si reconociste el patrón por vos mismo.

### Mi respuesta

Input: "abc##d"

a -> guardo
b -> guardo
c -> guardo

# -> borro c

queda ab#d

a -> sigue
b -> sigue

# -> borro b

queda [a,d]

### Mentor

Sí, llegaste al resultado correcto: al final queda:

```text
[a, d]
```

Solo ajustemos el recorrido, porque ahí se te mezcló un poco el orden. No volvemos a recorrer `a` y `b`; seguimos desde donde estamos.

```text
Input: "abc##d"

a → guardo      → [a]
b → guardo      → [a, b]
c → guardo      → [a, b, c]

# → elimino c   → [a, b]

# → elimino b   → [a]

d → guardo      → [a, d]
```

Y ahora fijate en el patrón que vos mismo describiste:

```text
carácter normal → guardar

# → eliminar EL ÚLTIMO guardado
```

La memoria funciona así:

```text
[a]
[a, b]
[a, b, c]
        ↑
      último

elimino último
```

Ahora sí te pregunto:

¿Esto te recuerda a alguna estructura que acabamos de aprender?

Pensá en esta frase:

> **“El último que entra es el primero que sale.”**

### Mi respuesta

Esto es Stack, el último que entra es el primero que sale

### Mentor

Sí. **Lo reconociste vos solo**, y eso es exactamente lo que queríamos comprobar.

La señal fue esta:

```text
carácter normal → guardar
# → eliminar el último guardado
```

Eso encaja con:

```text
Stack → LIFO
Last In, First Out
```

Ahora quiero subir apenas la dificultad.

Tenemos:

```text
s = "ab#c"
t = "ad#c"
```

Sabemos que podemos procesar cada string con una Stack y obtener:

```text
s → [a, c]
t → [a, c]
```

Entonces la pregunta ahora es:

> Una vez procesados ambos strings, ¿qué tendrías que comparar para decidir si el resultado es `true` o `false`?

Respondeme con tus palabras, sin código todavía.

### Mi respuesta

Necesito comparar los elementos del primer array con los elementos del segundo array

### Mentor

Correcto. Una vez que procesamos ambos strings, tenemos dos resultados finales:

```text
s = "ab#c" → [a, c]
t = "ad#c" → [a, c]
```

Ahora necesitamos comprobar:

```text
¿resultado de s == resultado de t?
```

Si contienen exactamente los mismos caracteres **en el mismo orden**:

```text
[a, c]
[a, c]

→ true
```

Si no:

```text
[a, c]
[b, c]

→ false
```

### Ahora pensemos en el algoritmo completo

Vos ya descubriste:

```text
Para cada string:

    carácter normal
        → guardar

    aparece #
        → eliminar el último guardado
```

Después:

```text
comparar resultado de s
con resultado de t
```

Ahora viene una situación importante:

```text
s = "###a"
```

Empezamos:

```text
memoria = []

# → ???
```

Apareció `#`, pero **no hay ningún carácter guardado para eliminar**.

¿Qué debería hacer nuestro algoritmo en ese caso?

¿Intentar eliminar igualmente, devolver error, ignorar ese `#`, u otra cosa?

Pensalo desde el significado del problema, no desde cómo funciona `pop()`.

### Mi respuesta

si aparece eso no hay nada para eliminar entonces podriamos llegar a finalizar el algoritmo

### Mentor

Acá hay un matiz importante: **no conviene finalizar todo el algoritmo**.

Porque mirá:

```text
s = "###a"
```

Los primeros `#` no tienen nada que borrar, así que simplemente **no hacen nada**.

Después llega:

```text
a
```

y ese sí debe quedar guardado.

Entonces el procesamiento sería:

```text
[]   # → no hay nada, sigo
[]   # → no hay nada, sigo
[]   # → no hay nada, sigo
[a]  a → guardo
```

Resultado final:

```text
[a]
```

La regla correcta sería:

```text
si aparece "#":
    si la Stack tiene elementos:
        eliminar el último
    si la Stack está vacía:
        no eliminar nada y continuar
```

Fijate en la diferencia:

```text
"###a"
```

Si finalizáramos en el primer `#`, nunca llegaríamos a procesar la `a`.

Ahora te toca una parte interesante:

```text
s = "ab##c#d"
```

Procesalo vos usando la Stack y decime cómo va quedando después de cada carácter.

### Mi respuesta

s = "ab##c#d"

a -> guardo [a]
b -> guardo [b]

# -> b elimino

# -> a elimino

c -> guardo [c]

# -> elimino c

d -> guardo [d]

### Mentor

Correcto. Solo una pequeña corrección de representación: cuando guardás `b`, la Stack no pasa de `[a]` a `[b]`; `b` se agrega encima de `a`.

El recorrido completo es:

```text
s = "ab##c#d"

a → guardo      → [a]
b → guardo      → [a, b]

# → elimino b   → [a]
# → elimino a   → []

c → guardo      → [c]
# → elimino c   → []

d → guardo      → [d]
```

Resultado:

```text
[d]
```

Pero tu razonamiento de qué elemento eliminar fue correcto: siempre eliminaste **el último que había entrado**.

Ahora creo que ya podemos pasar del razonamiento al **pseudocódigo**, como hicimos con Valid Parentheses.

Intentá escribir con tus palabras un algoritmo para **procesar un solo string**:

```text
"ab##c#d"
```

Usá solamente ideas como:

```text
crear memoria
recorrer string

si carácter es normal:
    ...

si carácter es "#":
    ...

al terminar:
    ...
```

No pienses todavía en Python/TypeScript ni en `push/pop`. Quiero ver si podés construir el pseudocódigo prácticamente solo esta vez.

### Mi respuesta

crear memoria
recorrer string

si carácter es normal:
guardo el carácter en un array

si carácter es "#":
voy a borrar el ultimo caracter guardo en el array

al terminar:
devuelvo el array con elementos o vacio

### Mentor

Muy bien. Tu pseudocódigo ya tiene la estructura correcta. Hay **un solo agujero lógico** que quiero que detectemos antes de escribir código.

Tenés:

```text
crear memoria
recorrer string

si carácter es normal:
    guardo el carácter en un array

si carácter es "#":
    borro el último carácter guardado

al terminar:
    devuelvo el array
```

Pero recordá este caso:

```text
s = "##a"
```

Empezamos:

```text
memoria = []

primer carácter = "#"
```

Tu pseudocódigo dice:

```text
borro el último carácter guardado
```

pero:

```text
[]
↑
no existe último carácter
```

Así que necesitamos agregar la condición que descubrimos anteriormente:

```text
si carácter es "#":
    si hay elementos guardados:
        borrar el último
    si no hay elementos:
        continuar
```

Con eso, tu pseudocódigo para **procesar un string** queda completo.

Ahora quiero que vos lo lleves a código. Elegí **Python o TypeScript** —el que prefieras— e intentá escribir una función que reciba:

```text
"ab##c#d"
```

y devuelva:

```text
["d"]
```

Recordatorio mínimo de Stack, por si elegís Python:

```python
stack = []
stack.append(...)
stack.pop()
```

No te doy más estructura. Quiero ver cuánto podés traducir solo esta vez.

### Mi respuesta sería

```
crear memoria
recorrer string

si carácter es normal:
    guardo el carácter en un array

si carácter es "#":
    si hay elementos guardados:
        borrar el último
    si no hay elementos:
        continuar

al terminar:
    devuelvo el array con elementos o vacio
```

```ts
// "ab##c#d"
function backspaceStringCompare(s: string) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      stack.push(s[i]);
    }

    if (s[i] === "#" && stack.length > 0) {
      stack.pop();
    }
  }

  return stack;
}
```
### Mentor 

Sí, esta función está bien para procesar un solo string y aplicar los # como backspace.

Con:

backspaceStringCompare("ab##c#d")

la Stack evoluciona así:

a → [a]
b → [a, b]
# → [a]
# → []
c → [c]
# → []
d → [d]

y devolvés:

["d"]

fijate en algo importante: esta vez prácticamente construiste vos solo el algoritmo:

normal → push
# con elementos → pop
# sin elementos → no hacer nada

Eso confirma que ya estás reconociendo Stack, no solamente repitiendo Valid Parentheses.

Ahora falta la segunda mitad del ejercicio original.

Tenemos:

s = "ab#c"
t = "ad#c"

Tu función ya sabe transformar cada uno:

s → ["a", "c"]
t → ["a", "c"]

Entonces pensá vos el siguiente diseño:

¿Harías una Stack para s y otra Stack para t, o reutilizarías una función que procese cualquier string y luego compararías ambos resultados?

No escribas código todavía. Decime cuál de esas dos formas te parece más ordenada y por qué.

### Mi respuesta
haria una funcion que procese cualquier string y lugo comparo con ambos result


### Mentor

Sí, esa es la forma más ordenada.

Tu idea sería:

```text
función procesar(string):
    aplica la lógica de #
    devuelve el resultado final
```

Después:

```text
resultadoS = procesar(s)
resultadoT = procesar(t)

comparar resultadoS con resultadoT
```

Eso evita duplicar lógica y separa bien responsabilidades.

Ahora viene un detalle importante de JavaScript/TypeScript: si tu función devuelve arrays como:

```ts
["a", "c"]
```

y comparás:

```ts
["a", "c"] === ["a", "c"]
```

eso da `false`, porque los arrays se comparan por referencia, no por contenido.

Entonces la siguiente pregunta es:

> ¿Cómo convertirías ambos arrays a algo que sí podamos comparar fácilmente por valor?

Pista: podrías transformar:

```text
["a", "c"]
```

en:

```text
"ac"
```

¿Qué método de JavaScript conocés para unir los elementos de un array en un string?


### Mi respuesta



### Mentor