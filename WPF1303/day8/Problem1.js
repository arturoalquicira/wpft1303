var isMultipleOf =  function (largerNumber , smallerNumber) {
    var isIt = (largerNumber % smallerNumber) == 0;
    return isIt;
};

var problem5 = function(targetNumber) {
    // parameters are the things we need to do the work
    var answer = 0;
    // Loop from 1 to 1000
    for (var currentNumber = 1; currentNumber < targetNumber; currentNumber++ ) {
        // is it a multiple of 3 or 5?
        if (isMultipleOf(currentNumber , 3) || isMultipleOf(currentNumber , 5)) {
            // YES: add it up
            answer += currentNumber;
        } // if
    } // for currentNumber
    return answer;
}; // function problem5

var answerFor1000 = problem5(1000);
console.log("the answer for 1000 is: " , answerFor1000);
