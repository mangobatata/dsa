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

function containsDuplicate(nums: number[]) {
  const counts: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] in counts)) {
      counts[nums[i]] = 1;
    } else {
      counts[nums[i]] += 1;
    }

    if (counts[nums[i]] > 1) {
      return true;
    }
  }
  return false;
}
