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

// 1 → primero → lo acepto
// 1 → igual al anterior → duplicado
// 2 → diferente → lo acepto
// 2 → igual al anterior → duplicado
// 3 → diferente → lo acepto

// k empieza en 1
// i recorre desde 1
// comparar nums[i] con nums[k - 1]
// si es nuevo:
//     copiarlo en nums[k]
//     avanzar k
// al terminar:
//     devolver k
