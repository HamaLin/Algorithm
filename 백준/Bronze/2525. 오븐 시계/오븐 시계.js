let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function ovenTimer(hour, minute, durationTime) {
  const addTime = parseInt((minute + durationTime) / 60);
  const newMinute = (minute + durationTime) % 60;

  console.log(
    `${
      hour + addTime >= 24 ? hour + addTime - 24 : hour + addTime
    } ${newMinute}`
  );
}

ovenTimer(
  parseInt(input[0].split(" ")[0]),
  parseInt(input[0].split(" ")[1]),
  parseInt(input[1])
);
