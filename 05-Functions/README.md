# 🔧 Chapter 5: Functions

> **Functions** are reusable blocks of code that perform a specific task. They help organize your code, reduce repetition, and make programs easier to read, test, and maintain.

# 🎯 Why Functions?

Functions allow you to write code **once** and use it **many times**.

### Without Function

```javascript
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

### With Function

```javascript
function greet() {
    console.log("Hello");
}

greet();
greet();
greet();
```

**✅ Benefits**

* Reusable code
* Less repetition (DRY Principle)
* Easier debugging
* Better code organization

---

# 🛠️ Function Declaration

A function declaration defines a reusable block of code.

```javascript
function greet() {
    console.log("Welcome to JavaScript!");
}

greet();
```

---

# 📥 Parameters & Arguments

* **Parameter** → Variable in the function definition.
* **Argument** → Actual value passed to the function.

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Arnab");
```

---

# 📤 Return Values

Use `return` to send a value back from a function.

```javascript
function add(a, b) {
    return a + b;
}

let sum = add(10, 5);
console.log(sum);
```

---

# ⚡ Function Expressions

Functions can be stored inside variables.

```javascript
const square = function (num) {
    return num * num;
};

console.log(square(5));
```

---

# ➡️ Arrow Functions (ES6)

Arrow functions provide a shorter syntax for writing functions.

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(4, 6));
```

---

# 🧠 Scope & Local Variables

Variables declared inside a function are only available within that function.

```javascript
function example() {
    let message = "Inside Function";
    console.log(message);
}

example();
```

---

# 🔄 Higher-Order Functions

A higher-order function accepts another function as an argument or returns a function.

```javascript
function applyTwice(fn, value) {
    return fn(fn(value));
}

function double(num) {
    return num * 2;
}

console.log(applyTwice(double, 5));
```

---

# 💡 Best Practices

* ✅ Use descriptive function names.
* ✅ Keep each function focused on one task.
* ✅ Return values instead of relying on global variables.
* ✅ Use arrow functions for short callbacks.
* ✅ Write reusable and readable code.

---

# 📌 Summary

| Topic                 | Description                     |
| --------------------- | ------------------------------- |
| Function Declaration  | Define reusable code blocks     |
| Parameters            | Receive input values            |
| Arguments             | Values passed to functions      |
| Return                | Send a value back               |
| Function Expression   | Store functions in variables    |
| Arrow Function        | Short ES6 function syntax       |
| Scope                 | Controls variable accessibility |
| Higher-Order Function | Functions using other functions |

---

