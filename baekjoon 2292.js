const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

// f(1) = 1
// f(2) = f(1) + 6 * 1
// f(3) = f(2) + 6 * 2
// f(4) = f(3) + 6 * 3
// f(n) = f(n-1) + 6 * (n-1)

const getN = function (n) {
  if (n === 1) {
    return 1;
  }
  return getN(n - 1) + 6 * (n - 1);
};

let N = 1;
while (true) {
  if (input <= getN(N)) {
    console.log(N);
    break;
  }
  N++;
}
