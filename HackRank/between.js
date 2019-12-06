var rl = require('readline-sync')
var input = rl.question('masukkan jumlah baris array  : ')
var split = input.split (' ')

var nilai1 = rl.question('Masukkan Angka 1 : ')
var splitNilai1 = nilai1.split(' ')

var nilai2 = rl.question('Masukkan Angka 2 : ')
var splitNilai2 = nilai2.split(' ')
var batasNilai1 = splitNilai1.slice(-1)
var batasNilai2 = splitNilai2.slice(0,1)


// console.log(splitNilai1)
// console.log(splitNilai2)
// console.log(batasNilai1)
// console.log(batasNilai2)
var arr = []
var arr1 = []
var arr2 = []
var n1 = parseInt(batasNilai1)
var n2 = parseInt(batasNilai2)
index = 0
index1 =0
index2 = 0
for (let i = n1; i<= n2; i++)
{
    if(i % n1 == 0){
        arr[index] = i 
        index ++
     }
}

console.log(arr)

for (let i= 0; i<arr.length;i++){
for (let j = 0; j<splitNilai1.length;j++){
    if(arr[i] % parseInt(splitNilai1[j]) ==0){
    arr1[index1] = arr[i]
    index1 ++}
    }
}
console.log(arr1)

for (let i= 0 ; i<splitNilai2.length;i++){
    for (let j=0 ; j<arr.length ; j++){
    //     console.log(parseInt(splitNilai2[i]))
    //    console.log(arr[j])
       if(parseInt(splitNilai2[i])% arr[j]==0){
           arr2[index2] = arr[j]
           index2++
       }
       
    }
}
function sorting (a){
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
sorting(arr)
sorting(arr1)
sorting(arr2)

var arr3 = []
var index3 = 0
var index4 = 0
var indexMax =0
for(let i = 0 ; i<arr2.length; i++){
    if(arr2[i] != arr2[i+1]){
        if(index4 == indexMax){
        arr3[index3] = arr2[i]
        index3 ++
        index4 = 0
        }
    }
    else{
        index4++
    }
    if (index4 > indexMax){
        indexMax = index4
    }
}
console.log(arr3)

var indexx = 0
for(i=0; i<arr3.length; i++){

    for(j = 0 ; j<arr1.length; j++){
        // console.log(arr3[i])
        // console.log(arr1[j])
        if(arr3[i] == arr1[j]){
            indexx++
        
        }
    }
}
indexx = indexx/splitNilai1.length
    console.log(indexx)