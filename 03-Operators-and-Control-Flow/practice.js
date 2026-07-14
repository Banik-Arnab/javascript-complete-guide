//1. Write a program that prints whether a number is positive, negative, or zero.

let number = -5;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


//2. Given a temperature variable, print 'Hot' above 32, 'Pleasant' between 20 and 32, otherwise 'Cold'.
let temperature = 25;

if (temperature > 32) {
    console.log("Hot");
} else if (temperature >= 20 && temperature <= 32) {
    console.log("Pleasant");
} else {
    console.log("Cold");
}

//3. Use the ternary operator to print 'Even' or 'Odd' for a given number.
let number = 7;

console.log(number % 2 === 0 ? "Even" : "Odd");

//4. Write a switch that maps a month number (1–12) to its season in Bangladesh.

let month = 4;

switch (month) {
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 3:
    case 4:
        console.log("Summer");
        break;

    case 5:
    case 6:
        console.log("Rainy Season");
        break;

    case 7:
    case 8:
        console.log("Autumn");
        break;

    case 9:
    case 10:
        console.log("Late Autumn");
        break;

    case 11:
    case 12:
        console.log("Spring");
        break;

    default:
        console.log("Invalid month number! Please enter a number between 1 and 12.");
}