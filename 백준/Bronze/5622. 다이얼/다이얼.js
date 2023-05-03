let input = require("fs").readFileSync("/dev/stdin").toString().trim();

function ask(arr) {
  const strArr = arr.split("");
  let charObj = {};
  let result = 0;

  for (let i = 65; i <= 90; i++) {
    let sec = parseInt((i - 65) / 3) + 3;

    if (sec > 10) sec -= 1;
    else if (String.fromCharCode(i) === "S" || String.fromCharCode(i) === "V")
      sec -= 1;

    charObj[String.fromCharCode(i)] = sec;
  }

  strArr.forEach((element) => {
    result += charObj[element];
  });

  return result;
}

console.log(ask(input));