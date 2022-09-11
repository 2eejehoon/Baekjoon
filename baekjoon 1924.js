const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
let x = Number(input[0]);
let y = Number(input[1]);
const getX = (num) => {
  switch (num) {
    case 1:
      return 0;
    case 2:
      return 31;
    case 3:
      return 59;
    case 4:
      return 90;
    case 5:
      return 120;
    case 6:
      return 151;
    case 7:
      return 181;
    case 8:
      return 212;
    case 9:
      return 243;
    case 10:
      return 273;
    case 11:
      return 304;
    case 12:
      return 334;
  }
};
const getAmount = (num1, num2) => {
  return getX(num1) + num2;
};
let amount = getAmount(x, y);
const getDay = (num) => {
  switch (num % 7) {
    case 0:
      return console.log("SUN");
    case 1:
      return console.log("MON");
    case 2:
      return console.log("TUE");
    case 3:
      return console.log("WED");
    case 4:
      return console.log("THU");
    case 5:
      return console.log("FRI");
    case 6:
      return console.log("SAT");
  }
};
getDay(amount);
