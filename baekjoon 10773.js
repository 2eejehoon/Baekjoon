const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const K = input.shift();
let arr = [];
for (let i = 0; i < K; i++) {
  if (input[i] === 0) {
    arr.pop();
  } else {
    arr.push(input[i]);
  }
}
if (arr.length > 0) {
  const result = arr.reduce((acc, cur) => acc + cur);
  console.log(result);
} else {
  console.log(0);
}
