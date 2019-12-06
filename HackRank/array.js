var array = []
var x = 0
for(let i= 0; i<6; i++){
    array[i] = x
    x =x+2
}
console.log (array)
console.log(array.length)

console.log("Bilangan ganjil")
var ganjil =[]
let gn = 1
for(let a=0;a<10;a++){
    ganjil [a] = gn
    gn = gn+2
}
console.log(ganjil)

console.log("Array dua dimensi")
/*b =baris
k=kolom
pengulangan selalu dibaca dari bawah baru
*/
arry = []
var x = 0
for (b=0;b<3;b++){
    arry[b] = []
    for(k=0; k<3; k++){
        arry[b][k] = x
        x+=2
    }
}
console.log (arry)

console.log("Array input")
var rl = require("readline-sync")
var masuk = rl.question("Panjang yang anda inginkan : ")
arr = []
var x = 0
for (b=0;b<parseInt(masuk);b++){
    arr[b] = []
    for(k=0; k<parseInt(masuk)*2; k++){
        arr[b][k] = x
        x+=2
    }
}
console.log(arr)