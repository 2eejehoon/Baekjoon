const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

input = input[0];

solution(input);

function solution(str) {
  let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

  for (let alphabet of croatia) {
    str = str.split(alphabet).join("Q");
  }
  console.log(str.length);
}
