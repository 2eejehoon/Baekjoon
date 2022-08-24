const [...arr] = require("fs").readFileSync("input.txt").toString().trim().split("\n");
let result = '';
for (let i = 0; i < arr.length; i++) {
    sum = arr[i].split(" ").map(Number).reduce((acc, cur) => acc + cur);
    result += sum + "\n";
}
console.log(result.slice(0, -3));