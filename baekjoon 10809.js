const input = require("fs").readFileSync("input.txt").toString().trim();

const alpha = "abcdefghijklmnopqrstuvwxyz";

let result = "";
for (let i = 0; i < alpha.length; i++) {
  result += input.indexOf(alpha[i]) + " ";
}
console.log(result);
