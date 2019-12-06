const rl = require("readline-sync");

var result = [0, 0];

var input_1 = rl.question("Input nilai untuk array A: ");
var input_2 = rl.question("Input nilai untuk array B: ");

var arrA = input_1.split(" ");
var arrB = input_2.split(" ");

console.log(arrB);

for (let k = 0; k < 3; k++) {
  if (parseInt(arrA[k]) != parseInt(arrB[k])) {
    if (parseInt(arrA[k]) > parseInt(arrB[k])) {
      result[0]++;
    } else {
      result[1]++;
    }
  }
}

console.log(result);