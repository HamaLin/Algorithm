const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map(Number);

let answer = 0;

for (let i = 0; i < input.length; i++) {
  let count = 0;

  for (let j = 1; j <= input[i]; j++) {
    if (input[i] % j === 0) count++;
  }

  if (count === 2) answer++;
}

console.log(answer);