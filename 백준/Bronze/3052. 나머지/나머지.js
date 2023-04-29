let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function getRemainderCount(arr) {
  const num = 42;
  const result = new Set();

  arr.forEach((element) => {
    if (!result.has(+element % num)) result.add(+element % num);
  });

  return result.size;
}

console.log(getRemainderCount(input));