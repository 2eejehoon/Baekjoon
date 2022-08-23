const [n, ...arr] = require("fs").readFileSync("input.txt").toString().trim().split('\n');
const iterate = (arr, n) => {
    for (let i = 0; i < n; i++) {
        let newArr = arr[i].split(' ').map(Number);
        console.log(newArr.reduce((acc, cur) => acc + cur));
    }
}
iterate(arr, n);