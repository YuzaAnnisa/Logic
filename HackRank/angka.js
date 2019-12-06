var rl = require("readline-sync")
var pilih = rl.question("Masukan Angka 1 atau 2 : ")
var flag = true
while (flag){


// Pilihan Untuk Player
if (pilih == 1){
    console.log("Anda Merupakan Player")
    var player = rl.question("Masukan Angka Anda : ")
    var com = Math.floor(Math.random() * 10)
    console.log("Angka Komputer : "+com)
}
//Pilihan Untuk Com
if (pilih == 2){
    console.log("Tunggu giliran Anda")
    var com = Math.floor(Math.random() * 10)
    var player = rl.question("Silakan Masukan Angka Anda : ")
    console.log("Angka Komputer :"+com)
}

//Output
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
var answer = rl.question("Apakah Lanjut ? Yes/No: ")
if (answer.toLocaleLowerCase()== 'no'){
    flag = false
}
}