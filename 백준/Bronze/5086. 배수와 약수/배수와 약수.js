const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [A, B] = input[i].split(" ").map(Number);

  if (A !== B) {
    const type = A > B ? "multiple" : "factor";
    const left = A > B ? A % B : B % A;

    console.log(left === 0 ? type : "neither");
  } else console.log("neither");
}