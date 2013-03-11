console.log("Your first job will be at Instagram."); // String
console.log("The first task they will ask you is to fix a bunch of photographs of a bunch of users for a pilot version."); // String
var numberofPhotos = 200;// Variable for number of photos to modify
console.log("Part of this task will be to modify the code and make some upgrades of " + numberofPhotos + " photos."); // Giving information with a variable
const deadline = 6; // Add a constant for the due.
console.log("Your supervisor told you that this task cannot take you more than " + deadline + " hours to complete"); // Add a constant to the information
var timeperpic = 2; // Add a time variable
const timeForLunch = prompt("How many hours you spend on having your lunch?");
console.log("But you have realized that every photo you modify takes you 2 mins."); // String
console.log("If you spend " + timeForLunch + " hours/minutes on having your lunch, do you think you will finish your work on time?"); // Add the value of the prompt
var totalAmountOfTime = ((numberofPhotos * timeperpic) + timeForLunch); // Calculate the time it will take for you to finish your work
if (totalAmountOfTime  > 6)
{
    console.log("The answer is NO!!.")
} else {
    console.log("The answer is YES!!")
}







