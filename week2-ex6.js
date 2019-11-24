// Looping Menggunakan WHILE

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

// Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA")
for(var num = 1; num <= 20; num++) {
    console.log(num + " - I love coding")
}
console.log("LOOPING KEDUA")
for(var num = 20; num > 0; num--) {
    console.log(num + " - I will become fullstack developer");
}

// GANJIL GENAP

for (i = 1; i <= 100; i++){
    if (i % 2 == 0){
        console.log("GENAP")
    } else {
        console.log("GANJIL")
    }
}

// KELIPATAN 3

for (i = 1; i <= 100; i+=2){
    if (i % 3 == 0){
        console.log(i + " KELIPATAN 3")
    }
}

// KELIPATAN 6

for (i = 1; i <= 100; i+=5){
    if (i % 6 == 0){
        console.log(i + " KELIPATAN 6")
    }
}

// KELIPATAN 10

for (i = 1; i <= 100; i+=9){
    if (i % 10 == 0){
        console.log(i + " KELIPATAN 10")
    }
}