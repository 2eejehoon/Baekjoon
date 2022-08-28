const fs = require("fs");
const [T, ...arr] = fs.readFileSync("input.txt").toString().trim().split("\n");

for (let i = 0; i < arr.length; i++) {
  let newArr = arr[i].split(" ");
  let result = "";
  for (let i = 0; i < newArr[1].length; i++) {
    result += newArr[1][i].repeat(newArr[0]);
  }
  console.log(result);
}
