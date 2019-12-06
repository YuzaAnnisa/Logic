var rl = require("readline-sync")
function prima(bil){
    console.log("Bilangan Prima")
    let deret = []
    let d = 0;
for(let i =0 ; i<=bil;i++){
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

function genap(bil){
    console.log("Bilangan genap")
    let deretG = []
    var g = 0
    for(let k = 0; k<=bil; k++){
    console.log(g)
    g += 2
    deretG [g] = k
    g++
}
return deretG
}

function ganjil(bil){
    console.log("bilangan ganjil")
    let gn = 1
    for(let x=0; x<=10; x++){
    gn = gn+2
    console.log(gn)
}
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
console.log("1. Bilangan Genap")
console.log("2. Bilangan Ganjil")
console.log("3. Bilangan Prima")
console.log("4. Bilangan Fibonacci")
var ask = rl.question("Pilih Bilangan pertama : ")
var ask2 = rl.question("Pilih Bilangan kedua : ")
var bil = rl.question("Angka yang ingin anda jumlahkan : ")
if(ask == '1' && ask2 == '2'){
    var deret2 =[]
    deret2= prima(parseInt(bil))
    console.log(deret2)

    var deret3 =[]
    deret3= fibo(parseInt(bil))
    console.log(deret3)

    for (let m = 0; m<=parseInt(bil); m++){
    console.log(deret2[m] + deret3[m] + ",")
 }
}else if(ask == '1' && ask2 == '2'){

}else if(ask == '2' && ask2 == '3'){

}else if(ask == '3' && ask2 == '4'){
    var deret2 =[]
    deret2= prima(parseInt(bil))
    console.log(deret2)

    var deret3 =[]
    deret3= fibo(parseInt(bil))
    console.log(deret3)

    for (let m = 0; m<=parseInt(bil); m++){
    console.log(deret2[m] + deret3[m] + ",")
 }
}
 

