# 📦 Chapter 8: Scope, Hoisting & Closures

> Understanding **Scope**, **Hoisting**, and **Closures** is essential for writing reliable JavaScript. These concepts explain where variables can be accessed, how JavaScript processes declarations, and how functions can remember data even after they have finished executing.

---

## 📖 Topics Covered

* 📌 What is Scope?
* 🌍 Global Scope
* 📦 Function Scope
* 🧱 Block Scope (`let` & `const`)
* ⬆️ Hoisting
* 🔒 Closures
* ⏰ Closures with `setTimeout()`
* 💼 Real-World Closure Examples

---

# 📌 What is Scope?

**Scope** determines where variables can be accessed in your code.

There are three main types of scope:

* 🌍 Global Scope
* 📦 Function Scope
* 🧱 Block Scope

---

# 🌍 Global Scope

Variables declared outside any function are available everywhere.

```javascript
let language = "JavaScript";

function showLanguage() {
    console.log(language);
}

showLanguage();
```

---

# 📦 Function Scope

Variables declared inside a function can only be used within that function.

```javascript
function greet() {
    let message = "Hello";
    console.log(message);
}

greet();
```

---

# 🧱 Block Scope

`let` and `const` are block-scoped.

```javascript
if (true) {
    let age = 22;
    console.log(age);
}

// console.log(age); // Error
```

---

# ⬆️ Hoisting

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

```javascript
console.log(a);

var a = 10;
```

This behaves like:

```javascript
var a;

console.log(a);

a = 10;
```

**Output**

```text
undefined
```

---

# `let` and `const` Hoisting

```javascript
console.log(score);

let score = 95;
```

**Output**

```text
ReferenceError
```

Unlike `var`, `let` and `const` exist in the **Temporal Dead Zone (TDZ)** until they are initialized.

---

# 🔒 What is a Closure?

A **closure** is created when an inner function remembers variables from its outer function, even after the outer function has finished executing.

```javascript
function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = outer();

counter();
counter();
counter();
```

**Output**

```text
1
2
3
```

---

# 💼 Real-World Example: Bank Account

Closures are useful for creating **private variables**.

```javascript
function createBankAccount(initial) {
    let balance = initial;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

account.deposit(500);

console.log(account.getBalance());
```

---

# ⏰ `let` vs `var` with `setTimeout()`

### Using `let`

```javascript
for (let i = 1; i <= 5; i++) {
    setTimeout(() => console.log(i), 1000);
}
```

**Output**

```text
1
2
3
4
5
```

### Using `var`

```javascript
for (var i = 1; i <= 5; i++) {
    setTimeout(() => console.log(i), 1000);
}
```

**Output**

```text
6
6
6
6
6
```

**Why?**

* `let` creates a new variable for each loop iteration.
* `var` shares one variable across all iterations.

---

# 💡 Best Practices

* ✅ Use `let` and `const` instead of `var`.
* ✅ Keep variables in the smallest scope possible.
* ✅ Use closures to create private data.
* ✅ Understand hoisting to avoid unexpected errors.
* ✅ Prefer `const` unless a variable needs to change.

---

# 📌 Summary

| Topic           | Purpose                                       |
| --------------- | --------------------------------------------- |
| Global Scope    | Accessible everywhere                         |
| Function Scope  | Accessible only inside a function             |
| Block Scope     | Accessible only inside a block                |
| Hoisting        | Declarations are processed before execution   |
| `var`           | Hoisted and initialized with `undefined`      |
| `let` / `const` | Hoisted but stay in the TDZ until initialized |
| Closure         | Inner function remembers outer variables      |
| `setTimeout()`  | Demonstrates closures and scope behavior      |

---

# 📝 Key Takeaways

* Scope controls where variables are accessible.
* Hoisting explains how JavaScript processes declarations before execution.
* `let` and `const` are safer than `var` because they are block-scoped.
* Closures allow functions to remember variables from their outer scope.
* Closures are commonly used for private data, callbacks, and state management.

---