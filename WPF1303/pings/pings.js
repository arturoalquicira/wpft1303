

var isInState = function (ping, wantState) {
    var  state= ping["state"];
    return (state == wantState);
};
var isInCountry = function (ping,wantCountry) {
    var country = ping["cc"];
    return (country == wantCountry);
}

var minutes = function (seconds) {
    return Math.round(seconds / 60);
};

var shuffle = function (array) {
    for  (var itemNumber = 0; itemNumber < array.length; itemNumber++) {
         var target =  Math.floor(Math.random() * array.length);
        console.log("target: ", target);
        var temp = array[itemNumber];
        array[itemNumber] = array[target];
        array[target] = temp;
    }
    return array;
};

var onPings = function (pings) {
    pings = shuffle(pings);
    var  totalInFlorida = 0;
    var ageMax = 0;
    var ageMin = 99999999;
    var oldestState = "";
    var youngestCountry = "";

    for (var pingNumber = 0 ; pingNumber < pings.length ; pingNumber++) {
        var ping = pings[pingNumber]; // current ping
        var age = parseInt(ping["age_s"]);
       if ((age < ageMin) && !isInCountry(ping, "US")) {
           ageMin = age;
           youngestCountry = ping["cc"];

       }






//        if(isInState(ping, "FL")) {
//            totalInFlorida++;
//        } // if in FL
    } // for each ping
    console.log("Oldest: ", minutes(ageMin), " is from ", youngestCountry);

};

