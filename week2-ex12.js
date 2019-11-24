function konversiMenit(menit) {
    // you can only write your code here!
    let mm = menit % 60;
    let hh = Math.floor(menit / 60);
    if (mm < 10){
        return hh + ":0" + mm;
    }
    return hh + ":" + mm;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00