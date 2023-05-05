let input = require("fs").readFileSync("/dev/stdin").toString().trim();

function ask(str) {
  const arr = str.toLowerCase().split("");
  const set = new Set(arr);
  let result = { value: "", size: 0, isDuplicate: false };
  let isDuplicate = false;

  for (let value of set) {
    const count = arr.filter((data) => value === data).length;

    if (result.size === count) result.isDuplicate = true;

    if (result.size < count && value !== result.value) {
      result.value = value;
      result.size = count;
      result.isDuplicate = false;
    }
  }

  return result.isDuplicate ? "?" : result.value.toUpperCase();
}

console.log(ask(input));