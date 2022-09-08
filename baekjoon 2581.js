const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const M = Number(input.shift());
const N = Number(input.shift());
let sum = 0;
let min = -1;

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
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    sum += i;
    if (min === -1) {
      min = i;
    }
  }
}

if (sum === 0) {
  console.log(min);
} else {
  console.log(`${sum}\n${min}`);
}
