var i = 0;
console.log("LOOPING PERTAMA")
while(i < 20) {
    console.log(i + " - I love coding");
    i += 2;
}

console.log("LOOPING KEDUA")
while(i > 0) {
    console.log(i + " - I will become fullstack developer");
    i -= 2;
}


// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 18 - I will become fullstack developer                                                                              
// 16 - I will become fullstack developer
// 14 - I will become fullstack developer
// 12 - I will become fullstack developer
// 10 - I will become fullstack developer
// 8 - I will become fullstack developer
// 6 - I will become fullstack developer
// 4 - I will become fullstack developer
// 2 - I will become fullstack developer

console.log("LOOPING PERTAMA")
for(var num = 1; num <= 20; num++) {
    console.log(num + " - I love coding")
}
console.log("LOOPING KEDUA")
for(var num = 20; num > 0; num--) {
    console.log(num + " - I will become fullstack developer");
}

// LOOPING PERTAMA
// 1 - I love coding
// 2 - I love coding
// 3 - I love coding
// 4 - I love coding
// 5 - I love coding 
// 6 - I love coding
// 7 - I love coding
// 8 - I love coding
// 9 - I love coding
// 10 - I love coding
// 11 - I love coding
// 12 - I love coding 
// 13 - I love coding
// 14 - I love coding
// 15 - I love coding
// 16 - I love coding
// 17 - I love coding
// 18 - I love coding
// 19 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 19 - I will become fullstack developer
// 18 - I will become fullstack developer
// 17 - I will become fullstack developer
// 16 - I will become fullstack developer
// 15 - I will become fullstack developer
// 14 - I will become fullstack developer
// 13 - I will become fullstack developer
// 12 - I will become fullstack developer
// 11 - I will become fullstack developer
// 10 - I will become fullstack developer
// 9 - I will become fullstack developer
// 8 - I will become fullstack developer
// 7 - I will become fullstack developer
// 6 - I will become fullstack developer
// 5 - I will become fullstack developer
// 4 - I will become fullstack developer
// 3 - I will become fullstack developer
// 2 - I will become fullstack developer
// 1 - I will become fullstack developer

for (i = 1; i <= 100; i++){
    if (i % 2 == 0){
        console.log("GENAP")
    } else {
        console.log("GANJIL")
    }
}

for (i = 1; i <= 100; i+=2){
    if (i % 3 == 0){
        console.log(i + " KELIPATAN 3")
    } else {
        console.log("")
    }
}

for (i = 1; i <= 100; i+=5){
    if (i % 6 == 0){
        console.log(i + " KELIPATAN 6")
    } else {
        console.log("")
    }
}

for (i = 1; i <= 100; i+=9){
    if (i % 10 == 0){
        console.log(i + " KELIPATAN 10")
    } else {
        console.log("")
    }
}