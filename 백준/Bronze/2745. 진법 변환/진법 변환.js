let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function answer(arr) {
  const [b, _] = arr;
  const newArr = b.split("");
  let charObj = {};
  let result = 1;

  for (let i = 65; i < 91; i++) {
    charObj[String.fromCharCode(i)] = 10 + (i - 65);
  }

  newArr.forEach((element, idx) => {
    const numElement = parseInt(element);
    let dec = 0;
    let digits = 1;

    for (let i = 0; i < newArr.length - 1 - idx; i++) {
      digits *= +_;
    }

    dec += isNaN(numElement) ? charObj[element] * digits : digits * numElement;

    result += dec;
  });

  return result - 1;
}

console.log(answer(input));