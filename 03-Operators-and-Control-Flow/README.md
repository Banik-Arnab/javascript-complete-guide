# 🎯 JavaScript Operators & Control Flow

> Learn how JavaScript performs calculations, compares values, and controls the flow of a program using conditions and logical operators.

---

## 📖 What You'll Learn

* ➕ Arithmetic Operators
* 📝 Assignment Operators
* ⚖️ Comparison Operators (`===` & `!==`)
* 🔗 Logical Operators (`&&`, `||`, `!`)
* 🌿 Conditional Statements (`if`, `else if`, `else`)
* ❓ Ternary Operator
* 🔀 `switch` Statement

---

## 📂 Project Structure

```text
03-Operators-Control-Flow/
│
├── 📄 README.md
├── 📜 01-arithmetic-operators.js
├── 📜 02-assignment-operators.js
├── 📜 03-comparison-operators.js
├── 📜 04-logical-operators.js
├── 📜 05-if-else.js
├── 📜 06-ternary-operator.js
├── 📜 07-switch.js
└── 📂 Exercises/
```

---

# ➕ Arithmetic Operators

Perform mathematical operations.

| Operator | Name           | Example   |
| :------: | -------------- | --------- |
|    `+`   | Addition       | `10 + 5`  |
|    `-`   | Subtraction    | `10 - 5`  |
|    `*`   | Multiplication | `10 * 5`  |
|    `/`   | Division       | `10 / 5`  |
|    `%`   | Modulus        | `10 % 3`  |
|   `**`   | Exponent       | `2 ** 4`  |
|   `++`   | Increment      | `count++` |
|   `--`   | Decrement      | `count--` |

```javascript
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
```

---

# 📝 Assignment Operators

Update variable values efficiently.

| Operator | Equivalent  |
| -------- | ----------- |
| `=`      | `x = y`     |
| `+=`     | `x = x + y` |
| `-=`     | `x = x - y` |
| `*=`     | `x = x * y` |
| `/=`     | `x = x / y` |
| `%=`     | `x = x % y` |

```javascript
let score = 50;

score += 10;
score *= 2;

console.log(score);
```

---

# ⚖️ Comparison Operators

Comparison operators always return **true** or **false**.

| Operator | Meaning               |
| -------- | --------------------- |
| `===`    | Strict Equal          |
| `!==`    | Strict Not Equal      |
| `>`      | Greater Than          |
| `<`      | Less Than             |
| `>=`     | Greater Than or Equal |
| `<=`     | Less Than or Equal    |

```javascript
console.log(5 === 5);      // true
console.log(5 === "5");    // false
console.log(10 >= 5);      // true
```

> **💡 Best Practice:** Use **`===`** and **`!==`** instead of `==` and `!=`.

---

# 🔗 Logical Operators

Combine multiple conditions.

| Operator | Description |   |    |
| -------- | ----------- | - | -- |
| `&&`     | AND         |   |    |
| `        |             | ` | OR |
| `!`      | NOT         |   |    |

```javascript
let age = 22;

console.log(age >= 18 && age <= 30);
console.log(age < 18 || age > 60);
console.log(!(age < 18));
```

---

# 🌿 Conditional Statements

### `if`

```javascript
if (age >= 18) {
    console.log("Adult");
}
```

### `if...else`

```javascript
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

### `if...else if...else`

```javascript
let marks = 78;

if (marks >= 80) {
    console.log("A+");
} else if (marks >= 70) {
    console.log("A");
} else {
    console.log("Need Improvement");
}
```

---

# ❓ Ternary Operator

A shorter version of `if...else`.

```javascript
let status = age >= 18 ? "Adult" : "Minor";

console.log(status);
```

---

# 🔀 Switch Statement

Best when comparing one value against many options.

```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");
}
```

---

# 📌 Summary

| Topic      | Purpose                |
| ---------- | ---------------------- |
| Arithmetic | Perform calculations   |
| Assignment | Update variables       |
| Comparison | Compare values         |
| Logical    | Combine conditions     |
| if / else  | Decision making        |
| Ternary    | Short conditional      |
| switch     | Multiple fixed choices |

---

## 🚀 Practice Challenge

Try creating programs that:

* ✔️ Build a simple calculator
* ✔️ Check whether a number is positive or negative
* ✔️ Determine if a person is eligible to vote
* ✔️ Find the largest of three numbers
* ✔️ Display the day of the week using `switch`
