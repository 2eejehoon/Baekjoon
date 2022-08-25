const [input, arr] = require("fs").readFileSync("input.txt").toString().split("\n");

const N = Number(input);
const originals = arr.split(" ").map(Number);
const M = Math.max(...originals);
const scores = originals.map((el) => (el/M)*100);
const average = scores.reduce((acc, cur) => acc+cur) / N;
console.log(average);