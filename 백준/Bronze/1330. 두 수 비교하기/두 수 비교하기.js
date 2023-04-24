let input = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(" ");

function comparison(a, b) {
  if (a > b) return ">";
  if (a < b) return "<";
  else return "==";
}

console.log(comparison(parseInt(input[0]), parseInt(input[1])));