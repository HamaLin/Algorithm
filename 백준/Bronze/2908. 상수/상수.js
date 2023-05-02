let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function verbNum(num) {
  result = 0;

  result += parseInt(num / 100);
  result += parseInt(num % 10) * 100;
  result += parseInt(num % 100) - parseInt(num % 10);

  return result;
}

function ask(str) {
  const num1 = verbNum(+str[0]);
  const num2 = verbNum(+str[1]);

  return num1 > num2 ? num1 : num2;
}

console.log(ask(input));