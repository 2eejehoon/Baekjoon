const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
// 마지막 입력값 0 제거
input.pop();
for (let i = 0; i < input.length; i++) {
  let n = input[i];
  let arr = Array(2 * n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= 2 * n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= 2 * n; j += i) {
        arr[j] = false;
      }
    }
  }
  const prime = [];
  for (let i = n + 1; i <= 2 * n; i++) {
    if (arr[i]) {
      prime.push(i);
    }
  }
  console.log(prime.length);
}
