var rl = require("readline-sync")
var pilih = rl.question("Masukan Angka 1 atau 2 : ")

if (pilih == 1){
    console.log("Anda Merupakan Player")
    var com = Math.floor(Math.random() *10)+1
    var player = rl.question("Masukan Angka Anda : ")
    console.log("Angka Komputer : "+com)
}

if (pilih == 2){
    console.log("Tunggu giliran Anda")
    var com = Math.floor(Math.random() * 10 )
    var player = rl.question("Silakan Masukan Angka Anda : ")
    console.log("Angka Komputer :"+com)
}

if (player > com){
    console.log("Selamat Anda Menang You Win")
}

else if (com > player){
    console.log("Selamat Anda Kalah You Lose")
}
else{
    console.log("Tidak ada yang Menang")
}
console.log("\n")
