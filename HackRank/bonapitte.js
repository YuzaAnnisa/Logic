var rl = require("readline-sync")

var itemCost = []
// var allCost = 0

//Memasukkan jumlah item
var item = rl.question("Masukkan Jumlah item yang dipesan: ")

// Memasukkan harga item
for (let i = 0; i < item; i++) {
    itemCost[i] = parseInt(rl.question("Jumlah harga untuk item index ke-" + i + ": "))
    // allCost = allCost + itemCost[i]
}

//Anna memilih item berdasarkan index
console.log("")
var notEat = rl.question("Pilih Item yang ditolak Anna: ")

//Menghitung total item yang dimakan oleh Brian & Anna 
var sharedItems = 0
for (let j = 0; j < item; j++) {
    if (j != notEat) {
        sharedItems = sharedItems + itemCost[j]
    }
}

// yang harus dibayar anna
var sharedResult = sharedItems / 2
console.log("")
console.log("Yang harus dibayar Anna setelah total adalah " + sharedResult)

//Tagihan yang diberikan Brian kepada Anna
console.log("")
var bill = rl.question("Jumlah tagihan yang diminta Brian ke Anna: ")
console.log("")

//Bon Apetit
if (sharedResult == bill) {
    console.log("Bon Apetit!")
} else if (sharedResult > bill) {
    console.log("Tagihan kurang")
    console.log(bill = bill - sharedResult)
} else if (sharedResult < bill) {
    console.log("Tagihan lebih")
    console.log(bill = bill - sharedResult)
}