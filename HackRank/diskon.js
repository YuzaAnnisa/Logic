var rl = require("readline-sync");

var saldo = rl.question("Input Saldo: ");
var harga = rl.question("Harga Kopi: ");
var jumlah = rl.question("Jumlah Pesanan: ");

var harga_awal = jumlah * harga;

if (harga_awal >= 40000) {
  let diskon = (50 / 100) * harga_awal;

  let harga_bayar = harga_awal - diskon;

  let cashback = (10 / 100) * harga_bayar;

  if (harga_bayar <= saldo) {
    var saldo_akhir = parseInt(saldo) - harga_bayar + cashback;
    console.log("Jumlah Cup = " + jumlah + " Saldo Akhir = " + saldo_akhir);
  } else {
    console.log("Saldo Anda tidak Mencukupi!");
  }
} else {
  console.log(
    "Jumlah Cup = " +
      jumlah +
      " Saldo Akhir = " +
      (parseInt(saldo) - harga_awal)
  );
}
