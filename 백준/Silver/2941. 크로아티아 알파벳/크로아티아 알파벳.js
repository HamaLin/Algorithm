let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

function ask(arr) {
  const CROATIA_TABLE = {
    c: ["=", "-"],
    d: ["z=", "-"],
    l: ["j"],
    n: ["j"],
    s: ["="],
    z: ["="],
  };
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isCroatia = false;
    let word = arr[i];

    if (CROATIA_TABLE[arr[i]]) {
      const croatiaWord = CROATIA_TABLE[arr[i]];
      let isExcept = false;

      if (arr[i] === "d" && arr[i + 1] === "z" && arr[i + 2] === "=")
        isExcept = true;

      for (let j = 0; j < croatiaWord.length; j++) {
        if (arr[i] + croatiaWord[j] === arr[i] + arr[i + 1] || isExcept) {
          word = arr[i] + croatiaWord[j];
          isCroatia = true;
          i += croatiaWord[j].length;
          break;
        }
      }
    }

    result.push(word);
  }

  return result.length;
}

console.log(ask(input));