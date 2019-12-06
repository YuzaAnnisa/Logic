const rl = require("readline-sync");

var password = rl.question("Input Password: ");
var count = 0;
var char = 0;

if (password.match(/[0-9]/)) {
  count++;
}
if (password.match(/[a-z]/)) {
  count++;
}
if (password.match(/[A-Z]/)) {
  count++;
}
if (password.match(/[\!@#\$%^&\*\(\)\-\+]/)) {
  count++;
}

if (4 - count > 0) {
  if (password.length < 6) {
    char = 6 - password.length;
    count = 4 - count;
    console.log(
      "Password kurang " +
        char +
        " karakter dan kurang " +
        count +
        " karakter unik"
    );
  } else {
    count = 4 - count;
    console.log("password kurang " + count + " karakter unik");
  }
} else {
  if (password.length < 6) {
    char = 6 - password.length;
    console.log("Password kurang " + char + "karakter");
  } else {
    console.log("Strong Password!");
  }
}
