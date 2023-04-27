let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

function starPyramid(num) {
  let result = "";

  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) result += "*";

    result += "\n";
  }

  return result;
}

console.log(starPyramid(parseInt(input)));