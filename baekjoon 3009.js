const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input.map((el) => el.split(" ").map(Number));
let objX = {};
let objY = {};
for (let i = 0; i < arr.length; i++) {
  if (objX[arr[i][0]]) objX[arr[i][0]]++;
  else objX[arr[i][0]] = 1;
  if (objY[arr[i][1]]) objY[arr[i][1]]++;
  else objY[arr[i][1]] = 1;
}
let x = "";
let y = "";
for (let key in objX) {
  if (objX[key] % 2 === 1) {
    x = key;
  }
}
for (let key in objY) {
  if (objY[key] % 2 === 1) {
    y = key;
  }
}
console.log(x + " " + y);
