function xo(str) {
    // you can only write your code here!
    let x = 0;
    for(i = 0; i < str.length; i++){
        if (str[i] === "x"){
            x++
        }
    }
    if (x*2 == str.length){
        return true;
    }
    return false;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true