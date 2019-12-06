const rl = require("readline-sync");

var n = rl.question("input panjang step: ");

for (let m = 0; m < n; m++) {
  var s = rl.question("input step ke-" + (m + 1) + ": ");
}

var count = 0;
var steps = 0;

for (let i = 0; i < n; i++) {
  if (s[i] == "U") steps++;
  if (s[i] == "D") steps--;

  if (steps == 0 && s[i] == "U") count++;
}

console.log(count + " kali melewati lembah");
