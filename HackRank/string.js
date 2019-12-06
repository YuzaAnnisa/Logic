var s = require("readline-sync")

var st = s.question(" Masukkan panjang String : ")
var data =[]
for(x=0;x<parseInt(st);x++){
    data[x] = s.question("String ke "+x+" = ")
}console.log(data)
var putar
function buble(data){
    do{
        putar = false
        for (let k = 0; k<=Math.abs(st)-1;k++){
            if(data[k] > data[k+1]){
                var hasil = data[k]
                data[k] = data[k+1]
                data[k+1] = hasil
                putar = true
            }
        }
    }
    while(putar)
    return data
}
var L = buble(data)
console.log(L)