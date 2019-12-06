var p = require("readline-sync")

// var L = p.question("Laki-Laki dewasa = ")
// var P = p.question("Perempuan = ")
// var R = p.question("Remaja = ")
// var K = p.question("Anak-anak = ")
// var B = p.question("Balita = ")
var pl = 2
var pp = 1
var pr = 1
var pk = 0.5
var pb = 1
var jml = 0
var jml2 = 0

var ask = p.question("jml orang yang makan = ")
console.log ("1. Laki - Laki")
console.log("2. Perempuan")
console.log("3. Remaja")
console.log("4. Anak-anak")
console.log("5. Balita")

var ask2 = p.question("siapa saja yang makan = ")
switch(ask){
    case '1':

}
jml2 = parseInt(L)+parseInt(P)+parseInt(R)+parseInt(K)+parseInt(B)

jml=(L*pl)+(P*pp)+(R*pr)+(K*pk)+(B*pb)
if (jml2%2!=0 && jml2>5){
    jml+=1
    console.log(jml+" Porsi")
}else{
    console.log(jml+" Porsi")
}

