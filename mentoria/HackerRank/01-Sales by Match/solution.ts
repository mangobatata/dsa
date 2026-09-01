// comprobar si el input está vacío

// crear memoria
// crear totalPares = 0

// recorrer input
//     verificar si el elemento existe en memoria

//     si existe
//         aumentar su contador en 1

//     si no existe
//         inicializar su contador en 1

// recorrer memoria
//     calcular cantidad de pares del color
//         parteEntera(cantidad / 2)

//     totalPares += cantidad de pares

// retornar totalPares

// https://www.hackerrank.com/challenges/sock-merchant/problem
function sockMerchant(n: number, ar: number[]): number {
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
