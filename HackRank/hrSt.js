var rl = require("readline-sync")

var tem = "hackerrank"
var tem2 = "hackerrank"
var temp = tem.split("")
var temp2 = tem2.split("")

var array = new Array(10)
var array2 = new Array(10)

var cacah = 0
var cacah2 = 0
var cacah3 = 0

var input = rl.question("Input kata: ")
inputan = input.split("")

for (let i = 0; i < inputan.length; i++) {
    for (let j = 0; j < temp.length; j++) {

        if (temp[j] == inputan[i]) {

            array[cacah] = inputan[i]
            tem = tem.replace(temp[j], "*")

            cacah++
            break

        }

    }

}

var filtered = array.filter(function (el) {
    return el != null;
});

filter = filtered

if (filter.length >= 10) {
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < temp2.length; y++) {

            // console.log("====")
            if (array[x] == temp2[y]) {

                array2[cacah2] = array[x]
                array = tem2.replace(array[x], "*")
                cacah2++
                //     // console.log(array)
                break

            }

        }

    }

    for (let k = 0; k < 10; k++) {
        if (array2[k] == temp2[k]) {
            cacah3++
        }
    }

    if (cacah3 == 10) {
        console.log("YES")
    } else {
        console.log("NO")
    }
} else {
    console.log("NO")
}