let input = require("fs").readFileSync('/dev/stdin').toString().trim();

function multiplicationTable(num) {
  for (let i = 1; i < 10; i++) console.log(`${num} * ${i} = ${num * i}`);
}

multiplicationTable(parseInt(input));