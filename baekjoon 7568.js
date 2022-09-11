const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift();
let obj = {};
for (let i = 0; i < input.length; i++) {
  obj[String.fromCharCode(i + 65)] = input[i].split(" ").map(Number);
}
let result = "";
for (let key1 in obj) {
  let rank = 1;
  for (let key2 in obj) {
    if (key1 === key2) {
      continue;
    }
    if (obj[key1][0] < obj[key2][0] && obj[key1][1] < obj[key2][1]) {
      rank++;
    }
  }
  result += rank + " ";
}
console.log(result.slice(0, -1));
