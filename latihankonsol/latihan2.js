var lat2 = require("readline-sync")
var konversi = lat2.question("Masukkan jumlah yang ingin di konversi : ")
var cangkir = 0
var botol = 0
var teko = 0
var gelas = 0

//gelas
console.log("konversi dari gelas")
if (parseInt(konversi) > 0 ){
    cangkir = (parseInt(konversi))*2.5
    console.log(cangkir+"  cangkir")
    botol = (parseInt(konversi))/2
    console.log(botol+"  botol")
    teko = (parseInt(konversi))/10
    console.log(teko+ "  teko")
}

//teko
console.log("konversi dari teko")
if(parseInt(konversi)>0)
    gelas = parseInt(konversi)*25/2.5
    console.log(gelas+"  gelas")
    botol = parseInt(konversi)*2*2.5
    console.log(botol+ "  botol")
    cangkir = parseInt(konversi)*25
    console.log(cangkir+ "  cangkir")

//cangkir
console.log("konversi dari cangkir")
if(parseInt(konversi)>0){
    gelas = parseInt(konversi)*2.5
    console.log(gelas+ "  gelas")
    botol = parseInt(konversi)*2.5*2
    console.log(botol+ "  botol")
    teko = parseInt(konversi)/25
    console.log(teko+ "  teko")
}
//botol
console.log("konversi dari botol")
if(parseInt(konversi)>0){
    gelas = parseInt(konversi)*2
    console.log(gelas+ "  gelas")
    cangkir = parseInt(konversi)*2*2.5
    console.log(cangkir+ "  cangkir")
    teko = parseInt(konversi)*2/25
    console.log(teko+"  teko")
}
