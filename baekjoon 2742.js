const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);
let result = "";
for (let i = input; i > 0; i--) {
  result += i + "\n";
}
console.log(result.slice(0, -1));
