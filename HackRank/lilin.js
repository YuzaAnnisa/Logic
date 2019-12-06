var i = require('readline-sync')
var a = []
var z = []
var z1 = []

var l
var hmin = 1
var hmax = Math.pow(10,7)
var current = null
var cnt = 0
var ind = 0


console.log()
l = i.question('Berapa umur dari keponakan mu   = ')
console.log()

for (var x = 0; x < l; x++){
        a[x] = parseInt(i.question('Tinggi lilin yang diinginkan    = '))
}

b(a)

    function b (a){
        var p = a.length

        for (var c = 0; c < p; c++){
            for (var d = 0; d < p - c - 1; d++){
                if (a[d] > a[d+1]){
                    var e = a[d]
                    a[d] = a[d+1]
                    a[d+1] = e
                }
            }
        }
    return a
    }

   for (var q = a.length-1; q > 0; q--){
       if (a[q] == a[a.length-1]){
           cnt++
       }
   }

    // for (var q = 0; q < a.length; q++){
    //     if (a[q] != current){
    //         if (cnt > 0){
    //             z[ind] = cnt
    //             z1[ind] = current
    //             ind++
    //         }
    //         current = a[q]
    //         cnt = 1
    //     } else {
    //         cnt++
    //     }
    // }

    // if (cnt > 0){
    //     z[z.length] = cnt
    //     z1[z1.length] = current
    // }
 

    // for (var y = 0; y < z1.length; y++){
    //     if (z1[y] != null){
    //         if (z1[y] >= hmin){
    //             hmin = z1[y]
    //             hmax = z[y]
    //         }
    //     }
    // }
    
// console.log()
// console.log(a);
// console.log(z);
// console.log(z1);
// console.log(hmin);

console.log()
console.log('Jumlah lilin yang dapat tertiup = ' + cnt)
console.log()


//split untuk memecah string jadi arry
