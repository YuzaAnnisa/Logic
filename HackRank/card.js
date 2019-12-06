var i = require('readline-sync')
var a
var b
var p
var kartu
var pk
var round = true
var w

console.log()
console.log('Mainan Kartu')
console.log()

pk = i.question('Jumlah Kartu = ')
pk = parseInt(pk)

while (round){
    p = i.question('Jumlah tawaran = ')

    var pilih = i.question('Pilihan kotak A atau B = ')
    console.log()

    p = parseInt(p)

    switch (pilih){
        case "a":
        a = Math.round(Math.random() * 9)
        
        if (a > p){
            pk = pk + p
        } else if (a == p){
            pk = pk
        } else {
            pk = pk - p
        }
        console.log('Kartu Player   = ' + p)
        console.log('Angka Kotak A  = ' + a)
        break

        case "b":
            b = Math.round(Math.random() * 9)
            if (b > p){
                pk = pk + p
            } else if (b == p){
                pk = pk
            } else {
                pk = pk - p
            }
            console.log('Kartu Player   = ' + p)
            console.log('Angka Kotak B  = ' + b)
            break
    }
    if (pk < 1){
        pk = 0
        w = 'You Win'
        round = false
    } else {
    console.log()
    console.log('Jumlah Kartu Player = ' + pk)
    console.log()
    console.log('Kelanjutan dari Permainan Kartu')
    console.log()
    console.log('1. Lanjut')
    console.log('2. Menyerah')
    console.log()
    var r = i.question('Pilihan : ')

    if (r == 2){
        w = 'You Lose'
        round = false
    }
}
}

console.log()
console.log(w)