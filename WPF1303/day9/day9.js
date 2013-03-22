

var compareTwo = function (a, b) {
    if (a > b) { return 1;}
    if (a < b) { return -1;}
    return 0;
};

console.log("compare: " + compareTwo(4,6));


var prices = [ 2.99, 2.49, 3.09, 9.99, 0.99];
console.log("prices: ", prices);
var  sortedPrices = prices.sort(compareTwo);
console.log("sorted prices:", sortedPrices);

var sortByKey = function (keyName, objectA, objectB) {
    if (objectA[keyName] > objectB[keyName]) {return 1;}
    if (objectA[keyName] < objectB[keyName]) {return -1;}
    return 0
};

var sortByName = function (objectA, objectB) {
    return sortByKey("name", objectA, objectB);
};

var sortByPrice = function (objectA, objectB) {
    return sortByKey("price", objectA, objectB);
};

var sortByAisle = function (objectA, objectB) {
    return sortByKey("aisle", objectA, objectB);
};

var sortGenerator = function (keyName) {
    console.log("Generating sort for " + keyName);
    return function (objectA, objectB) {
        var valueA = objectA[keyName];
        var valueB = objectB[keyName];
        console.log(("Comparing " + valueA + " to " + valueB));
        if (valueA > valueB) { return 1; }
        if (valueA < valueB) { return -1; }
        return 0;
    }
};

var groceries = [
    { "name" : "eggs",   "price" : 2.50, "aisle" : 2},
    { "name" : "milk",   "price" : 4.00, "aisle" : 1},
    { "name" : "butter", "price" : 0.99, "aisle" : 13},
    { "name" : "gumball",   "price" : 0.74, "aisle" : 1},
    { "name" : "ringPop",   "price" : 0.25, "aisle" : 1}
];
//console.log("sorted groceries: " , groceries.sort());
//console.log("sorted groceries: ", groceries.sort(sortByPrice));

console.log(groceries);
//console.log("sorted groceries by name: ", groceries.sort(sortByName));
////console.log("sorted groceries by aisle: ", groceries.sort(sortByAisle));
//console.log("sorted groceries by price: ", groceries.sort(sortByPrice));

console.log("sorted groceries by price: ", groceries.sort(sortGenerator("price")));
console.log("sorted groceries by name: ", groceries.sort(sortGenerator("name")));

//var cheapGroceries = function (groceries) {
//  var cheap = [];
//    for (var itemNumber = 0; itemNumber < groceries.length; itemNumber++) {
//        var item = groceries[itemNumber];
//        if (item["price"] < 1) {
//            cheap.push(item);
//        }
//    }
//    return cheap;
var cheapGroceries = function (groceries) {
    var cheap = [];
    groceries.forEach(function(item) {

        if (item["price"] < 1) {
            cheap.push(item);
        }
    });
    return cheap;
};
console.log("cheap groceries" , cheapGroceries(groceries));

var expensiveGroceries = function (groceries) {
    var expensive = [];
    groceries.forEach(function(item) {
    if(item["name"] > 1) {
        expensive.push(item);
    }
});
    return expensive;
};
console.log("expensive groceries" , expensiveGroceries(groceries));

groceries.forEach(function(item, itemNumber) {
    if (itemNumber % 2 !== 0) {
console.log(item["name"]);
    }
});

var oddGroceries = groceries.filter(function(item, itemNumber){
    return (itemNumber % 2 !== 0);
});
console.log("odd groceries", oddGroceries);

var oddGroceryNames = oddGroceries.map(function(item) {
    item.price *= 1.07;
    return item;
});
console.log(oddGroceryNames);





