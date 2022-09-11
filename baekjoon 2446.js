const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);
let result = "";
for (let i = N; i >= 1; i--) {
  result += " ".repeat(N - i) + "*".repeat(2 * i - 1) + "\n";
}
for (let i = 2; i <= N; i++) {
  result += " ".repeat(N - i) + "*".repeat(2 * i - 1) + "\n";
}
console.log(result.slice(0, -1));
