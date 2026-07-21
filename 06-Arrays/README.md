# 📦 Chapter 6: Arrays

> Arrays allow you to store multiple values in a single variable. They make it easy to manage collections of data and provide powerful built-in methods for searching, filtering, transforming, and processing information.

---

# 📌 What is an Array?

An **array** is a special JavaScript object used to store multiple values in a single variable.

```javascript
let fruits = ["Mango", "Apple", "Banana"];
```

---

# 🛠️ Creating Arrays

```javascript
let numbers = [10, 20, 30, 40, 50];

let colors = ["Red", "Green", "Blue"];

let mixed = [100, "JavaScript", true];
```

---

# 🔍 Accessing Elements

Array indexing starts from **0**.

```javascript
let fruits = ["Mango", "Apple", "Banana"];

console.log(fruits[0]);
console.log(fruits[2]);
```

**Output**

```text
Mango
Banana
```

---

# ✏️ Updating Elements

```javascript
let fruits = ["Mango", "Apple", "Banana"];

fruits[1] = "Orange";

console.log(fruits);
```

---

# ➕ Common Array Methods

| Method       | Description               |
| ------------ | ------------------------- |
| `push()`     | Add to the end            |
| `pop()`      | Remove from the end       |
| `unshift()`  | Add to the beginning      |
| `shift()`    | Remove from the beginning |
| `includes()` | Check if a value exists   |
| `indexOf()`  | Find an element's index   |
| `length`     | Get array size            |

```javascript
let fruits = ["Apple", "Banana"];

fruits.push("Mango");
fruits.pop();

console.log(fruits);
```

---

# 🔁 Looping Through Arrays

### Using `for`

```javascript
let numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

### Using `for...of`

```javascript
let numbers = [10, 20, 30];

for (const number of numbers) {
    console.log(number);
}
```

---

# 🎯 `map()`

Creates a **new array** by transforming every element.

```javascript
let prices = [450, 700, 900];

let result = prices.map(price => `${price} BDT`);

console.log(result);
```

**Output**

```text
["450 BDT", "700 BDT", "900 BDT"]
```

---

# 🔎 `filter()`

Returns only the elements that satisfy a condition.

```javascript
let names = ["Rafi", "Sakib", "Anika", "Eva"];

let result = names.filter(name => name.length > 4);

console.log(result);
```

---

# 📊 `reduce()`

Reduces an array to a single value.

```javascript
let numbers = [2, 4, 6, 8];

let sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);
```

---

# 🔃 `sort()`

Sorts the elements of an array.

```javascript
let numbers = [5, 2, 9, 1];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

### Sorting Objects

```javascript
let products = [
    { name: "Laptop", price: 80000 },
    { name: "Phone", price: 30000 },
    { name: "Monitor", price: 18000 }
];

products.sort((a, b) => b.price - a.price);
```

---

# 🚀 Method Chaining

Multiple array methods can be combined together.

```javascript
let students = [
    { name: "Arnab", cgpa: 3.8 },
    { name: "Sakib", cgpa: 3.2 },
    { name: "Nayeem", cgpa: 3.7 }
];

let qualified = students
    .filter(student => student.cgpa >= 3.5)
    .map(student => student.name);

console.log(qualified);
```

---

# 📌 Summary

| Topic              | Purpose                     |
| ------------------ | --------------------------- |
| Arrays             | Store multiple values       |
| Index              | Access elements             |
| `push()` / `pop()` | Add or remove items         |
| `map()`            | Transform data              |
| `filter()`         | Select matching data        |
| `reduce()`         | Produce a single result     |
| `sort()`           | Arrange data                |
| Method Chaining    | Combine multiple operations |

---
