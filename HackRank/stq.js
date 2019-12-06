var rl = require("readline-sync")
var s = rl.question("Masukkan string s : ")
var t = rl.question( "Masukkan string t : ")
var k = rl.question(" Masukkan angka : ")

d = Math.min(s.length, t.length)
var count = 0
for (let i=0; i<d; i++){
    if (s.charAt(i) == t.charAt(i)){
        count++
    } else 
        break;
}

if ((s.length-count) + (t.length-count) == k ){
    console.log("Yes")
}
else if ((s.length + s.length)+1 == k){
    console.log("Yes")
}
else {
    console.log("No")
}

