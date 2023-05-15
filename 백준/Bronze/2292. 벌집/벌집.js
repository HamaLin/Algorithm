const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = 6;
let maxNum = 1;
let result = 1;

for (let i = 1; i < 1e10; i++) {
  if (+input === 1) break;

  maxNum += num * i;
  if (+input <= maxNum) {
    result = i + 1;
    break;
  }
}

console.log(result);