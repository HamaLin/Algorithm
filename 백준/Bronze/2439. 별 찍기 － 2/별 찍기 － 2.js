let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function starPyramid(num) {
  let result = "";

  for (let i = 1; i <= num; i++) {
    for (let j = num; j > 0; j--) result += i >= j ? "*" : " ";

    result += "\n";
  }

  return result;
}

console.log(starPyramid(parseInt(input)));