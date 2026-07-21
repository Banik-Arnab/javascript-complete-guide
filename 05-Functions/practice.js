// 1. This program defines a function isEven(n)
// and uses it to check numbers from 1 to 10.

function isEven(n) {
    return n % 2 === 0;
}

for (let i = 1; i <= 10; i++) {
    console.log(`${i}: ${isEven(i)}`);
}

//2. This program converts Celsius to Fahrenheit.

function celsiusToFahrenheit(c) {
    return (c * 9) / 5 + 32;
}

let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);

console.log(`${celsius}°C = ${fahrenheit}°F`);


//3. This program returns the largest of three numbers
// without using Math.max().

function max3(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(max3(10, 25, 15)); // 25
console.log(max3(50, 20, 30)); // 50
console.log(max3(5, 8, 12));   // 12

//4. This function prints the FizzBuzz sequence from 1 to the given limit.

function fizzBuzz(limit) {
    for (let i = 1; i <= limit; i++) {
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
}

fizzBuzz(30);

//5. This program defines a function applyTwice(fn, value)
// that applies a function two times to a value.

function applyTwice(fn, value) {
    return fn(fn(value));
}

function double(num) {
    return num * 2;
}

let result = applyTwice(double, 5);

console.log(result);