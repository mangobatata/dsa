Vas bastante bien. La estructura general está correcta, pero tenés un bug lógico importante en este bloque:

for (const value in memo) {
  if (memo[value] % 2 === 0) {
    totalPares += Math.floor(memo[value] / 2);
  }
}

Ese if hace que solo cuentes colores cuya cantidad sea par.

Pero mirá este caso:

color 1 → 3 medias

Con tu condición:

3 % 2 === 0 // false

Entonces no sumás nada.

Pero en realidad:

3 medias → 1 par + 1 sobrante

O sea, deberías sumar:

Math.floor(3 / 2) = 1

Por eso, no necesitás comprobar % 2 === 0.

Tu idea debería ser simplemente:

totalPares += Math.floor(memo[value] / 2);

Hay otro detalle para pensar: si el array viene vacío, pusiste:

return -1;

Pero si tenemos:

[]

¿cuántos pares de medias existen realmente?

¿-1 o 0?

Corregí esas dos cosas vos mismo y pasame la función otra vez.

function sockMerchant(ar: number*[]*): number {

  if (ar.length <= 0) {

    return 0;

  }

  const memo: { [key: number*]*: number } = {};

  let totalPares = 0;

  for (let i = 0; i < ar.length; i++) {

    if (ar[i] in memo) {

      memo[ar[i]] += 1;

    } else {

      memo[ar[i]] = 1;

    }

  }

  for (const value in memo) {

    totalPares += Math.floor(memo[value] / 2);

  }

  return totalPares;

}

Sí, ahora está bien resuelto. ✅

Tu solución ya hace correctamente las tres cosas necesarias:

function sockMerchant(ar: number[]): number {
  if (ar.length <= 0) {
    return 0;
  }

  const memo: { [key: number]: number } = {};
  let totalPares = 0;

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] in memo) {
      memo[ar[i]] += 1;
    } else {
      memo[ar[i]] = 1;
    }
  }

  for (const value in memo) {
    totalPares += Math.floor(memo[value] / 2);
  }

  return totalPares;
}

La idea quedó:

1. Contar cuántas medias hay de cada color.
2. Por cada color, calcular pares completos con floor(cantidad / 2).
3. Acumular todos esos pares.
4. Devolver el total.