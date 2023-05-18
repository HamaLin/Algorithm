let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const A = Number(input[0]);
const B = Number(input[1]);
const V = Number(input[2]);

console.log(Math.ceil((V - A) / (A - B) + 1));