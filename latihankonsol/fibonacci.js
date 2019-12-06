var fibo = require ("readline-sync") 
let a = 1
let b = 1
let c = 0
console.log(a)
console.log(b)
for (let i = 2; i<18; i++){
 c=a+b
 a=b
 b=c
 console.log(c)
}

//menggunakan lib node readline-sync//
console.log("fibonacci dengan inputan ")
let y=1
let z=1
let x = 0
var jlh = fibo.question("masukkan jumlah fibonacci yang diinginkan : ")
console.log(y)
console.log(z)
for (let i = 2; i<parseInt(jlh); i++){
    x=y+z
    y=z
    z=x
    console.log(x)
   }
   