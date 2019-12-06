var tf = require("readline-sync")
var fee = 7500
var jml = 0
var rek = 0
const c = 1234546
var saldo = 0
flag =true
while(flag){

var p = tf.question("Masukkan No Pin Anda : ")
if ( p!= c){
    console.log("Pin Anda Salah!")
}else {
    console.log("1. Transfer Tunai")
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
                            var jmls = saldo + parseInt(s2)
                            console.log("Setor tunai berhasil!")
                            console.log("Jumlah saldo anda : "+jmls)
                        }
                    }else{
                        p = tf.question("Masukkan No Pin Anda : ")
                        if ( p!= c){
                        console.log("Pin Anda Salah!")
                        }
                        total = jmls - parseInt(nom)
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
                            jmls = (s2 + saldo)
                            console.log("Setor tunai berhasil!")
                            console.log("Jumlah saldo anda : "+jml)
                        }
                } else{
                    p = tf.question("Masukkan No Pin Anda : ")
                    if ( p!= c){
                    console.log("Pin Anda Salah!")
                    }
                    console.log("Transfer berhasil!")
                    total = jmls-nom-fee
                    console.log("Sisa Saldo Anda adalah = "+total)
                    var konfirm = tf.question("Ingin Melakukan Transaksi (yes/no): ")
                    if(konfirm.toLowerCase()==0){
                        flag = false
                    }
                }
        }    
           
    }
}
}