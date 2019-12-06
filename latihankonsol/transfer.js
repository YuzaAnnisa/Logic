var tf = require("readline-sync")
var fee = 7500
var Nominal = 0
var jml = 0
var rek = 0
const c = 1234546
var saldo = 0
flag =true
while(flag){

var p = tf.question("Masukkan No Pin Anda : ")
if ( p!= c){
    console.log("Pin Anda Salah!!")
}else {
    console.log("1. Transfer Tunai")
    console.log("2. Informasi Saldo")
    var menu = tf.question("Pilih Transaksi yang ingin dilakukan: ")
    if(menu == '1'){
            console.log ("a. Antar Rekening")
            console.log("b. Antar Bank")
            var pilih = tf.question("pilih metode transfer : ")
            if(pilih == 'a'){
                var rek = tf.question("Masukkan Nomor Rekening : ")
                if(parseInt(rek).lenght>10){
                    console.log("Nomor rekening salah!" )
                }else{
                    var nom = tf.question("Masukkan Nominal yang ingin dikirim : ")
                    if(parseInt(nom)>jml){
                        console.log("Saldo anda tidak cukup!")
                        var ask = tf.question("Ingin Melakukan setor tunai? (yes/no): ")
                        if(ask == 'yes'){
                            var s2 = tf.question("Masukkan Jumlah Uang yang ingin ditransfer: ")
                            jml = saldo + parseInt(s2)
                            console.log("Setor tunai berhasil!")
                            console.log("Jumlah saldo anda : "+jml)
                        }
                    }else{
                        total = jml - parseInt(nom)
                        console.log("Transfer berhasil!")
                        console.log("Sisa Saldo Anda adalah = "+total)
                        var konfirm = tf.question("Ingin Melakukan Transaksi (yes/no): ")
                        if(konfirm.toLowerCase()==0){
                            flag = false
                        }
                 }  
            }  
        }if(pilih == 'b'){
            var bank = tf.question("Masukkan kode bank : ")
                var rek = tf.question("Masukkan Nomor Rekening : ")
                var nom = tf.question("Masukkan Nominal yang ingin dikirim : ")
                if(parseInt(nom)>jml){
                    console.log("Saldo anda tidak cukup!")
                    var ask1 = tf.question("Ingin Melakukan setor tunai? (yes/no): ")
                        if(ask1 == 'yes'){
                            var s2 = tf.question("Masukkan Jumlah Uang yang ingin ditransfer: ")
                            jml = (s2 + saldo)
                            console.log("Setor tunai berhasil!")
                            console.log("Jumlah saldo anda : "+jml)
                        }
                } else{
                    console.log("Transfer berhasil!")
                    total = jml-nom-fee
                    console.log("Sisa Saldo Anda adalah = "+total)
                    var konfirm = tf.question("Ingin Melakukan Transaksi (yes/no): ")
                    if(konfirm.toLowerCase()==0){
                        flag = false
                    }
                }
        }    
           
    }else if(menu=='2'){ 
       console.log("sisa saldo anda adalah : "+jml)
    }
}
}