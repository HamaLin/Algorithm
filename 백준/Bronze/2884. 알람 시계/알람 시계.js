let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function alertTimer(hour, minute) {
  if (minute >= 45) console.log(`${hour} ${minute - 45}`);
  else if (hour === 0) console.log(`23 ${minute + 15}`);
  else console.log(`${--hour} ${minute + 15}`);
}

alertTimer(parseInt(input[0]), parseInt(input[1]));