let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const PENNY = [25, 10, 5, 1];

function answer(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftCharge = arr[i];
    let result = "";

    for (let j = 0; j < PENNY.length; j++) {
      const pennyAmount = parseInt(leftCharge / PENNY[j]);
      result += `${pennyAmount} `;
      leftCharge -= pennyAmount * PENNY[j];
    }

    console.log(result);
  }
}

answer(input.splice(1).map(Number));