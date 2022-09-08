const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const M = input.shift();
const N = input.shift();
const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
let result = "";
for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    result += `${i}\n`;
  }
}
console.log(result.trim());
