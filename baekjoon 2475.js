const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
console.log(input.map((el) => el ** 2).reduce((acc, cur) => acc + cur) % 10);
