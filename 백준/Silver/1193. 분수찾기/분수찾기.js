const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let obj = {
  min: 0,
  max: 0,
  idx: 0,
};
let result = {
  fraction: 1,
  denominator: 1,
};
let flag = true;

for (let i = 0; i < 1e10; i++) {
  obj.min = obj.max + 1;
  obj.max = i + obj.max + 1;
  obj.idx = i + 1;
  if (+input >= obj.min && +input <= obj.max) break;
}

if (obj.idx % 2 === 0) result.denominator = obj.idx;
else {
  flag = false;
  result.fraction = obj.idx;
}

for (let i = 0; i < obj.max - obj.min; i++) {
  if (obj.min + i === +input) break;

  result.denominator = flag ? result.denominator - 1 : result.denominator + 1;
  result.fraction = flag ? result.fraction + 1 : result.fraction - 1;

  if (result.denominator === result.fraction) flag = false;
}

console.log(result.fraction + "/" + result.denominator);