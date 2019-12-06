var sn = require("readline-sync")

var p = sn.question("Masukkan jumlah angka : ")
var arr = []
v = ''

for(let x=1;x<=parseInt(p);x++){
    var bil = sn.question("Jumlah angka ke "+x+" = ")
    arr[x] = parseInt(bil)
    for(let a=0;a<=bil;a++){
        if(arr[a+1] - arr[a] < 0){
            v = 'yes'
        }else {
            v = 'no'
            break; //selama hasil yes akan selalu running
        }
console.log(bil)
    }
}