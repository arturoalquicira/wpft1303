
var priceQuantity = prompt("How many pizzas you want to order ?");
var size = prompt("What size do you prefer? (small, medium or large)");
var topping = prompt("What topping you prefer? (pepperoni, salami or italian sausage)");
var totalAmount = function(priceQuantity, priceSize, priceTopping){



    if (size == "small"){
        priceSize = 6.50;
    } else if (size == "medium"){
        priceSize = 8.50;
    } else if (size == "large"){
        priceSize = 10.50;
    } else {
        console.log("We do not have that size, try again!");
    }



    if (topping == "pepperoni"){
        priceTopping = 2;
    } else if (topping == "salami"){
        priceTopping = 2;
    } else if (topping == "italian sausage"){
        priceTopping = 2;
    } else {
        console.log("We do not have that topping, try again!");
    }

    return answer = (parseInt(priceQuantity) * (priceSize + priceTopping));
};
var total = totalAmount(priceQuantity,size, topping);
console.log("Your total is: $" + total);


