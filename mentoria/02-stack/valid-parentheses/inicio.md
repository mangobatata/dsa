Perfecto. Siguiendo el método que definimos, no voy a enseñarte primero qué es una Stack.

Vamos a hacer exactamente lo que hicimos con Two Sum:

1. Entender el problema.
2. Encontrar una solución ingenua.
3. Romperla.
4. Descubrir qué información necesitamos recordar.
5. Dejar que la estructura de datos aparezca sola.

---

# DSA Sesión 02 — Valid Parentheses

Tenés un string que contiene únicamente:

```text
(
)
[
]
{
}
```

Y tenés que determinar si está correctamente balanceado.

Ejemplos válidos:

```text
()
[]

{}
([])

{[]}
```

Ejemplos inválidos:

```text
(
)

([)]

((

{]
```

---

## No quiero código todavía

Quiero que hagas exactamente lo mismo que en Two Sum.

Respondeme estas preguntas:

### Pregunta 1

Sin pensar en eficiencia.

¿Cómo lo resolverías "a mano"?

Imaginá que alguien te da:

```text
([]){}
```

y te pide verificar si está bien.

¿Qué mirarías?

¿Qué pasos harías?

Explicalo como si se lo contaras a una persona que no programa.

---

### Pregunta 2

Ahora probá tu método con este caso:

```text
([)]
```

Fijate que:

```text
(
)
[
]
```

todos tienen pareja.

Pero el resultado es incorrecto.

¿Por qué?

¿Qué está fallando exactamente?

---

### Pregunta 3

Compará estos dos casos:

```text
([])

([)]
```

Tienen exactamente los mismos caracteres.

La única diferencia es el orden.

¿Qué información necesitás recordar mientras avanzás de izquierda a derecha para poder detectar que uno es válido y el otro no?

---

## Pensamiento adverso

Antes de responder, aplicá la misma regla que descubrimos en Two Sum:

```text
No respondas rápido.
Construí un ejemplo.
Intentá romper tu propia solución.
```

Porque sospecho que vas a encontrar un detalle interesante:

No alcanza con saber que existe un "(".

La pregunta importante es:

```text
¿Cuál fue el ÚLTIMO paréntesis que quedó sin cerrar?
```

Pero no te adelantes.

Quiero que llegues vos mismo.

---

### Tu tarea

Respondeme únicamente:

1. Cómo lo resolverías a mano.
2. Qué pasa en `([)]`.
3. Qué información creés que deberías recordar mientras recorrés el string.

No escribas código todavía.

Cuando respondas, voy a actuar exactamente como el mentor del ejercicio anterior: te voy a cuestionar cada supuesto hasta que descubras por qué aparece naturalmente una **Stack** sin que yo te la nombre primero.

Y una observación importante: en Two Sum tardaste bastante en llegar a la solución, pero una vez que entendiste el problema terminaste escribiendo una solución O(n) prácticamente correcta. Eso es una buena señal. Ahora vamos a entrenar algo distinto: no recordar información arbitraria, sino recordar información en el orden correcto. ∎
