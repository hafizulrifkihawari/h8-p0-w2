var rows1 = 5; // input the number of rows

// do loops to display asterisks in the console.
while (rows1 > 0){
    console.log("*");
    rows1--;
}

console.log();

var rows2 = 5; // input the number of rows

// do loops to display asterisks in the console.
let res = "";
for(rows2; rows2 > 0; rows2--){
    for(var cols2 = 5; cols2 > 0; cols2--){
        res += "*"
    }
    res += "\n"
}
console.log(res);

var rows3 = 5; // input the number of rows

res = "";
for(rows3; rows3 > 0; rows3--){
    for(var cols3 = 5; cols3 >= rows3; cols3--){
        res += "*"
    }
    res += "\n"
}
console.log(res);
// do loops to display asterisks in the console.