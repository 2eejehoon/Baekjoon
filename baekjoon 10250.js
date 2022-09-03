let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < arr.length; i++) {
  let H = arr[i].split(" ")[0];
  let N = arr[i].split(" ")[2];
  let height;
  let width;
  if (N % H === 0) {
    height = H;
    width = N / H;
  } else {
    height = N % H;
    width = Math.floor(N / H) + 1;
  }
  if (width < 10) {
    width = `0${width}`;
  }
  console.log(`${height}${width}`);
}
