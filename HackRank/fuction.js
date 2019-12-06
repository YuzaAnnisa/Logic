function fibonacci(k) {
    let x = 0;
    let y = 1;
  
    let arr = [];
  
    //console.log(y);
  
    for (let i = 0; i < k; i++) {
      let result = x + y;
  
      x = y;
      y = result;
      arr[i] = result;
  
      //console.log(result);
    }
    return arr;
  }
  
  function prima(k) {
    let deret_2 = [];
    let m = 0;
    for (let i = 1; i <= k; i++) {
      let count = 0;
  
      for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
          count++;
        }
      }
  
      if (count == 2) {
        deret_2[m] = i;
        m++;
      }
    }
  
    return deret_2;
  }
  
  function genap() {
    var genap = 0;
    for (let i = 0; i < 10; i++) {
      console.log(genap);
      genap += 2;
    }
  }
  
  function ganjil() {
    var ganjil = 1;
    for (let i = 1; i <= 10; i++) {
      console.log(ganjil);
      ganjil += 2;
    }
  }
  
  var deret = [];
  deret = fibonacci(5);
  console.log(deret);
  
  var deret_3 = [];
  deret_3 = prima(5);
  console.log(deret_3);
  
  for (let x = 0; x < 3; x++) {
    console.log(deret[x] + deret_3[x] + ",");
  }
  