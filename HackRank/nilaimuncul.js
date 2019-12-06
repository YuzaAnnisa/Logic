var rl = require('readline-sync')
var n = rl.question('masukan data = ')
var data = []
for(let i = 0; i < n; i++){
    data[i] = rl.question('masukan nilai = ')

}
console.log(data)
var putar

//Mengurutkan data
function bubble(data){
do {
    putar = false
    for(let a = 0; a < n - 1; a++){
        if(data[a] > data[a+1]){
            var hasil = data[a]
            data[a] = data[a+1]
            data[a+1] = hasil
            putar = true
        }
    }
}
while(putar)
return data
}
var x = bubble(data)

//Mencari kemunculan data tiap index
var terbesar = 0
var array = []
for(let j = 0; j < n; j++){
    var cacah =  0
    
    for(let h = 0; h < n; h++){
    if(x[j] == x[h]){
        cacah++
    }   
}
    array[j] = cacah

    if(cacah >= terbesar){
        terbesar = cacah
    }
}
console.log(array)
//Memilih data dengan kemunculan terbanyak
var array2 = []
cacah2 = 0;
for(let b = 0; b < n; b++){
    if(array[b] == terbesar ){
        array2[cacah2] = x[b]
        cacah2++
    }
}

//mengapus duplicate data 
var duplicate = Array.from(new Set(array2))

//menanpilkan hasil akhir
console.log('hasil sorting = ' + x)
console.log('angka yg muncul lebih dari 1 = ' + array2)
console.log('nilai yang terbanyak muncul = ' + duplicate)
console.log('hasil = ' + duplicate[0])


//console.log(nol,satu, dua, tiga, empat, lima, enam, tujuh, delapan, sembilan)
