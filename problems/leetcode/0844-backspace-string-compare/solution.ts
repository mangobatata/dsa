// "ab##c#d"
// https://leetcode.com/problems/backspace-string-compare/description/
function processString(s: string): string[] {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      stack.push(s[i]);
    }

    if (s[i] === "#" && stack.length > 0) {
      stack.pop();
    }
  }

  return stack;
}

function backspaceCompare(s: string, t: string): boolean {
  const resultS = processString(s);
  const resultT = processString(t);

  return resultS.join("") === resultT.join("");
}
