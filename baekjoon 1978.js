const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");
const [arr] = rest;
const numbers = arr.split(" ").map(Number);
let count = numbers.length;
for (let i = 0; i < N; i++) {
  let number = numbers[i];
  if (number === 1) {
    count--;
    continue;
  }
  if (number === 2) {
    continue;
  }
  for (let j = 2; j < number; j++) {
    if (!(number % j)) {
      count--;
      break;
    }
  }
}
console.log(count);
