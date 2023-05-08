let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function ask(arr) {
  const newArr = arr.map((data) => data.split(" ").splice(1));
  const CREDIT_TABLE = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
  };
  let result = {
    sum: 0,
    total: 0,
  };

  result.sum = newArr.reduce((acc, cur) => {
    if (cur[1] === "P") return acc;
    result.total += parseFloat(cur[0]);
    return (acc += parseFloat(cur[0]) * CREDIT_TABLE[cur[1]]);
  }, 0.0);


  return (result.sum / result.total).toFixed(6);
}

console.log(ask(input));