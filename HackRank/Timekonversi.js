var i = require('readline-sync')

var y

console.log()
var a = i.question('Masukkan Waktu AM/PM = ')
var s = a.split(':')

console.log((s[2].substr(2,2)).toLowerCase());

if ((s[2].substr(2,2)).toLowerCase() != 'pm' && (s[2].substr(2,2)).toLowerCase() != 'am'){
    console.log()
    console.log('Maaf, waktu yang anda masukkan salah')
} else {
    console.log()
    console.log('Waktu yang dimasukkan = ' + a)
    
    if ((s[2].substr(2,2)).toLowerCase() != 'am'){
        s[0] = parseInt(s[0]) + 12
    }


console.log()
console.log('Hasil konfersi Waktu  = ' + s[0] + ':' + s[1] + ':' + s[2].substr(0,2))
console.log()
}