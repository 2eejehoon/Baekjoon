const [t, ...arr] = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const X = t.split(" ")[1];
const A = arr[0].split(" ").map(Number);
let result = '';
for (let i = 0; i < A.length; i++) {
    if (A[i] < X) {
        result += `${A[i]} `;
    }
}
console.log(result.slice(0, -1));