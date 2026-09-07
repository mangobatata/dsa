package main

func hasPairWithSum(nums []int, target int) bool {
	i := 0
	j := len(nums) - 1

	for i < j {
		sum := nums[i] + nums[j]

		if sum == target {
			return true
		}

		if sum > target {
			j--
		}

		if sum < target {
			i++
		}
	}

	return false
}
