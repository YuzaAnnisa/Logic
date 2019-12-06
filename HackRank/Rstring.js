var st = require("readline-sync")

var kata = st.question("Masukkan huruf = ")
var arr = kata.split('');
    for (var i = 0; i < arr.length; i++) {     
      if (arr[i] == arr[i + 1]) {
        arr.splice(i, 2);// (i=banyak index)(2 = banyak string yg dihapus)
        i=-1;//agar selalu mulai dari 0
    }
}
    if (arr.length == 0 && arr.length == '') {
        console.log('Empty String');
    } else {
    console.log(arr.join(''));
    }
// ctrl+k+c, ctrl+k+u, ctrl+?
