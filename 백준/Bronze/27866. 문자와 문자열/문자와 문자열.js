let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function getChar(arr) {
  const str = [...arr[0]];
  const index = parseInt(arr[1]);

  const result = str.find((element, idx) => {
    if (idx === index - 1) return element;
  });

  return result;
}

console.log(getChar(input));