var rl = require("readline-sync")
var Ks = 0 
flag = true;
while(flag){
var k1 = rl.question("Masukkan buah ke keranjang 1: ")
if (k1.toLowerCase()=='kosong'){
    k1 = 0
}
var k2 = rl.question("Masukkan buah ke keranjang 2: ")
if (k1.toLowerCase()=='kosong'){
    k1 = 0
}
var k3 = rl.question("Masukkan buah ke keranjang 3: ")
if(k3.toLowerCase()=='kosong'){
    k3=0
}

console.log("1. Keranjang 1")
console.log("2. Keranjang 2")
console.log("3. Keranjang 3")
var ask = rl.question("Pilih Keranjang yang ingin anda bawa: ")
if(ask == '1'){
    Ks = parseInt(k2)+parseInt(k3)
    console.log("keranjang "+ask+" dibawa ke pasar")
    
    console.log("Jumlah buah => "+k2+ "+" +k3+"="+Ks)
}else if(ask == '2'){
    Ks = parseInt(k1)+parseInt(k3)
    console.log("keranjang "+ask+" dibawa ke pasar")
    console.log("Jumlah buah => "+parseInt(k1)+ "+" +parseInt(k3)+"="+Ks)
}else if(ask == '3'){
    Ks = parseInt(k1)+parseInt(k2)
    console.log("keranjang "+ask+" dibawa ke pasar")
    
    console.log("Jumlah buah => "+parseInt(k1)+ "+" +parseInt(k2)+"="+Ks)
}else{
    console.log("Menu tidak ada!")
}
var tanya = rl.question("Ingin Melanjutkan ? (yes/no) : ")
if(tanya.toLowerCase()=='no'){
    flag = false;
}
}