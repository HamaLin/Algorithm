let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const map = new Map();

for (let i = 65; i < 91; i++) {
  const key = 10 + (i - 65);
  map.set(key, String.fromCharCode(i));
  if (key == input[1]) break;
}

function answer(num, n) {
  const value = map.has(num % n) ? map.get(num % n) : num % n;

  if (num < n) return value;

  return value + answer(parseInt(num / n), n).toString();
}

const result = answer(+input[0], +input[1]);
console.log(result?.length ? result.split("").reverse().join("") : result);