// we're going to start at 1, and keep looking for numbers
var foundIt = false;
var number = 1;
var target = 20;
while (!foundIt) { // keep looking until we find the right number
    // loop from 1 to 10 (or 20)
    var gotRemainder = false; // assume no remainders
    for (var i = 1; (i <= target) && !gotRemainder; i++) { // try each number
        // check for remainders
        gotRemainder = ((number % i) !== 0); // is it divisible by that number?
    }
    // if no remainders EVER
    if (!gotRemainder) { // if we never got any remainders
        // this is the number we want
        foundIt = true; // we found it!
    } else { // trey the next number
        number++;
    }

}

console.log(number);



