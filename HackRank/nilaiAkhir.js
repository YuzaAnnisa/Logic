var i = require('readline-sync')

console.log();
var z = i.question('Masukkan panjang Array     = ')
var z1 = i.question('Masukkan hasil akhir Array  = ')
var a = i.question('Masukkan nilai Array        = ')
var b = a.split(' ')

var index = 0

for (let x = 0; x < z; x++){
    for (let x1 = x; x1 < z; x1++){

        var d = parseInt(b[x]) + parseInt(b[x1+1])

        if (d % z1 == 0){
            index++
        }
    }
}

console.log();
console.log('Jumlah komulatif sesuai nilai akhir Array = ' + index);
