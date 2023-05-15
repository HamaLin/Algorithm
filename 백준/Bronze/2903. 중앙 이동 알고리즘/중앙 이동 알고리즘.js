let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const HYPOTENUSE = 2 ** +input;
const answer = (HYPOTENUSE + 1) ** 2;

console.log(answer);