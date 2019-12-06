var i = require('readline-sync')
var a = ('abcdefghijklmnopqrstuvwxyz')
var b = a.split('')
var c = b.length

console.log();
var z = i.question('Masukkan panjang        = ')
var y = i.question('Masukkan kata           = ')
var x = i.question('Masukkan perpindahan    = ')
var w = y.split('')
var v = y.length
var hasil = ''

for (let a1 = 0; a1 < z; a1++){
    var u = parseInt(x)
    var t = w[a1].toUpperCase()
    var s = w[a1].toLowerCase()
    var r = 0
    var index = 0

    if (w[a1] == t){
        index++
    }

    for (let a2 = 0; a2 < c; a2++){
        
        if(s == b[a2]){
            r = u + a2
            if (r > c){
                r = r % c
            }
            t = b[r]
        }
    }

    if (index > 0){
        w[a1] = t.toUpperCase()
    } else {
        w[a1] = t
    }

    if (a1 == 0){
        hasil = w[a1]
    } else {
        hasil = hasil +  w[a1]
    }
}

console.log();
console.log('Hasil Caesar Cheaper = ' + hasil)
console.log();
