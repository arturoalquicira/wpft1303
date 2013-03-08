const monthlyIncome = 1500; // The monthly income is constant
console.log("This month I had in my bank account $" + monthlyIncome + " dlls."); // I am using an expression
const billRent = 890; // The bill rent is constant
const billInternet = 62; // The bill internet is constant
console.log("Every month I have to pay the rent $" + billRent + " and internet services for $" + billInternet); // Giving information using rent and internet constants
console.log("But this month I spent my money in different things besides my regular bills."); // String
var priceGatorade = 3; // The price of each Gatorade
var gatorades = prompt("How many Gatorades?"); // Ask the user a random numer of gatorades
var priceSnickers = 2; // The price of each snickers
var snickers = prompt("How many snickers?"); // Ask the user a random number of gatorades
console.log("The first week I bought " + gatorades + " Gatorades and " + snickers + " Snickers."); // Giving info using the values of the prompts
console.log("So my current balance was " +  (monthlyIncome - ((gatorades * priceGatorade) + (snickers * priceSnickers)))); //



