let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function matchedIntegerCount(arr) {
  let integerArr = arr.map((data) => +data);

  // Math 매서드 없이
  // let max = -10e5;
  // let min = 10e5;

  // arr.forEach((element) => {
  //   if (+element < min) min = element;
  //   if (+element > max) max = element;
  // });

  return `${Math.min(...integerArr)} ${Math.max(...integerArr)}`;
}

console.log(matchedIntegerCount(input[1].split(" ")));