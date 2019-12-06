var rl = require('readline-sync');

function genap(a) {

    var array4 = [];
    var tmp = 0;

    for (var i = 2; i < a; i++) {

        if (i % 2 == 0) {
            array4[tmp] = i;
            tmp++;
        }

    }
    return array4;
}

function ganjil(z) {
    var array3 = [];
    var ganjil = 1;

    array3[0] = 1;

    for (let i = 1; i < z; i++) {

        array3[i] = ganjil += 2;
    }

    return array3;
}


function prima(y) {

    let array2 = [];
    m = 0;

    for (let i = 1; i < y; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {

            if (i % j == 0) {
                count++;
            }

        }

        if (count == 2) {
            array2[m] = i;
            m++;
        }

    }

    return array2;
}

function fibonacci(x) {

    let a = 1;
    let b = 0;
    let c = 0;

    let array = [];

    for (let i = 0; i < x; i++) {

        c = a + b;
        a = b;
        b = c;

        array[i] = c;
    }

    return array;

}

flag = true;
var flagGenap = 0;
var flagGanjil = 0;
var flagPrima = 0;
var flagFibonacci = 0;

var cacah = 0;

var deretGenap = [];
deretGenap = genap(20);


var deretGanjil = [];
deretGanjil = ganjil(20);

var deretPrima = [];
deretPrima = prima(20);

var deretFibonacci = [];
deretFibonacci = fibonacci(20);




console.log("1. Genap");
console.log("2. Ganjil");
console.log("3. Prima");
console.log("4. Fibonacci");


while (cacah < 2) {
    pilih = rl.question("Pilih: ");


    switch (pilih) {

        case '1':
            flagGenap = 1;
            break;

        case '2':
            flagGanjil = 1;
            break;

        case '3':
            flagPrima = 1;
            break;

        case '4':
            flagFibonacci = 1;
            break;


    }

    cacah++;

}

var i = 0;

var arrayTotal = [];


if (flagGenap == 1 && flagGanjil == 1) {

    for (i = 0; i < 5; i++) {

        arrayTotal[i] = deretGenap[i] + deretGanjil[i];

    }

    console.log("Genap");
    for (i = 0; i < 5; i++) {
        console.log(" " + deretGenap[i]);
    }

    console.log("Gajil");
    for (i = 0; i < 5; i++) {
        console.log(" " + deretGanjil[i]);
    }

    console.log("Total");

    for (i = 0; i < 5; i++) {
        console.log(" " + arrayTotal[i]);
    }

}

if (flagGenap == 1 && flagPrima == 1) {

    for (i = 0; i < 5; i++) {

        arrayTotal[i] = deretGenap[i] + deretPrima[i];

    }

    console.log("Genap");
    for (i = 0; i < 5; i++) {
        console.log(" " + deretGenap[i]);
    }

    console.log("Prima");

    for (i = 0; i < 5; i++) {
        console.log(" " + deretPrima[i]);
    }

    console.log("Total");

    for (i = 0; i < 5; i++) {
        console.log(" " + arrayTotal[i]);
    }

}

if (flagGenap == 1 && flagFibonacci == 1) {

    for (i = 0; i < 5; i++) {

        arrayTotal[i] = deretGenap[i] + deretFibonacci[i];

    }

    console.log("Genap");
    for (i = 0; i < 5; i++) {
        console.log(" " + deretGenap[i]);
    }

    console.log("");
    console.log("Fibonacci");

    for (i = 0; i < 5; i++) {
        console.log(" " + deretFibonacci[i]);
    }

    console.log("");
    console.log("Total: ");

    for (i = 0; i < 5; i++) {
        console.log(" " + arrayTotal[i]);
    }

}
if (flagGanjil == 1 && flagPrima == 1) {

    for (i = 0; i < 5; i++) {

        arrayTotal[i] = deretGanjil[i] + deretPrima[i];

    }

    console.log("Ganjil");
    for (i = 0; i < 5; i++) {
        console.log(" " + deretGanjil[i]);
    }

    console.log("Prima");

    for (i = 0; i < 5; i++) {
        console.log(" " + deretPrima[i]);
    }

    console.log("Total: ");

    for (i = 0; i < 5; i++) {
        console.log(" " + arrayTotal[i]);
    }

}

if (flagGanjil == 1 && flagFibonacci == 1) {

    for (i = 0; i < 5; i++) {

        arrayTotal[i] = deretGanjil[i] + deretFibonacci[i];

    }


    console.log("Ganjil");

    for (i = 0; i < 5; i++) {
        console.log(" " + deretGanjil[i]);
    }

    console.log("Fibonacci");

    for (i = 0; i < 5; i++) {
        console.log(" " + deretFibonacci[i]);
    }

    console.log("");
    console.log("Total: ");

    for (i = 0; i < 5; i++) {
        console.log(" " + arrayTotal[i]);
    }

}

if (flagPrima == 1 && flagFibonacci == 1) {

    for (i = 0; i < 5; i++) {

        arrayTotal[i] = deretPrima[i] + deretFibonacci[i];

    }


    console.log("Prima");
    for (i = 0; i < 5; i++) {
        console.log(" " + deretPrima[i]);
    }

    console.log("Fibonacci");

    for (i = 0; i < 5; i++) {
        console.log(" " + deretFibonacci[i]);
    }



    console.log("Total: ");
    for (i = 0; i < 5; i++) {
        console.log(" " + arrayTotal[i]);
    }

}