//1. Create const variables for your name and department and a let variable for your semester. Print a sentence using a template literal.
const name = "Arnab Banik Badhon";
const department = "Computer Science";
let semester = 3;
console.log(`My name is ${name}, I am from the ${department} department, and I am in semester ${semester}.\n\n`);


//2. Predict the output of console.log(typeof null) — then run it and search the web for why the answer is surprising.
console.log(typeof null); // Output: "object" (This is a known quirk in JavaScript)

//3. Convert the string "19.5" to a number, add 0.5, and print the result.

let num = Number("19.5");
console.log(num + 0.5);

//4. What does "5" + 3 print? What does "5" - 3 print? Run both, then write one sentence explaining the difference.
// "5" + 3
console.log("5" + 3);

// "5" - 3
console.log("5" - 3);
//The + operator concatenates a string with a number, producing "53", while the - operator converts the string "5" to the number 5 and performs subtraction, producing 2.