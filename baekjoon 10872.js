const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
let result = 1;
for (let i = input; i > 0; i--) {
  result = result * i;
}
console.log(result);
