let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function addCalculate(num) {
  let result = "";
  num.forEach((element) => {
    const a = parseInt(element.split(" ")[0]);
    const b = parseInt(element.split(" ")[1]);

    if (a > 0 && b < 10) result += a + b + "\n";
  });

  console.log(result);
}

addCalculate(input);
