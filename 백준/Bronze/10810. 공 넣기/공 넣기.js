let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 구조 분해 이용
function getBucketBallNumber(arr) {
  const [nm, ...newArr] = arr;
  let buckets = new Array(+nm.split(" ")[0]).fill(0);

  newArr.forEach((element) => {
    const [start, end, number] = element.split(" ");
    buckets.fill(+number, +start - 1, +end);
  });

  return Object.values(buckets).toString().replaceAll(",", " ");
}

console.log(getBucketBallNumber(input));