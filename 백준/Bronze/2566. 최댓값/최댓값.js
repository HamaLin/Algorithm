let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function ask(arr) {
  let result = {
    num: -1,
    position: {
      x: 1,
      y: 1,
    },
  };

  for (let i = 0; i < arr.length; i++) {
    const rows = arr[i].split(" ").map(Number);
    let isMaxNum = false;
    for (let j = 0; j < rows.length; j++) {
      if (rows[j] > result.num) {
        (result.num = rows[j]), (result.position.x = j + 1);
        result.position.y = i + 1;
      }

      if (rows[j] == 99) {
        isMaxNum = true;
        break;
      }
    }

    if (isMaxNum) break;
  }
  return `${result.num}\n${result.position.y} ${result.position.x}`;
}

console.log(ask(input));