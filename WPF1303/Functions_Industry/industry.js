var price1 = 0;
var price2 = 0;
var priceQuantity = prompt("How many pizzas you want to order ?");
var size = prompt("What size do you prefer? (small, medium or large)");
var topping = prompt("What topping you prefer? (pepperoni, salami or italian sausage)");
var totalAmount = function(priceQuantity, priceSize, priceTopping){



        if (size == "small"){
        price1 = 6.50;
    } else if (size == "medium"){
        price1 = 8.50;
        } else if (size == "large"){
            price1 = 10.50;
        } else {
            console.log("We do not have that size, try again!");
        }



        if (topping == "pepperoni"){
            price2 = 2;
        } else if (topping == "salami"){
            price2 = 2;
        } else if (topping == "italian sausage"){
            price2 = 2;
        } else {
            console.log("We do not have that topping, try again!");
        }

    return answer = (parseInt(priceQuantity) * (price1 + price2));
};
var total = totalAmount(priceQuantity,price1,price2);
console.log("Your total is: $" + total);




