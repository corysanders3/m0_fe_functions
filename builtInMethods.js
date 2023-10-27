// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The .includes is used to check if the string includes the word within the includes parenthesis. 
// The return value is true
console.log ("Hello World".includes("Hello"));

// The .endsWith is used to check if the string ends with the word within the endsWith parenthesis.
// The return value is false
console.log ("Hello World".endsWith("Hello"));

// The .endsWith is used to check if the string ends with the word within the endsWith parenthesis.
// The return value is false
console.log ("Hello World".endsWith("rld"));



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

//The slice method is called on the name variable, which is storing the string Cory Sanders.
//The slice method will remove the amount of characters that are listed within the slice.
//In this example, the return is Sanders, as the first 5 characters have been removed from the string.
var name = "Cory Sanders"

console.log (name.slice(5));

//The length method is called on the school variable, which store the string Turing.
//The length method will return the amount of characters that are in the string.
//In this example, the return is 6, as that is the amount of characters in the string.
var school = "Turing"

console.log (school.length)

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.


//The shift method is called on the footballTeams variable, to create a new variable titled firstTeam.
//The shift method removes the first value of the array, and returns that removed value.
//The expected outcome is for the variable firstTeam to show the value Bears, and for that value to be removed from the original variable.
var footballTeams = ["Bears", "Panthers", "Lions", "Broncos"]
var firstTeam = footballTeams.shift();
console.log (footballTeams)
console.log (firstTeam)

//The concat method is called on the expensiveTickets and cheapTickets variables.
//The concat method is used to merge two or more arrays.
//In this case, it has merged the expensiveTickets and cheapTickets into a new variable, allTickets.
//The expected outcome will be that all 6 values are listed when we call on the allTickets variable.
var expensiveTickets = [500, 550, 600];
var cheapTickets = [100,150,200];
var allTickets = expensiveTickets.concat(cheapTickets);
console.log (allTickets)
