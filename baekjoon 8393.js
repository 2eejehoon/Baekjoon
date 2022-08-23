const n = require("fs").readFileSync("input.txt").toString().trim();

const iterate = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

iterate(n);