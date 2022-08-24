let input = Number(require("fs").readFileSync("input.txt").toString());

let count = 0;
let num = input;
let sum;
while (true) {
  count = count + 1;
  sum = Math.floor(num / 10) + num % 10;
  num = (num % 10) * 10 + sum % 10;

  if (input === num) {
    break;
  }
}
console.log(count);