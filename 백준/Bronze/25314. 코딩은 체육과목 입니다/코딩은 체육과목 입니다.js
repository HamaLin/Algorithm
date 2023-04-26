let input = require("fs").readFileSync("/dev/stdin").toString().trim();

function intDatatype(integer) {
  let result = "";
  for (let i = 0; i < integer / 4; i++) {
    result += "long ";
  }

  return result + "int";
}

console.log(intDatatype(parseInt(input)));