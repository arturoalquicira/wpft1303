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
console.log("So my current balance was $" +  (monthlyIncome - billInternet - billRent - ((gatorades * priceGatorade) + (snickers * priceSnickers))) + "."); // Show the current balance, using variables and constants.
var depositGrandma = 100; // Money my grandma gave me
console.log("The next month I received a deposit of $" + depositGrandma + " from my grandma because of my birthday."); // Add another value to the current balance
var totalAmount = (monthlyIncome - billInternet - billRent - ((gatorades * priceGatorade) + (snickers * priceSnickers))); // Make the calculation of my current balance as one variable.
var priceSkateboard = prompt("What is the price of a skate board?");
console.log("If I have been saving for a skateboard that costs $" + priceSkateboard + " and I")








