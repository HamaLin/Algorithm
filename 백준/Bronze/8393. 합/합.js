let input = require("fs").readFileSync("/dev/stdin").toString().trim();

function sum(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) result += i;

  return result;
}

console.log(sum(input));
