var rl = require("readline-sync");


var OPO = rl.question("Input Saldo: ");
var harga = rl.question("Harga Kopi: ");
var jmls = 0

// var hargaA = OPO / harga;

// if (hargaA >= 40000) {
//   var diskon = (50 / 100) * hargaA;
//   var jml = hargaA - diskon;
//   var cashback = (10 / 100) * jml;
//   if (jml <= OPO) {
//     var OPO2 = parseInt(OPO) - jml + cashback;
//     console.log("Jumlah Cup = " + jumlah + " Saldo Akhir = " + OPO2);
//   } else {
//     console.log("Saldo Anda tidak Mencukupi!");
//   }
// } else {
//   console.log(
//     "Jumlah Cup = " +
//       jumlah +
//       " Saldo Akhir = " +
//       (parseInt(OPO) - hargaA)
//   );
// }

var cup = OPO / harga
var beli = harga*cup
if (beli>=40000){
    var jml = beli*(50/100)
    var sisa = OPO-jml
    var CB = sisa+(10/100*sisa)
    console.log("Jumlah cup = "+Math.floor(cup)+ " Saldo Akhir = "+CB)
}else if(beli<40000){
    sisa = OPO - beli
    console.log("Jumlah cup = "+Math.floor(cup)+ " Saldo Akhir = "+sisa)
}

