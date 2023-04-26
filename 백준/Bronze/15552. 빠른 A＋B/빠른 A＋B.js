let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function intDatatype(integer) {
  let result = "";

  integer.forEach((element) => {
    const splitedArr = element.split(" ");
    if (+splitedArr[0] > 0 && +splitedArr[1] > 0)
      result += `${+splitedArr[0] + +splitedArr[1]}\n`;
  });

  return result;
}

console.log(intDatatype(input));