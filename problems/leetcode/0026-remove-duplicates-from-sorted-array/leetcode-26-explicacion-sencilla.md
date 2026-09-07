# LeetCode 26 — Quitar duplicados de un array ordenado

## La misión

Imaginá que tenemos una fila de fichas con números:

```text
[1, 1, 2, 2, 3]
```

Queremos que, al principio de la fila, quede **una sola ficha de cada número**:

```text
[1, 2, 3, ...]
```

Los puntos `...` significan que no nos importa qué queda después. Solo importan los primeros números únicos.

La función también debe decir cuántos números únicos quedaron. En este caso:

```text
return 3
```

## Las reglas

No podemos crear otra fila de fichas y tampoco podemos usar un `Set`.

Tenemos que acomodar las fichas dentro del mismo array. Eso es trabajar **in-place**.

## Nuestros dos ayudantes

Usaremos dos punteros. Podemos imaginarlos como dos personajes:

```text
i → el explorador
k → el escritor
```

- `i` mira cada ficha para descubrir si tiene un número nuevo.
- `k` señala el lugar donde debe escribirse el próximo número único.

## ¿Por qué podemos reconocer los duplicados fácilmente?

El array está ordenado:

```text
[1, 1, 2, 2, 3]
```

Por eso, los números iguales están juntos.

```text
1 y 1 → juntos
2 y 2 → juntos
3       → solo
```

No necesitamos recordar todos los números. Solo comparamos el número que mira `i` con el último número único que ya guardamos.

## ¿Dónde comienzan los punteros?

El primer número siempre se acepta, porque todavía no hay otro con el cual compararlo:

```text
[1, 1, 2, 2, 3]
 ↑
 primer número único
```

La posición `0` ya está ocupada. La próxima posición disponible es la `1`:

```text
k = 1
```

Como el primer número ya fue aceptado, el explorador también empieza mirando la posición `1`:

```text
i = 1
```

## El recorrido paso a paso

Empezamos así:

```text
nums = [1, 1, 2, 2, 3]
k = 1
i = 1
```

### Paso 1: el explorador mira el segundo `1`

```text
[1, 1, 2, 2, 3]
    ↑
    i
```

El último número único está justo antes de `k`, en `k - 1`:

```text
nums[i]     = 1
nums[k - 1] = 1
```

Son iguales, así que el número está repetido.

No escribimos nada y `k` se queda quieto.

### Paso 2: el explorador mira el primer `2`

```text
[1, 1, 2, 2, 3]
       ↑
       i
```

Comparamos:

```text
nums[i]     = 2
nums[k - 1] = 1
```

Son diferentes. Encontramos un número nuevo.

El escritor copia ese `2` en la posición indicada por `k`:

```ts
nums[k] = nums[i];
```

El array queda así:

```text
[1, 2, 2, 2, 3]
```

Como la posición de `k` ya fue ocupada, `k` avanza:

```ts
k++;
```

Ahora `k` vale `2`.

### Paso 3: el explorador mira el segundo `2`

Comparamos el número actual con el último número único:

```text
nums[i]     = 2
nums[k - 1] = 2
```

Son iguales. Es un duplicado.

No escribimos nada y `k` se queda quieto.

### Paso 4: el explorador mira el `3`

Comparamos:

```text
nums[i]     = 3
nums[k - 1] = 2
```

Son diferentes. El `3` es nuevo.

Lo copiamos en la posición de `k` y luego hacemos avanzar a `k`:

```ts
nums[k] = nums[i];
k++;
```

La parte importante del array queda así:

```text
[1, 2, 3, ...]
```

Y ahora:

```text
k = 3
```

Eso significa que encontramos tres números únicos.

## La idea más importante

```text
Si encontramos un duplicado:
    k se queda quieto

Si encontramos un número nuevo:
    lo copiamos en nums[k]
    k avanza
```

`k` tiene dos significados útiles:

1. Indica dónde escribir el próximo número único.
2. Al final, indica cuántos números únicos encontramos.

## El código que construimos

```ts
function removeDuplicates(nums: number[]): number {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
```

## Traducción del código a palabras

```text
El primer número ya cuenta como único.

Recorro los demás números.

Si el número actual es diferente del último único:
    lo coloco en la próxima posición disponible
    avanzo esa posición

Al terminar, devuelvo la cantidad de números únicos.
```

## Complejidad

### Tiempo: `O(n)`

El explorador recorre el array una sola vez.

### Espacio extra: `O(1)`

Solo usamos los punteros `i` y `k`. No creamos otro array ni un `Set`.

## Qué recordar

```text
i explora.
k escribe.
k - 1 señala el último número único.
Un duplicado no mueve k.
Un número nuevo se escribe y hace avanzar k.
Al final, k es la respuesta.
```
