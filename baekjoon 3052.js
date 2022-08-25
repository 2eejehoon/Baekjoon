const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const arr = input.map(Number);
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if(newArr.indexOf(arr[i]%42) === -1) {
        newArr.push(arr[i]%42);
    }
}
console.log(newArr.length);