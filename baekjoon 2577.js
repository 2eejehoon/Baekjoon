const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const result = input.reduce((acc, cur) => acc * cur);
let obj = {};
for (let i = 0; i < 10; i++) {
  obj[i] = 0;
  for (let j = 0; j < result.toString().length; j++) {
    if (i.toString() === result.toString()[j]) {
      obj[i]++;
    }
  }
}
for (let key in obj) {
  console.log(obj[key]);
}
