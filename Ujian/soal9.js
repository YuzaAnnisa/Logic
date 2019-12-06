var i = require('readline-sync')

var round = true
var w

console.log()
console.log('Mainan Kartu')
console.log()

var card = i.question('Jumlah Kartu = ')
card = parseInt(card)

while (round){
   var p = i.question('Jumlah tawaran = ')

    var pilih = i.question('Pilihan kotak A atau B = ')
    console.log()

    p = parseInt(p)

    switch (pilih){
        case "a":
        var m = Math.round(Math.random() * 6)
        var n = Math.round(Math.random() * 6)
        
        if (m > p){
            card = card + p
        } else if (m == p){
            card = card
        } else {
            card = card - p
        }
        console.log('Kartu Player   = ' + p)
        console.log('Angka Kotak A  = ' + m)
        console.log('Angka Kotak B  = ' + n)
        break

        case "b":
          var  m = Math.round(Math.random() * 6)
          var  n = Math.round(Math.random() * 6)
            if (n > p){
                card = card + p
            } else if (n == p){
                card = card
            } else {
                card = card - p
            }
            console.log('Kartu Player   = ' + p)
            console.log('Angka Kotak A  = ' + m)
            console.log('Angka Kotak B  = ' + n)
            break
    }
    if (card < 1){
        card = 0
        w = 'You Win'
        round = false
    } else {
    console.log()
    console.log('Jumlah Kartu Player = ' + card)
    console.log()
    console.log('Kelanjutan dari Permainan Kartu')
    console.log()
    console.log('1. Lanjut')
    console.log('2. Menyerah')
    console.log()
    var op = i.question('Pilihan : ')

    if (op == 2){
        w = 'You Lose'
        round = false
    }
}
}

console.log()
console.log(w)