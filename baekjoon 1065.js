const fs = require("fs");
const input = Number(fs.readFileSync("input.txt").toString().trim());

let count = 0;
for (let i = 1; i <= input; i++) {
  if (String(i).length <= 2) {
    count++;
  }

  let numbers = String(i).split("").map(Number);
  if (numbers[2] - numbers[1] === numbers[1] - numbers[0]) {
    count++;
  }
}

console.log(count);
