const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const T = input.shift();
const sortedArr = input.sort((a, b) => a - b);
for (let i = 0; i < sortedArr.length; i++) {
  console.log(sortedArr[i]);
}
