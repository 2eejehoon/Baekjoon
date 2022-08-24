const [t, ...arr] = require("fs").readFileSync("input.txt").toString().trim().split('\n');

const plus = (arr) => {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        const newArr = arr[i].split(' ').map(Number);
        const sum = newArr.reduce((acc, cur) => acc + cur);
        result += `Case #${i+1}: ${sum}\n`;
    }
    console.log(result.slice(0, -1));
}

plus(arr);