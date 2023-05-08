let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function ask(arr) {
  const newArr = arr.splice(1);
  let result = 0;

  for (let i = 0; i < newArr.length; i++) {
    const charArr = [...newArr[i]];
    const set = new Set();

    for (let j = 0; j < charArr.length; j++) {
      if (!set.has(charArr[j])) set.add(charArr[j]);
      else if (charArr[j] !== charArr[j - 1]) {
        set.clear();
        break;
      }
    }

    if (set.size > 0) result++;
  }

  return result;
}

console.log(ask(input));
