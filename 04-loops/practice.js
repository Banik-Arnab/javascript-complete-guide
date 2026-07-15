//1 This program prints all even numbers from 2 to 50 using a for loop.

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

//2 This program computes the sum of numbers from 1 to 100
// using a loop and verifies it with the formula n(n + 1) / 2.

let sum = 0;
let n = 100;

for (let i = 1; i <= n; i++) {
    sum += i;
}
let formulaSum = n * (n + 1) / 2;

console.log("Sum using loop:", sum);
console.log("Sum using formula:", formulaSum);

// Verify both results
if (sum === formulaSum) {
    console.log("Verification successful! Both results are equal.");
} else {
    console.log("Verification failed! Results are different.");
}

// 3This program prints the multiplication table of 7.

let number = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// 4 This program prints a 5-row pyramid of stars using nested loops.

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    // Print stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }

    console.log(pattern);
}

// 5 This program prints FizzBuzz from 1 to 30.

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}