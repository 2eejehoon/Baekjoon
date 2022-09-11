const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);
let result = "";
for (let i = 0; i < N; i++) {
  result += " ".repeat(i) + "*".repeat(N - i) + "\n";
}

console.log(result.slice(0, -1));
