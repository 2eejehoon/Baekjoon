const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let arr = [];
let from = 0;
let to = 10;
while (true) {
  arr.push(input.slice(from, to));
  if (to >= input.length) {
    break;
  }
  from += 10;
  to += 10;
}
const result = arr.join("\n");
console.log(result);
