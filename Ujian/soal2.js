var input = require("readline-sync")

var r1 = 2
var r2 = 0.5
var r3 = 1.5
var r4 = 2.5
var bbm = 2.5
var bbm2 = 0

// console.log ("1. Toko - Tempat 1 - Tempat 2 - Toko")
// console.log ("2. Toko - Tempat 1 - Tempat 2 - Tempat 3 - Toko")
// console.log ("3. Toko - Tempat 1 - Tempat 2 - Tempat 3 -Tempat 4 - Toko")
// console.log("4. Toko - Tempat 2 - Tempat 3 - Tempat 4 - Toko")
// var rute = input.question("Pilih Rute = ")

// if (rute == '1'){
//     bbm2 = (r1 + r2 + r2 +r1)/bbm
// }else if(rute == '2'){
//     bbm2 = (r1+r2+r3+r3+r2+r1)/bbm
// }else if (rute == '3'){
//     bbm2 = (r1+r2+r3+r4+r3+r4+r1)/bbm
// }else if(rute == '4'){
//     bbm2 =(r1+r2+r3+r3+r3+r4+r3+r2+r1)
// }
// console.log(bbm2+ " liter")
var ask=input.question("Berapa perjalan = ")
console.log("1. Rute 1")
console.log("2. Rute 2")
console.log("3. Rute 3")
console.log("4. Rute 4")

for(let i=1; i<=parseInt(ask);i++){
    var ask2 = input.question ("Pilih Lokasi  = ")
switch (ask){
case '1':
    bbm = r1+r1/bbm
case '2':
    bbm = r1+r2+r2+r1/bbm
case '3':
    bbm = r1+r2+r3+r1/bbm
case '4':
    bbm = r1+r2+r3+r4/bbm
}
}

console.log(Math.floor(bbm)+ " Liter")