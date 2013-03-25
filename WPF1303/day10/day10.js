var cars = [
    {
        "name"  : "Ranger",
        "mpg"   : 19,
        "miles" : 212000,
        "model" : 1993
    },
    {
        "name"  : "RX330",
        "mpg"   : 20,
        "miles" : 140000,
        "model" : 2004
    },
    {
        "name"  : "Outback",
        "mpg"   : 27,
        "miles" : 42000,
        "model" : 2009
    }
];
var tco = function (totalMiles, age, maintYear, mpg){
    var gasDollar = (totalMiles * mpg);
    var maintDollar = (age * maintYear);
    return  (maintDollar + gasDollar);
};

var pickACar = function (cars){

    for (var carNumber = 0; carNumber < cars.length; carNumber++){
       var car = cars[carNumber];
        if ((car["miles"] < 100000) && (car["model"] > 2005) && (tco(100, 5, 200, car["mpg"]) < 5000)){
            return car;
        }
    }
    return false;

};
var myCar = pickACar(cars);
console.log(myCar);


var totalCost = tco(100, 5, 200, 20);
