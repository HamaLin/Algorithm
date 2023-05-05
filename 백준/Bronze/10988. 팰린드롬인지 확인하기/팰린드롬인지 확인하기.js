let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

function ask(arr) {
  let result = 1;

  for (let i = 0; i < parseInt(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      result = 0;
      break;
    }
  }

  return result;
}

console.log(ask(input));