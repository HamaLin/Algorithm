let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function ask(str) {
  const strArr = [...str];
  let result = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i]?.length) result++;
  }

  return result;
}

console.log(ask(input));
