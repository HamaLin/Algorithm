let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function getRemainderCount(arr) {
  const [n, m] = arr[0].split(" ").map(Number);
  const newArr = arr.splice(1);
  const buckets = Array.from({ length: n }, (_, i) => i + 1);

  for (let i = 0; i < newArr.length; i++) {
    const [start, end] = newArr[i].split(" ").map(Number);
    const revertArr = [];

    for (let j = end; j >= start; j--) {
      revertArr.push(buckets[j - 1]);
    }

    buckets.splice(start - 1, end - start + 1, ...revertArr);
  }

  return buckets.join(" ");
}

console.log(getRemainderCount(input));