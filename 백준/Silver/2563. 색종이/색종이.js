let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function answer(arr) {
  const newArr = arr.splice(1);
  const [maxX, maxY] = [
    Math.max(...newArr.map((data) => +data.split(" ")[0])) + 10,
    Math.max(...newArr.map((data) => +data.split(" ")[1])) + 10,
  ];
  let canvas = Array.from({ length: maxY }, () => Array(maxX).fill(0));
  let result = 0;

  newArr.forEach((element) => {
    const [x, y] = element.split(" ").map((data) => +data - 1);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (!canvas[y + i][x + j]) {
          canvas[y + i][x + j] = 1;
          result++;
        }
      }
    }
  });

  return result;
}

console.log(answer(input));