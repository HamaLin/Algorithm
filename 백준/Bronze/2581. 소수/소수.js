const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let decimals = [];

for (let i = input[0]; i <= input[1]; i++) {
  let isDecimal = true;
  for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
    if (i % j === 0) {
      isDecimal = false;
      break;
    }
  }
  if (isDecimal && i !== 1) decimals.push(i);
}

console.log(
  decimals.length
    ? `${decimals.reduce((sum, cur) => sum + cur)}\n${decimals[0]}`
    : -1
);