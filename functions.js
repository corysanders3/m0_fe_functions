// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Hello friend";
}

console.log(greeting());


// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) { 
    return `Hey, ${name}!`
  }
  console.log (customGreeting ("Terry"));


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson (firstName, middleName, lastName) {
    return `Really nice to meet you, ${firstName} ${middleName} ${lastName}`
}
console.log (greetPerson ("Sean", "William", "Scott"))




// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square (num1){
    return Math.sqrt (num1)
}

console.log (`The correct number is ${square (81)}.`)



// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

// checkStock(4, "Coffee");
// // => "Coffee is stocked"

// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// // => "Salsa - running LOW"

function checkStock (coffee, tortillas, cheese, salsa){

if (coffee >= 4){
    console.log ('Coffee is stocked.')
} else if (coffee >= 1){
    console.log ('Coffee - running LOW')
 } else {
    console.log ('Coffee - OUT of stock!')
 } 
 if (tortillas >= 4){
    console.log ('Tortillas are stocked.')
} else if (tortillas >= 1){
    console.log ('Tortillas - running LOW')
 } else {
    console.log ('Tortillas - OUT of stock!')
 } 
 if (cheese >= 4){
    console.log ('Cheese is stocked.')
} else if (cheese >= 1){
    console.log ('Cheese - running LOW')
 } else {
    console.log ('Cheese - OUT of stock!')
 } 
 if (salsa >= 4){
    console.log ('Salsa is stocked.')
} else if (salsa >= 1){
    console.log ('Salsa - running LOW')
 } else {
    console.log ('Salsa - OUT of stock!')
 } 
 return 'Check for out of stock items.';
}
console.log (checkStock(4, 3, 0, 1))


