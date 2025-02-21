// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'HypeScript';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
console.log(spacecraftName + " will take " + daysToMars + " days to get to Mars!!");
var MintChocolateChip = {
    flavor: 'Mint Chocolate Chip',
    texture: 'Melty',
    calories: 100,
    toppings: ['Chocolate Chips', 'Whipped Cream']
};
var mCCFlavor = MintChocolateChip.flavor;
var scoopIceCream = function (_a) {
    var flavor = _a.flavor;
    console.log(flavor + " has been scooped.");
};
scoopIceCream(MintChocolateChip);
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
