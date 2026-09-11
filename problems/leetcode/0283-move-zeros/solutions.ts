/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    }
  }

  while (k < nums.length) {
    nums[k] = 0;
    k++;
  }
}

// Tenemos:
// nums = [0, 1, 0, 3, 12]
// Debemos modificar el mismo array para obtener:
// [1, 3, 12, 0, 0]

// k -> explorador
// i -> escritor

// k=0
// i = 0
// recorrer nums
// si nums[i] !==  0
// nums[k]=nums[i]
// k++
// mientras k sea diferente a la longitud de nums
// nums[k]=0
// nums++

