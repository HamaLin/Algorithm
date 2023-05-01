let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function firstAndLast(arr) {
  const result = [];

  for (let i = 1; i < arr.length; i++) {
    const str = [...arr[i]];
    result.push(`${str[0]}${str[str.length - 1]}`);
  }

  return result.join("\n");
}

console.log(firstAndLast(input));