function hasPairWithSum(nums: number[], target: number): boolean {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const sum = nums[i] + nums[j];

    if (sum === target) {
      return true;
    }

    if (sum > target) {
      j--;
    }

    if (sum < target) {
      i++;
    }
  }
  return false;
}

console.log(hasPairWithSum([1, 3, 4, 7, 10], 11)); // true
console.log(hasPairWithSum([1, 3, 4, 7, 10], 20)); // false
console.log(hasPairWithSum([2, 2, 3, 5], 4)); // true)
