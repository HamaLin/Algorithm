let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function ask(arr) {
  const [x, y] = arr[0].split(" ");
  const newArr = arr.splice(1);
  let result = [];

  for (let i = 0; i < +x; i++) {
    const arr1 = newArr[i].split(" ");
    const arr2 = newArr[i + +x].split(" ");
    let temp = [];

    for (let j = 0; j < +y; j++) {
      temp.push(+arr1[j] + +arr2[j]);
    }

    result.push(temp.join(" "));
  }
  return result.join("\n");
}

console.log(ask(input));