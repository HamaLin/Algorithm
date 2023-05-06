let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function ask(arr) {
  let result = "";

  for (let i = 1; i < arr.length; i++) {
    let example = {
      scores: arr[i].split(" "),
      totalScore: 0,
      avgScore: 0,
      topRankerLength: 0,
    };

    for (let j = 1; j < example.scores.length; j++)
      example.totalScore += +example.scores[j];

    example.avgScore = example.totalScore / example.scores[0];
    example.topRankerLength = example.scores
      .splice(1)
      .filter((data) => data > example.avgScore).length;

    result += `${((example.topRankerLength / example.scores[0]) * 100).toFixed(
      3
    )}%${i < arr.length - 1 ? "\n" : ""}`;
  }

  return result;
}

console.log(ask(input));