 var k = require("readline-sync")

var s = k.question("Masukkan kata = ")
var j = k.question("Masukkan panjang string = ")
var i = 0
var r = ""

for(let x=0;x<j;x++){
    r+=s[i]
    i++
    if(i==s.length){
        i=0
    }
}
console.log(r)
var r2 = r.match(/a/g)
console.log(r2.length)