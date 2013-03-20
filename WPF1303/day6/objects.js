var numberVariable = 1234.567;
var stringVariable = "I am a string";
var booleanVariable = true;
var arrayVariable = [ 1, 2, "three" ];
var objectVariable = { // key/value storage
       // key     : value
        "name"    : "Arturo",
        "day"     : 6,
        "awesome" : true,
         "a b c"  : ["a" , "b" , "c" ],
          "3.1416" : "pi"


 };


var me = {
    "name"      : "Arturo Alquicira",
    "age"       : 99,
    "music"     : "Justin Bieber",
    "clothes"   : [
                  "blue jeans",
                  "jacket",
                  "hat",
        {
            "left sock"  : "blue",
            "right sock" : "white"
        }
    ],
    "courses"   : {
        "WPF" : "Web programming Fundamentals",
        "PWA" : "Programming for web Applications"

    }

};

// in : checks if a string is a key in an object
var lookingFor = "food";
if (lookingFor in me) {
    console.log("My age is: " + me[lookingFor]);
} else {
    console.log("I am immortal.");
}

me["awesome"] = true; // add an item to an object using array bracket syntax
console.log("Awesome> " + me["awesome"]);

delete me["awesome"]; // remove item from an object using delete
console.log(me);

// loop over objects with for .. in
for (var keyName in me) {
    var value = me[keyName];
    console.log(keyName + " = " + value);
}// for inn

var thingCount = me.length;
console.log("Count: " + thingCount); // object.length doesn't work


