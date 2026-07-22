//1. Model yourself as an object with name, dept, semester, and skills (an array). Print a sentence using its properties.
{
    const student = {
        name: "Arnab Banik",
        dept: "Computer Science and Engineering (CSE)",
        semester: "8th",
        skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub"]
    };

    console.log(
        `My name is ${student.name}. I study in the ${student.dept} department. I am currently in the ${student.semester} semester. My skills are: ${student.skills.join(", ")}.`
    );
}


//2. Add a method describe() to that object that returns a summary string using this.
{
    const student = {
        name: "Arnab Banik",
        dept: "Computer Science and Engineering (CSE)",
        semester: "8th",
        skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],

        describe() {
            return `My name is ${this.name}. I study in the ${this.dept} department. I am currently in the ${this.semester} semester. My skills are: ${this.skills.join(", ")}.`;
        }
    };

    console.log(student.describe());
}
//3. Destructure name and semester out of your object in one line.
const student = {
    name: "Arnab Banik",
    dept: "Computer Science and Engineering (CSE)",
    semester: "8th",
    skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub"]
};

const { name, semester } = student;

console.log("Name:", name);
console.log("Semester:", semester);


//4. Write a function that takes an array of product objects and returns the total stock using reduce.
const products = [
    { name: "Laptop", stock: 10 },
    { name: "Phone", stock: 15 },
    { name: "Headphones", stock: 20 },
    { name: "Keyboard", stock: 8 }
];

function getTotalStock(products) {
    return products.reduce((total, product) => total + product.stock, 0);
}

const totalStock = getTotalStock(products);

console.log("Total Stock:", totalStock);


//5. Stringify an object, then parse it back, and prove the round trip worked by printing a property.
const studentJson = {
    name: "Arnab Banik",
    dept: "Computer Science and Engineering (CSE)",
    semester: "8th",
    cgpa: 3.80
};

const jsonString = JSON.stringify(studentJson);

console.log(jsonString);

const parsedStudent = JSON.parse(jsonString);

console.log(parsedStudent.name);