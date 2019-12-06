var rl = require('readline-sync');

n = rl.question("Masukkan panjang baris dan kolom ")


var x = 1
var arr = []

for (let b = 0; b < n; b++) {
    arr[b] = []
    for (let k = 0; k < n; k++) {
        var input = rl.question("Masukkan angka index ke" + b + ' ' + k + ":" + ' ')
        arr[b][k] = parseInt(input)
    }
}

console.log(arr)

var d1 = 0;
var d2 = 0;

for (var i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {


        // primary diagonal 
        if (i == j)
            d1 += arr[i][j];

        // secondary diagonal 
        if (i == n - j - 1)
            d2 += arr[i][j];
    }
}

console.log("=====")
console.log(d1)
console.log(d2)
var hasil = Math.abs(d1 - d2)
console.log("=====")
console.log(hasil)