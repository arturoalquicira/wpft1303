var time = prompt("How many hours do you think Arturo rides his bike?"); // ask the user for a value
console.log("Arturo has been riding his bike last week to make some exercise. " +
"If he reaches out an average speed of 10 m/h, and last week he rode his bike for " + time + " hours."); // expression
console.log("Is he making it worth?"); // string
var distance = function( time, speed) { // function with two parameters
    var answer = (parseInt(time) * speed); // calculate the values
    if ( answer >= 15 ) { // if statement
        console.log("He is working out!"); // print out a string
    } else { // add an else statement
        console.log("He has been such a lazy guy!"); // print out the else statement
    } // else
}; // function
distance(time,6); // call the function

