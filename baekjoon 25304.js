const [total, count, ...arr] = require("fs").readFileSync("input.txt").toString().trim().split('\n');

const check = (total, count, arr) => {
    let sum = 0;
    for (let i = 0; i < count; i++) {
        let newArr = arr[i].split(' ').map(Number);
        
        sum = sum + newArr.reduce((acc, cur) => acc * cur, 1);
    }
    return Number(total) === Number(sum) ? console.log("Yes") : console.log(false);
}

check(total, count, arr)