let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function createBucketObj(bucAmount) {
  let result = {};
  for (let i = 1; i <= +bucAmount; i++) {
    result[`${i}`] = 0;
  }

  return result;
}

function getBucketBallNumber(bucAmount, arr) {
  const bucket = createBucketObj(bucAmount);
  arr.splice(0, 1);

  for (let count = 0; count < arr.length; count++) {
    let exe = arr[count].split(" ");
    for (let i = +exe[0]; i <= +exe[1]; i++) {
      bucket[`${i}`] = +exe[2];
    }
  }

  return Object.values(bucket).toString().replaceAll(",", " ");
}

console.log(getBucketBallNumber(input[0].split(" ")[0], input));