let input = require("fs").readFileSync('/dev/stdin').toString().trim();

function rank(a) {
  if (a >= 90) return "A";
  if (a >= 80) return "B";
  if (a >= 70) return "C";
  if (a >= 60) return "D";

  return "F";
}

console.log(rank(parseInt(input)));