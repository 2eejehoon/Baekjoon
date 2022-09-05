const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);
const T = input.shift();

for (let i = 0; i < T * 2; i += 2) {
  let k = input[i];
  let n = input[i + 1];
  let arr = [];
  for (let i = 0; i <= k; i++) {
    arr[i] = [];
  }
  for (let i = 0; i <= k; i++) {
    sum = 0;
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        arr[i][j] = j + 1;
      } else {
        sum = sum + arr[i - 1][j];
        arr[i][j] = sum;
      }
    }
  }
  console.log(arr[k][n - 1]);
}
