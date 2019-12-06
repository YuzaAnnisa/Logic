var nilai = require("readline-sync")

var arr = []
var arr2 =[]
var jml = 0
jml1 = 0
var total = 0
var ask = nilai.question("panjang Array =  ")
for (let b=0;b<parseInt(ask); b++){
    arr [b] = []
    for(let k = 0;k<parseInt(ask);k++){
        var bil = nilai.question("masukkan bilangan array ke "+b+" : "+k+"")
        arr[b][k]= parseInt(bil)
        
    }
}
console.log(arr) //absolute = nilai (-) jadi (+)

jml = arr[0][0]+arr[1][1]+arr[2][2]
jml1 = arr[0][2]+arr[1][1]+arr[2][0]
console.log("Hasil 1 = "+ jml + " -  Hasil 2 = "+jml1)
total = Math.abs(jml - jml1)
console.log(total)

