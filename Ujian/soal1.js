var p = require("readline-sync")

var b = p.question("Beli pulsa = ")
var point = 0
var sisa = 0
var bayar = 10000
var bayar2 = 30000

if(parseInt(b)<=10000){
    point = point
}else if(parseInt(b)<=30000){
    point = (parseInt(b)-10000)/1000
    sisa = parseInt(b)-bayar
}else {
    point = (((parseInt(b)-30000)*2)/1000)+20
    sisa = parseInt(b)-bayar2
    if(sisa>bayar2){
        sisa = sisa - bayar
    }
}

console.log("point=  " +Math.floor(point))
console.log("sisa = " +sisa)