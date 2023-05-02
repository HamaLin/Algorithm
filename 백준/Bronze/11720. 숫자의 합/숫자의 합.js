let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function ask(arr) {
  const newArr = [...arr[1]].map(Number);
  let result = 0;

  for (let i = 0; i < newArr.length; i++) {
    result += newArr[i];
  }

  return result;
}

console.log(ask(input));