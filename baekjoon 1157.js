const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let word = input.toUpperCase();
let obj = {};
for (let i = 0; i < word.length; i++) {
  if (word[i] in obj) {
    obj[word[i]] += 1;
  } else {
    obj[word[i]] = 1;
  }
}
let largestNumber = 0;
let largestLetter = "";
for (let key in obj) {
  if (obj[key] >= largestNumber) {
    secondLargestNumber = largestNumber;
    secondLargestLetter = largestLetter;
    largestLetter = key;
    largestNumber = obj[key];
  }
  if (largestNumber === secondLargestNumber) {
    largestLetter = "?";
  }
}
console.log(largestLetter);
