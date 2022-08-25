const [N, ...arr] = require("fs").readFileSync("input.txt").toString().split("\n");

for (let i = 0; i < N; i++) {
    let sum = 0;
    let point = 0;
    
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === "O") {
            point = point + 1;
            sum = sum + point;
        } else {
            point = 0;
        }
        
    }
    console.log(sum);
}