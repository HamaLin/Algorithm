let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function reciptCheck(arr) {
  const totalPrice = parseInt(arr[0]);
  const productAmount = parseInt(arr[1]);
  arr.splice(0, 2);
  const productList = arr;
  let sumPrice = 0;

  if (productAmount !== productList.length) return "No";

  for (let data of productList) {
    const price = parseInt(data.split(" ")[0]);
    const amount = parseInt(data.split(" ")[1]);

    sumPrice += price * amount;
  }

  return totalPrice === sumPrice ? "Yes" : "No";
}

console.log(reciptCheck(input));
