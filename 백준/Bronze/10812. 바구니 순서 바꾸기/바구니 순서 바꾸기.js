let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function ask(arr) {
  const result = Array.from(
    { length: +arr[0].split(" ")[0] },
    (_, idx) => idx + 1
  );
  const newArr = arr.splice(1);

  for (let i = 0; i < newArr.length; i++) {
    const [start, end, mid] = newArr[i].split(" ").map(Number);
    const suppleArr = [];
    let temp = mid - 1;

    for (let j = 0; j < end - start + 1; j++) {
      suppleArr.push(result[temp]);
      temp++;
      if (temp >= end) temp = start - 1;
    }

    result.splice(start - 1, end - start + 1, ...suppleArr);
  }

  return result.join(" ");
}

console.log(ask(input));