const fs = require("fs");
const [A, B] = fs.readFileSync("input.txt").toString().trim().split(" ");

let a = String(A).split("");

let num1 = "";
for (let i = 0; i < a.length; i++) {
  num1 = a[i].concat(num1);
}
let b = String(B).split("");
let num2 = "";
for (let i = 0; i < b.length; i++) {
  num2 = b[i].concat(num2);
}
if (num1 > num2) {
  console.log(Number(num1));
} else {
  console.log(Number(num2));
}
