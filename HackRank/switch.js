var rl = require('readline-sync');
var toko = 0;
var tokoTtempat1 = 2;
var tempat1Tempat2 = 0.5;
var tempat2Tempat3 = 1.5;
var tempat3Tempat4 = 2.5;

var liter = 0;

console.log("Pilihan Rute: ");


console.log("1.toko - tempat 1 - toko");
console.log("2.toko - tempat 1 - tempat 2 - toko");
console.log("3.toko - tempat 1 - tempat 2 - tempat 3 - toko");
console.log("4.toko - tempat 1 - tempat 2 - tempat 3 - tempa 4 - toko");

console.log("");

var flag = true;

while (flag) {
    var rute = rl.question("Masukkan Rute ");


    switch (rute) {
        case "1":
            liter = ((toko + tokoTtempat1) * 2) / 2.5;
            break;
        case "2":
            liter = ((toko + tokoTtempat1 + tempat1Tempat2) * 2) / 2.5;
            break;
        case "3":
            liter = ((toko + tokoTtempat1 + tempat1Tempat2 + tempat2Tempat3) * 2) / 2.5;
            break;
        case "4":
            liter = ((toko + tokoTtempat1 + tempat1Tempat2 + tempat2Tempat3 + tempat3Tempat4) * 2) / 2.5;
            break;
    }

    console.log("");
    console.log("Bensin yang terpakai adalah adalah");
    console.log(liter + " Liter");
    console.log("\n");

    var answer = rl.question("Apakah ingin melanjutkan? YES/NO): ");
    if (answer.toLowerCase() == 'no') {
        flag = false;
    }
}
// var liter = 0;

// liter = total / 2.5;

// console.log(liter + " Liter");