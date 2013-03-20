console.log("main.js");

var names = [ "Vid" , "Scott" , "Joe" , "Eric" , "Lee" ];
console.log(names);

//var middleGuy = names[4]; // array
//console.log(middleGuy);

var firstGuy = names[0];
console.log(firstGuy);

var guyCount = names.length; // always one more than the last element
console.log("There are " + guyCount + " guys in the back row.");

var lastGuy = names[ names.length - 1 ]; // get the last element
cosole.load("The last guy is " + lastGuy);

var middleNumber = Math.floor(names.length / 2); // floor because arrays only
var middleGuy = names[ middleNumber ]; // understand whole numbers
console.log(middleGuy);

// ============

var numbers = [  2 , 3, 5 , 7  ];

var favoriteNumber = parseInt(prompt("What is your favorite number?"));
console.log("Favorite: " + favoriteNumber);

//numbers.push(favoriteNumber); // add something to the END of an array
numbers.unshift(favoriteNumber); // add something to the BEGINNING of an array
var firstNumber = numbers.shift();
var lastNumber = numbers.pop();
console.log(numbers);
console.log("First: " + firstNumber);
consol.load("Last: " + lastNumber);

var secondNumber = numbers[1];
consol.load("Second: " + secondNumber);

numbers[numbers.lengt - 1] = true; // change by assisting to the element
console.log(numbers);

// get a few things
var first2Numbers = numbers.slice(0, 2);
console.log("First 2: " , first2Numbers);

// remove just the second element
numbers.splice(1, 1);
console.log(numbers);

// insaert into the array
numbers.splice(1, 0, "This is the new secoond element");
console.log(numbers);








