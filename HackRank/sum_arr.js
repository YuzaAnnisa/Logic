var tambah = require("readline-sync")
var jml = 0
var nilai = tambah.question("Panjang array : ")
var arr = [] 
for (let x=0;x<parseInt(nilai); x++){
    var bil = tambah.question("masukkan bilangan array index ke "+x+" : " )
    arr [x] = parseInt(bil)
    jml+=arr[x]
}
console.log(arr)
console.log(jml)

/* cara panjang
var jml = 0
for(i=0;i<arr.length;i++){//index ke berapa?
    jml+=arr[i]
}console.log(jml)*/
