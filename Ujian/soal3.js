var lat = require("readline-sync")
var jml = 0
flag = true;
while(flag){

console.log("1. botol - cangkir")
console.log("2. teko - botol")
console.log("3. gelas - cangkir")
console.log("4. teko - gelas")
console.log("5. gelas - teko")
console.log("6. Cangkir - Gelas")

var vol = lat.question("Pilih menu konversi = ")
var konversi = lat.question("Nilai yang ingin dikonversi ? ")

switch(vol){
    case '1' :
        jml = parseInt(konversi)*2*2.5;
        break;
    case '2' :
        jml = parseInt(konversi)*25/2.5/2;
        break;
    case '3' :
        jml = parseInt(konversi)*2.5;
        break;
    case '4' :
        jml = parseInt(konversi)*25/2.5
        break;
    case '5':
        jml = parseInt(konversi)/25
    case '6':
        jml = parseInt(konversi)/2.5
} 
console.log ("Hasil koversi : " +jml)

var answer = lat.question("Lagi? (Y/N): ")

if(answer.toLowerCase() == 'n'){
    flag = false;
}
}