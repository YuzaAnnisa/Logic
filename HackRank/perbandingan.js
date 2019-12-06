var point = require("readline-sync")

var nilai = point.question("Jumlah panjang yang diinginkan : ")
var arr = [] 

for (let x=0;x<parseInt(nilai); x++){
    var bil = point.question("masukkan bilangan array "+x+" : ")
    arr [x] = parseInt(bil)
}
console.log(arr)
var arrs = []
for (let y=0;y<parseInt(nilai); y++){
    var bil1 = point.question("masukkan bilangan array "+y+ " : ")
    arrs [y] = parseInt(bil1)
}
console.log(arrs)

console.log("a = "+arr)
console.log("b = "+arrs)
var m = 1 //dimulai dari 1 karena saat looping index pertama 1
var n = 1   // bila n=0 maka index 0 = 0+0
hasil = []
for(i=0;i<arr.length;i++){
    if(arr[i]>arrs[i]){
    hasil [0] = n
    n++
}
    else if(arr[i]<arrs[i]){
    hasil [1] = m
    m++
}
}console.log("point   = "+hasil)


