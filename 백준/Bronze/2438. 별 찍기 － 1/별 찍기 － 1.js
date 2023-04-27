let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

function starPyramid(num) {
  let result = "";
  let count = 0;

  for (let i = 0; i < num * num; i++) {
    if (Number.isInteger(i / num)) {
      result += i > 0 ? "\n" : "";
      count = i / num + 1;
    }

    if (count) {
      result += "*";
      count--;
    }
  }

  return result;
}

console.log(starPyramid(parseInt(input)));