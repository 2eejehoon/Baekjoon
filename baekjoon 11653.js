const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString();
let N = Number(input);
let result = "";
while (N !== 1) {
  for (let i = 2; i <= N; i++) {
    if (N % i === 0) {
      N = N / i;
      result += `${i}\n`;
      break;
    }
  }
}
console.log(result);
