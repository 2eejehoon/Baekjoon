let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString());

let count = 0;
while (true) {
  count++;
  input = input - count;
  if (input <= 0) {
    input = input + count;
    break;
  }
}
if (count % 2) {
  console.log(`${count - input + 1}/${input}`);
} else {
  console.log(`${input}/${count - input + 1}`);
}
