let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function ask(arr) {
  const newArr = arr.map((data) => data.split(""));
  const maxLength = Math.max(...arr.map((i) => i.length));
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    let temp = "";
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j][i]) temp += newArr[j][i];
    }
    result.push(temp);
  }
  return result.join("");
}

console.log(ask(input));