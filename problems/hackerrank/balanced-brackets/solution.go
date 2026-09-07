package main

import "fmt"

// crear stack vacío

// recorrer el input
//     si el símbolo es de apertura
//         guardarlo en stack

//     si el símbolo es de cierre
//         si stack está vacío
//             devolver NO

//         si el último abierto NO corresponde con el cierre
//             devolver NO

//         si corresponde
//             eliminar el último abierto del stack
//             continuar recorriendo

// al terminar el recorrido
//     si stack está vacío
//         devolver YES
//     si no
//         devolver NO

func isBalanced(s string) string {
	stack := []string{}

	for i := 0; i < len(s); i++ {
		if s[i] == '{' || s[i] == '[' || s[i] == '(' {
			stack = append(stack, string(s[i]))
		} else {
			if len(stack) == 0 {
				return "NO"
			}

			last := stack[len(stack)-1]
			if last == "{" && s[i] == '}' {
				stack = stack[:len(stack)-1]
			} else if last == "[" && s[i] == ']' {
				stack = stack[:len(stack)-1]
			} else if last == "(" && s[i] == ')' {
				stack = stack[:len(stack)-1]
			} else {
				return "NO"
			}
		}
	}

	if len(stack) == 0 {
		return "YES"
	}
	return "NO"
}

func main() {
	a := "{[()]}"
	fmt.Println(isBalanced(a))

	b := "{[(])}"
	fmt.Println(isBalanced(b))

	c := "{{[[(())]]}}"
	fmt.Println(isBalanced(c))
}
