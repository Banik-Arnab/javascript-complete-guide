//1. Given [3, 7, 2, 9, 4], print the largest number using a loop (no Math.max).

let numbers = [3, 7, 2, 9, 4];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number:", largest);


//2. Use map to convert an array of taka amounts into strings like '450 BDT'.


let amounts = [450, 1200, 750, 300, 950];

let takaStrings = amounts.map(amount => `${amount} BDT`);

console.log(takaStrings);



//3. Use filter to keep only names longer than 4 characters from an array of names.

let names = ["Rafi", "Sakib", "Anika", "Nayeem", "Eva", "Rahim", "Mim"];

let longNames = names.filter(name => name.length > 4);

console.log(longNames);



//4. Use reduce to count how many numbers in an array are even.
let numbers2 = [3, 8, 12, 5, 10, 7, 14, 9];

let evenCount = numbers2.reduce((count, number) => {
    if (number % 2 === 0) {
        return count + 1;
    }
    return count;
}, 0);

console.log("Even numbers:", evenCount);


//5. Combine filter + map: from an array of students with cgpa, produce an array of names of students with cgpa ≥ 3.5.
let students = [
    { name: "Arnab", cgpa: 3.80 },
    { name: "Sakib", cgpa: 3.25 },
    { name: "Nayeem", cgpa: 3.60 },
    { name: "Anika", cgpa: 3.45 },
    { name: "Rahim", cgpa: 3.90 }
];

let qualifiedStudents = students
    .filter(student => student.cgpa >= 3.5)
    .map(student => student.name);

console.log(qualifiedStudents);


//6. Sort an array of objects by price from highest to lowest.
let products = [
    { name: "Laptop", price: 85000 },
    { name: "Phone", price: 35000 },
    { name: "Headphones", price: 2500 },
    { name: "Monitor", price: 18000 },
    { name: "Keyboard", price: 1500 }
];

products.sort((a, b) => b.price - a.price);

console.log(products);