const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let count = 0;
let before = "";
for (let i = 0; i < input.length; i++) {
  if ((input[i] !== " " && before === " ") || (input[i] !== " " && i === 0)) {
    count++;
  }
  before = input[i];
}
console.log(count);
