let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function ask(arr) {
  const origin = [1, 1, 2, 2, 2, 8];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(origin[i] - +arr[i]);
  }

  return result.join(" ");
}

console.log(ask(input));