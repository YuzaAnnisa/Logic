var rl = require("readline-sync")
var n = parseInt( rl.question("Masukan Nilai Panjang Tangga : "))
if (n > 0 && n <= 100 ){
    for (i = 0; i < n; i++ ){
        var x = ""
        for (k = 0; k < n; k++){
            if (i+k < n-1){
                x+=" " 
            }
            else{
               x+="#"
            }
        }console.log(x)
        //console.log("".repeat(parseInt(n)-i) + "#".repeat(i))
        //console.log("#".repeat(i).padStart(n));
    }   
}
