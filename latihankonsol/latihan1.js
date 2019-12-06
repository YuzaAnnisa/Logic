var lat1 = require("readline-sync")
var pulsa = lat1.question("masukkan jumlah pulsa : ")
var point = 0

/*cara1 
if(parseInt(pulsa)<=10000){
    console.log("point = 0")
}else if(parseInt(pulsa)<=30000){
    point = (parseInt(pulsa)-10000/1000)
    console.log("point = " +point)
}else {
    point = (((parseInt(pulsa)-30000)*2)/1000)+20
    console.log("Point = " +point)
}*/

//cara 2
if(parseInt(pulsa)<=10000){
    point = point
}else if(parseInt(pulsa)<=30000){
    point = (parseInt(pulsa)-10000)/1000
}else {
    point = (((parseInt(pulsa)-30000)*2)/1000)+20
}
console.log("point=  " +point)