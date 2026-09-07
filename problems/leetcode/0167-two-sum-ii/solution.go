package main

func twoSum(numbers []int, target int) []int {
	i := 0
	j := len(numbers) - 1

	for i < j {
		sum := numbers[i] + numbers[j]

		if sum == target {
			return []int{i + 1, j + 1}
		}
		if sum > target {
			j--
		}
		if sum < target {
			i++
		}
	}

	return []int{}

}

// i = inicio
// j = final

// mientras i < j
//     suma = numbers[i] + numbers[j]

//     si suma == target
//         devolver índices

//     si suma > target
//         j--

//     si suma < target
//         i++
