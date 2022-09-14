const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = input.shift();
const arr = input.sort((a, b) => a - b);
let result = "";
for (let i = 0; i < arr.length; i++) {
  result += arr[i] + "\n";
}
console.log(result.slice(0, -1));
