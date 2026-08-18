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

