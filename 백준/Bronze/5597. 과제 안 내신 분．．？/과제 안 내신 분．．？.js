let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function getBucketBallNumber(arr) {
  const newArr = arr.map((data) => +data);
  const result = [];

  for (let i = 1; i <= 30; i++) {
    if (!newArr.find((data) => data === i)) {
      result.push(i);
    }

    if (result.length === 30 - newArr.length) break;
  }

  return result.toString().replaceAll(",", "\n");
}

console.log(getBucketBallNumber(input));