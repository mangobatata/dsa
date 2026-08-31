package main

func isValid(s string) bool {
	var stack []rune

	for _, char := range s {
		var lastOpen rune
		if len(stack) > 0 {
			lastOpen = stack[len(stack)-1]
		}

		if char == '(' || char == '[' || char == '{' {
			stack = append(stack, char)
		}

		if char == ')' && lastOpen != '(' {
			return false
		} else if char == ')' && lastOpen == '(' {
			stack = stack[:len(stack)-1]
		}

		if char == ']' && lastOpen != '[' {
			return false
		} else if char == ']' && lastOpen == '[' {
			stack = stack[:len(stack)-1]
		}

		if char == '}' && lastOpen != '{' {
			return false
		} else if char == '}' && lastOpen == '{' {
			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}
