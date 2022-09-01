const fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = input[0];
const b = input[1];
const c = input[2];
if (b >= c) {
  console.log(-1);
} else {
  console.log(Math.floor(a / (c - b)) + 1);
}
