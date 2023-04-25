let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function findDuplicate(arr) {
  const distinct = new Set(arr);
  const filteredArr = arr.filter((data) => {
    if (distinct.has(data)) distinct.delete(data);
    else return data;
  });

  return filteredArr[0] ? parseInt(filteredArr[0]) : undefined;
}

function ovenTimer(arr) {
  const duplicatedNum = findDuplicate(arr);

  if (duplicatedNum) {
    const dupleCount = arr.length + 1 - [...new Set(arr)].length;
    const bouns = 10 * 10 ** dupleCount;

    console.log(bouns + duplicatedNum * (bouns / 10));
  } else console.log(Math.max(...arr) * 100);
}

ovenTimer(input);