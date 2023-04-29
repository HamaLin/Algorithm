let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function getBucketBallNumber(arr) {
  const [n, m] = arr[0].split(" ").map(Number);
  const newArr = arr.splice(1);
  // 왜 안될까?
  // const [[n, m], ...newArr] = arr
  const buckets = Array.from({ length: +n }, (_, i) => i + 1);

  newArr.forEach((element) => {
    const [start, end] = element.split(" ").map(Number);
    const tempNum = buckets[start - 1];
    buckets[start - 1] = buckets[end - 1];
    buckets[end - 1] = tempNum;
  });

  return Object.values(buckets).toString().replaceAll(",", " ");
}

console.log(getBucketBallNumber(input));