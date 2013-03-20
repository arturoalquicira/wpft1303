




var largestPalindrome = 0;
// Loop over all numbers
for (var firstNumber = 1 ; firstNumber <= 999 ; firstNumber++ ) {
    // loop over all numbers /// again!
    for (var secondNumber = 1 ; secondNumber <= 999 ; secondNumber++ ) {
        // multiply them together
        var result = firstNumber * secondNumber;
        // convert to a string
        result += "";
        var isPalindrome = true;
        // See if the result is a palindrome
        for (var stringIndex = 0; stringIndex < result.length / 2; stringIndex++ ){
            var firstCharacter = result.charAt(stringIndex);
            var lasCharacter = result.charAt(result.length - stringIndex - 1);
            if (firstCharacter !== lasCharacter) {
                isPalindrome = false;
            } // if is palindrome
        } // for stringIndex
        // If it is, is it the biggest we've seen?
        if (isPalindrome && (Math.floor(result) > Math.floor(largestPalindrome))) {
            largestPalindrome = result;
        } // if palindrome
    } // for secondNumber
} // for firstNumber
console.log("The largest palindrome is: " + largestPalindrome);



// See if the result is a palindrome

// If so, output it

