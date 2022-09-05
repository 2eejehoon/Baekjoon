const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
let N = Number(input);

if (N % 5 === 0) {
  let count = N / 5;
  console.log(count);
} else {
  let f = Math.floor(N / 5);
  let t = 1;
  while (true) {
    if (f * 5 + 3 * t === N) {
      console.log(f + t);
      break;
    } else if (f * 5 + 3 * t > N) {
      f = f - 1;
      t = t + 1;
      if (f < 0) {
        console.log(-1);
        break;
      }
    } else {
      t = t + 1;
    }
  }
}
