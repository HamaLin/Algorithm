let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function matchedIntegerCount(total, arr, findInt) {
  let result = 0;

  arr.forEach((element) => {
    if (+element === +findInt) result++;
  });

  return result;
}

console.log(
  matchedIntegerCount(parseInt(input[0]), input[1].split(" "), input[2])
);
