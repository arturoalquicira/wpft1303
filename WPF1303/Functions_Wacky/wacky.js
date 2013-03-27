var tennis = [
    {
        "model" : "vans",
        "color" : "black",
        "size"  : 7.5,
        "price" : 27
    },
    {
        "model" : "nike",
        "color" : "red",
        "size"  : 9.5,
        "price" : 35
    },
    {
        "model" : "adidas",
        "color" : "blue",
        "size"  : 10,
        "price" : 30
    },
    {
        "model" : "rebook",
        "color" : "red",
        "size"  : 9.5,
        "price" : 24
    }
];
var howMuch = parseInt(prompt("How much do you want to spend on a new pair of shoes?"));
var whatSize = parseInt(prompt("What size are you?"));
var newTennis = function(tennis){
    for (var tennisNumber = 0; tennisNumber < tennis.length; tennisNumber++){
        var modelOfTennis = tennis[tennisNumber];
        if ((modelOfTennis["size"] <= whatSize ) && (modelOfTennis["price"] <= howMuch)){
            return modelOfTennis;
        }

    }

    console.log("Sorry you need to bring more money!");

};

var myTennis = newTennis(tennis);
console.log("This model is available for you: ", myTennis);
