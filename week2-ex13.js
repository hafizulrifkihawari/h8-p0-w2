function xo(str) {
    // you can only write your code here!
    let x = 0;
    let o = 0;
    for(var i = 0; i < str.length; i++){
        if (str[i] === "x"){
            x++
        } else if (str[i] === "o") {
            o++
        }
    }
    if (x === o){
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