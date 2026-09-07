const text = "hello world";

function algo(s) {
  let wiwi = [];
  for (let i = s.length - 1; i >= 0; i--) {
    wiwi.push(s[i]);
  }
  return wiwi.join("");
}

console.log(algo(text));
