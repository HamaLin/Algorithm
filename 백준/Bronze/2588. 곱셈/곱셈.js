let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num1 = parseInt(input[0]);
let num2 = parseInt(input[1]);

console.log(num1 * (num2 % 10));
console.log(num1 * parseInt((num2 % 100) / 10));
console.log(num1 * parseInt(num2 / 100));
console.log(num1 * num2);