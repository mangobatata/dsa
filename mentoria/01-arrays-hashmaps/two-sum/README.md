# DSA — Sesión 01

## Problema: Two Sum

### Objetivo

Dado un array de números enteros y un número objetivo `target`, determinar si existen dos elementos distintos cuya suma sea exactamente igual a `target`.

Ejemplo:

```text
[2, 7, 11, 15]
target = 9

Resultado:
2 + 7 = 9
```

---

# Mi razonamiento inicial

Lo primero que pensé fue buscar si existía un número igual al `target`.

Después pensé en recorrer el array y sumar elementos de a dos hasta encontrar el resultado.

También observé que, si el array tuviera un millón de elementos, ese enfoque sería lento porque tendría que recorrer muchos elementos y realizar muchísimas sumas.

---

# Primer aprendizaje

El problema no pide encontrar un elemento igual a `target`.

El problema pide encontrar **dos elementos distintos** cuya suma sea igual a `target`.

Por lo tanto:

```text
Buscar si existe un número igual al target
≠
Resolver el problema
```

Ese chequeo inicial no aporta nada a la solución.

---

# Segundo aprendizaje

Mi siguiente idea fue comparar elementos consecutivos:

```text
2 + 7
7 + 11
11 + 15
```

Pero descubrí que eso falla.

Ejemplo:

```text
[5, 3, 1, 4]
target = 9
```

Comparando solo vecinos:

```text
5 + 3 = 8
3 + 1 = 4
1 + 4 = 5
```

Nunca encuentro:

```text
5 + 4 = 9
```

Porque no son adyacentes.

---

# Tercer aprendizaje

Para estar seguro de no perder ninguna combinación, necesito considerar todos los pares posibles.

Con 4 elementos:

```text
(a,b)
(a,c)
(a,d)
(b,c)
(b,d)
(c,d)
```

Total:

```text
6 pares
```

Con 5 elementos:

```text
(a,b)
(a,c)
(a,d)
(a,e)
(b,c)
(b,d)
(b,e)
(c,d)
(c,e)
(d,e)
```

Total:

```text
10 pares
```

Con 6 elementos:

```text
(a,b)
(a,c)
(a,d)
(a,e)
(a,f)

(b,c)
(b,d)
(b,e)
(b,f)

(c,d)
(c,e)
(c,f)

(d,e)
(d,f)

(e,f)
```

Total:

```text
15 pares
```

---

# Cuarto aprendizaje

Al observar los resultados:

```text
4 elementos -> 6 pares
5 elementos -> 10 pares
6 elementos -> 15 pares
```

Me di cuenta de que la cantidad de pares crece muy rápido.

Luego calculé:

```text
10 elementos -> 45 pares
20 elementos -> 190 pares
```

Y observé:

```text
190 / 45 = 4.22
```

Duplicar el tamaño del problema no duplicó el trabajo.

Lo multiplicó aproximadamente por cuatro.

---

# Concepto descubierto

Ese crecimiento se llama:

```text
O(n²)
```

o complejidad cuadrática.

La razón es que cada elemento debe compararse contra muchos otros elementos.

---

# El cambio de mentalidad

La pregunta clave fue:

> ¿Y si en lugar de volver a recorrer todos los elementos anteriores pudiera preguntar instantáneamente si un número ya apareció?

Ahí apareció una idea completamente distinta.

---

# La técnica del complemento

Ejemplo:

```text
nums = [2, 7, 11, 15]
target = 9
```

Estoy parado en:

```text
7
```

Entonces calculo:

```text
target - 7 = 2
```

La pregunta ya no es:

```text
¿Con qué números puedo sumar 7?
```

La pregunta pasa a ser:

```text
¿Ya vi un 2 antes?
```

Si la respuesta es sí:

```text
Encontré el par.
```

No necesito seguir comparando.

---

# Regla general

Para cada elemento:

```text
complemento = target - elemento_actual
```

Luego:

```text
¿El complemento ya apareció?
```

Si:

```text
Sí -> encontré el par
```

Si:

```text
No -> guardo el elemento actual y sigo
```

---

# Descubrimiento importante

Inicialmente pensé en guardar pares.

Después entendí que no necesito guardar pares.

Solo necesito guardar los números que ya vi.

Eso simplifica enormemente el problema.

---

# Solución final en TypeScript

```ts
function twoSum(nums: number[], target: number): number[] {

  const numMap: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {

    const complement = target - nums[i];

    if (complement in numMap) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }

  return [];
}
```

---

# Evaluación de la sesión

## Fortalezas detectadas

* Capacidad de corregir hipótesis incorrectas.
* Disposición para cuestionar la propia solución.
* Buena intuición inicial sobre eficiencia.
* Capacidad para llegar a una solución óptima mediante preguntas guiadas.

## Debilidades detectadas

* Tendencia a responder antes de modelar completamente el problema.
* Falta de precisión en conteos y análisis intermedios.
* Necesidad de verificar casos concretos antes de generalizar.

---

# Lección principal

La solución no surgió de memorizar un patrón.

La solución surgió de responder una pregunta:

```text
¿Qué información necesito recordar para evitar recorrer todo nuevamente?
```

Cuando la pregunta fue correcta, la estructura de datos apareció naturalmente.

---

# Para el ejercicio TWO SUM

Aaaaaaahhhhh ya entendí! La idea es solamente encontrar el PAR sin RECORRER TODO EL ARRAY. 
Entonces, si target - 7 es igual a 2, ahí ya encontre los dos pares que sumados dan el target 