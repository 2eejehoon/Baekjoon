const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
for (let i = 1; i < input.length; i++) {
  if (Math.abs(input[i - 1] - input[i]) !== 1) {
    return console.log("mixed");
  }
}
if (input[0] === 1) {
  console.log("ascending");
} else {
  console.log("descending");
}
