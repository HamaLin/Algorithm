let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function matchedIntegerCount(arr) {
  let result = {
    max: 0,
    index: 0,
  };

  arr.forEach((element, index) => {
    if (+element > result.max) result = { max: element, index: index + 1 };
  });

  return `${result.max} ${result.index}`;
}

console.log(matchedIntegerCount(input));