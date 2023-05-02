let input = require("fs").readFileSync("/dev/stdin").toString().trim();

function ask(str) {
  const newArr = [...str];
  let result = {};

  for (let i = 97; i <= 122; i++) result[String.fromCharCode(i)] = -1;

  newArr.forEach((element, index) => {
    if (result[element] === -1) result[element] = index;
  });

  return Object.values(result).join(" ");
}

console.log(ask(input));