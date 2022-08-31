const fs = require("fs");
let [N, ...arr] = fs.readFileSync("input.txt").toString().trim().split("\n");
let count = arr.length;
for (let i = 0; i < arr.length; i++) {
  let str = arr[i];
  let newArr = [];
  let before = "";
  for (let i = 0; i < str.length; i++) {
    if (newArr.indexOf(str[i]) === -1) {
      newArr.push(str[i]);
    } else if (before !== str[i]) {
      count = count - 1;
      break;
    }
    before = str[i];
  }
}

console.log(count);
