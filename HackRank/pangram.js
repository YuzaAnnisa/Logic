var rl = require('readline-sync')
Pangram = true
var alphabets = "abcdefghijklmnopqrstuvwxyz"
var alp = alphabets.length
	var input = rl.question('masukkan kata :').toLowerCase()
    for( var i = 0; i < alp; i++ ){
        if(input.indexOf(alphabets[i]) == -1){
            Pangram = false
            break
        }
    }
    if(Pangram) {
        console.log('Pangram')
    }
    else {
        console.log('Bukan Pangram')
    }
 

