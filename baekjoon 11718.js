const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let result = "";
for (let i = 0; i < input.length; i++) {
  result += input[i] + "\n";
}
console.log(result.slice(0, -1));
