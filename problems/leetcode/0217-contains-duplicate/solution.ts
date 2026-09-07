// function containsDuplicate(nums: number[]): boolean {
//   const hashMap: { [key: number]: boolean } = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] in hashMap) {
//       return true;
//     }

//     hashMap[nums[i]] = true;
//   }

//   return false;
// }

function containsDuplicate(nums: number[]): boolean {
  const counts: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in counts) {
      counts[nums[i]] += 1;
    } else {
      counts[nums[i]] = 1;
    }

    if (counts[nums[i]] > 1) {
      return true;
    }
  }

  return false;
}
// 29 minutos, 12 segundos
// O(n)
// Porque:
// n elementos    → ~n iteraciones
// 2n elementos   → ~2n iteraciones
// 3n elementos   → ~3n iteraciones
// El tiempo crece linealmente con el tamaño de la entrada.

// Tiempo:  O(n)
// Espacio: O(n)
