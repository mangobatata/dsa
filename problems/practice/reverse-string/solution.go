package main

import "fmt"

func ag(s string) string {
	c := []rune(s)
	var wiwi []rune

	for i := len(s) - 1; i >= 0; i-- {
		wiwi = append(wiwi, c[i])
	}
	return string(wiwi)
}

func main() {
	text := "Hello, World!"
	fmt.Println(ag(text))
}
