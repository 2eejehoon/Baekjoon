const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const T = input.shift();

const getPrime = (n) => {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i <= 100; i++) {
    if (arr[i]) {
      for (let j = i ** 2; j < 10001; j += i) {
        arr[j] = false;
      }
    }
  }
  let prime = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      prime.push(i);
    }
  }
  return prime;
};

for (let i = 0; i < T; i++) {
  let n = input[i];
  let prime = getPrime(n);
  let partitionArr = [];
  for (let j = 0; prime[j] <= Math.floor(n / 2) + 1; j++) {
    for (let k = 0; prime[k] <= n; k++) {
      if (prime[j] + prime[k] === n) {
        partitionArr.push([prime[j], prime[k]]);
      }
    }
  }
  let partition = partitionArr[partitionArr.length - 1];
  let small = partition.sort((a, b) => a - b)[0];
  let large = partition.sort((a, b) => a - b)[1];
  console.log(small + " " + large);
}
