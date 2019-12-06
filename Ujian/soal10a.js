var rl = require("readline-sync")

var bil = rl.question("Panjang Array = ")

function prima(bil){
    console.log("Bilangan Prima")
    let deret = []
    let d = 0;
for(let i =0 ; i<=parseInt(bil);i++){
    let count = 0;
    for (let j=1;j<=i;j++){
        if(i%j == 0){
            count++
        }
    }if(count==2){
        deret [d] = i
        d++
    }
}
return deret
}
function fibo(bil){
    console.log("Bilangan Fibonacci")
    let a = 0 
    let b = 1
    let arr = []
    for (let i = 0; i<=parseInt(bil); i++){
        let hasil = a + b
        a=b
        b=hasil
        arr[i]=hasil
    }
    return arr
 }

var deret2 =[]
deret2= prima(parseInt(bil))
console.log(deret2)

var deret3 =[]
deret3= fibo(parseInt(bil))
console.log(deret3)

for (let m = 0; m<=parseInt(bil); m++){
console.log(deret2[m] + deret3[m] + ",")
}