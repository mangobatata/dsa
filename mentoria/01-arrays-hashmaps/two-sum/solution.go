package main

func twoSum(nums []int, target int) []int {
	hashMap := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		complement := target - nums[i]
		if idx, exists := hashMap[complement]; exists {
			return []int{idx, i}
		}
	}
	return nil
}
