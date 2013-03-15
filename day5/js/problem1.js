console.log("Problem 1:");

var total1 = 0;

for (var i = 0; i < 1000; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)){
        total1 += i;
    }
}
console.log(total1);


//////////////////////////


console.log("Problem 2:");

var max = 4000000;
var a = 1;
var b = 2;
var c = 0;
var total2 = 0;
var evenFibs = [];
while (a < max){
    c = a + b;
    if ((a % 2 == 0) && (a < max)) {
        total2 += a;
        evenFibs.push(a);
    }
    c = a + b;
    a = b;
    b = c;

}
console.log(total2);
console.log(evenFibs);


