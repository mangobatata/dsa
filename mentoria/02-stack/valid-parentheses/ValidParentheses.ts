// GUARDAR   → push()
// MIRAR     → stack[stack.length - 1]
// ELIMINAR  → pop()
// Creo una Stack vacía. Recorro cada símbolo del string. Si el símbolo es (, lo guardo en la Stack.
function validParentheses(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const lastOpen = stack[stack.length - 1];

    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    }

    if (s[i] === ")" && lastOpen !== "(") {
      return false;
    } else if (s[i] === ")" && lastOpen === "(") {
      stack.pop();
    }

    if (s[i] === "]" && lastOpen !== "[") {
      return false;
    } else if (s[i] === "]" && lastOpen === "[") {
      stack.pop();
    }

    if (s[i] === "}" && lastOpen !== "{") {
      return false;
    } else if (s[i] === "}" && lastOpen === "{") {
      stack.pop();
    }
  }

  return stack.length === 0;
}

const s = "{[()]}";
console.log(validParentheses(s))
