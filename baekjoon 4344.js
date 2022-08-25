let [c, ...arr] = require("fs").readFileSync("input.txt").toString().split("\n");

let C = Number(c);

for (let i = 0; i < C; i++) {
    let newArr = arr[i].split(" ").map(Number);
    let sum = 0;
    let avg = 0;
    let count = 0;
    for (let j = 1; j < newArr.length; j++) {
        sum += newArr[j];
    }   avg = sum / (newArr.length -1);
    for (let k = 1; k < newArr.length; k++) {
        if (newArr[k] > avg) {
            count++;
        }
    }  console.log(((count/(newArr.length-1))*100).toFixed(3) + "%");
}