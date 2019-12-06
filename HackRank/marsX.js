var rl = require('readline-sync')
var a = ''
var beda = 0

console.log(' ')
var input = rl.question('masukan panjang karakter string = ')
var n = (parseInt(input)/3)
for(i = 0; i < n; i++) {
    a += 'SOS'
}
var receive = rl.question('masukan karakter pesan string = ')
console.log('=======================================')
console.log('sent    = ' + a)
console.log('receive = ' + receive)
for(x = 0; x < a.length; x++){
    if(receive.charAt(x) != a.charAt(x)){
        beda++
    }
}
//var sinyal = n - beda
console.log('=======================================')
console.log('perbedaan pesan string          = ' + beda)
console.log('panjang pesan string            = ' + input)
console.log('total pesan yang terkirim       = ' + n + ' SOS')
//console.log('pesan yang terkirim dengan baik = ' + sinyal + ' SOS' )
console.log('======================================')
console.log(' ')