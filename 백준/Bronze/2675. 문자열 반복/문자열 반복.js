let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function ask(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    const [count, str] = arr[i].split(" ");

    if (str?.length) {
      const strArr = str.split("");

      strArr.forEach((element) => {
        result += element.repeat(+count);
      });

      if (i !== arr.length - 1) result += "\n";
    }
  }

  return result;
}

console.log(ask(input));