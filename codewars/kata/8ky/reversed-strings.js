// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res; 
}


let res = solution("world");
console.log(res);
res = solution("hello");
console.log(res);
res = solution("");
console.log(res);
res = solution("h");
console.log(res);
