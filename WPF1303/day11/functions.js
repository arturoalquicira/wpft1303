var dataMovies = [
    {
        "title" : "Snitch",
        "stars" : 4
    },
    {
        "title" : "Oz",
        "stars" : 3

    }

];

var averageRating = function (movies) {
    var movieCount = movies.length; // somethingCount to know how many items are in the array
    console.log("Ineed to find the average for ", movieCount, " movies.");
    var movieNumber = 0; // somethingNumber to keep track of which item in the array we're looking for
    var starTotal = 0;
    while (movieNumber < movieCount) { // until somethingNumber meets the somethingCount
        var movie = movies[movieNumber]; //something to keep track of the ENTIRE item
        var stars = movie["stars"]; // get out the part we're interested in
        starTotal += stars; // do some math with it
        console.log("Movie ", movieNumber, " = ", movie, " star total =", starTotal);
        movieNumber++; // CRITICAL: update our number so the loop isn't infinite
    } // while
    var starAvg = starTotal / movieCount;
    return starAvg; // return whatever we were looking for
};

averageRating = function (movies) {
    for (var movieCount = movies.length, movieNumber = 0, starTotal = 0 ; // setup
         movieNumber < movieCount ; // condition to continue
         movieNumber++) // after each run through the loop
    {
        starTotal += movies[movieNumber]["stars"]; //magic
    }
    var starAvg = starTotal / movieCount; // magic
    return starAvg; // return whatever we were looking for
};
averageRating = function (movies) {
    var starTotal = 0; // setup
    movies.forEach(function(movie) { // JS calls this function once for each item
        console.log("Movies",movie); // shows what is in the array
        starTotal += movie["stars"]; // magic
    });
        return starTotal / movies.length; // magic
};



var avgRating = averageRating(dataMovies);
console.log("Average stars = ", avgRating);

