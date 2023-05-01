let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function getAvg(arr) {
  const newArr = arr.split(" ").map(Number);
  const max = Math.max(...newArr);

  const result =
    ((newArr.reduce((acc, cur) => acc + cur, 0) / max) * 100) / newArr.length;

  return result;
}

console.log(getAvg(input[1]));