var rl = require("readline-sync");
var flag = true;
while (flag) {
  var s = rl.question("Input string : ");
  var input_query = rl.question("Input query : ");

  var query = input_query.split(" ");

  var angka = 0;
  var Char = 0;
  var CharCount = 0;
  var hasil = [];
  for (var i = 0; i < s.length; i++) {
    angka = s.charCodeAt(i) - 96; //
    // console.log(s.charCodeAt(i));
    if (Char === angka) {
      // ==== CEK VALUE DAN TIPE DATA
      CharCount++;
    } else {
      CharCount = 1;
      Char = angka;
    }
    // console.log(CharCount);
    console.log(angka * CharCount);
    hasil[angka * CharCount] = true;
  }

  var result = [];
  for (var i = 0; i < query.length; i++) {
    result.push(hasil[query[i]] ? "Yes" : "No"); //merupakan fungsi yang digunakan untuk memasukkan value ke sebuah array
  }

  console.log(result);
  var answer = rl.question("Apakah Anda Mau Melanjutkan ? Yes/No: ");
  if (answer.toLocaleLowerCase() == "no") {
    flag = false;
  }
}
