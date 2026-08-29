/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];

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
