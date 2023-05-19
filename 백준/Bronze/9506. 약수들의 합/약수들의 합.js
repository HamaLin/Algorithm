const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  let arr = [1];
  let sum = 1;
  for (let j = 2; j < input[i]; j++) {
    if (input[i] % j === 0) {
      arr.push(j);
      sum += j;
    }
  }

  console.log(
    sum === input[i]
      ? input[i] + " = " + arr.join(" + ")
      : `${input[i]} is NOT perfect.`
  );
}