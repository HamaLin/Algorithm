let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

function quadrant(x, y) {
  if (x * y > 0) return x > 0 ? 1 : 3;
  return y > 0 ? 2 : 4;
}

console.log(quadrant(parseInt(input[0]), parseInt(input[1])));