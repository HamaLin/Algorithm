let input = require("fs").readFileSync("/dev/stdin").toString().trim();

function ask(num) {
  const legnth = 2 * num - 1;
  let result = "";

  for (let i = 0; i < legnth; i++) {
    let startRange = i > parseInt(legnth / 2) ? legnth - 1 - i : i;

    for (let j = 0; j < num + startRange; j++) {
      result += num - 1 - startRange <= j ? "*" : " ";
    }
    if (i !== legnth - 1) result += "\n";
  }
  return result;
}

console.log(ask(parseInt(input)));