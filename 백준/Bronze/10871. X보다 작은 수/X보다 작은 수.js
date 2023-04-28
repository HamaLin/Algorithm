let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function matchedIntegerCount(findInt, arr) {
  let result = "";

  arr.forEach((element) => {
    if (+element < +findInt) result += `${element} `;
  });

  return result;
}

console.log(matchedIntegerCount(input[0].split(" ")[1], input[1].split(" ")));
