const [t, ...a] = require("fs").readFileSync("input.txt").toString().trim().split('\n');
let result = '';
for (let i = 0; i < a.length; i++) {
    let arr = a[i].split(' ').map(Number);
    result += `Case #${i+1}: ${arr[0]} + ${arr[1]} = ${arr[0] + arr[1]}\n`;
}
console.log(result.slice(0, -1));