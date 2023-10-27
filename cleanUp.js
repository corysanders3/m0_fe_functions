// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName(name) { 
  return `Hello, ${name}!`
}
console.log (askForName ("Cory"))
//Changed the function to return a name, based on the name that was provided through the console.log



// // EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
return sum;
      }

console.log (addThreeNums(1, 2, 3));
console.log (addThreeNums(4, 2, 7));
//Added console.log so we could see the output of this running.

// // EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();
//function was not fully spelled out. It was written as 'func'

// //  EX 4:
function average(num1, num2) {
    return num1 + num2
  }
var sum = average (10, 6)
var avg = sum / 2
console.log (avg)

// I moved the return to be within the function and showed it as adding the two numbers.
//I then pulled the function in my variable and divided by 2 to show the average of the two numbers.