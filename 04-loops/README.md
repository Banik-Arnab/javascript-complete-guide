# 🔄 Chapter 4: Loops

Loops let you execute the same block of code multiple times without writing it repeatedly.

---

## 4.1 Why Loops Exist

A loop is used when you need to repeat a task multiple times. Instead of writing the same code again and again, use a loop.

**Example:**

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
}
```

**Output:**

```
Round 1
Round 2
Round 3
Round 4
Round 5
```

> **Tip:** A `for` loop has three parts:
>
> * **Start:** `let i = 1`
> * **Condition:** `i <= 5`
> * **Update:** `i++`

---

## 4.2 The `for` Loop

The `for` loop is used when you know how many times the loop should run.

**Syntax:**

```javascript
for (initialization; condition; update) {
    // code
}
```

**Example:**

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

## 4.3 `while` and `do...while`

### `while` Loop

Runs **only if the condition is true**.

```javascript
let attempts = 0;

while (attempts < 3) {
    console.log(`Attempt ${attempts + 1}`);
    attempts++;
}
```

### `do...while` Loop

Runs the code **at least once**, even if the condition is false.

```javascript
let n = 10;

do {
    console.log(n);
    n++;
} while (n < 3);
```

**Output:**

```
10
```

---

## 4.4 `break` and `continue`

### `continue`

Skips the current iteration and continues with the next one.

### `break`

Stops the loop immediately.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 4) continue;
    if (i === 7) break;

    console.log(i);
}
```

**Output:**

```
1
2
3
5
6
```

---

## 4.5 `for...of` Loop

Used to loop through arrays and other iterable objects.

```javascript
const fruits = ["mango", "lichi", "jackfruit"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

**Output:**

```
mango
lichi
jackfruit
```

---

## 4.6 Nested Loops

A loop inside another loop is called a **nested loop**.

```javascript
for (let row = 1; row <= 3; row++) {
    let line = "";

    for (let col = 1; col <= row; col++) {
        line += "*";
    }

    console.log(line);
}
```

**Output:**

```
*
**
***
```

---

## 📌 Summary

| Topic        | Purpose                                         |
| ------------ | ----------------------------------------------- |
| `for`        | Repeat code a fixed number of times             |
| `while`      | Repeat while a condition is true                |
| `do...while` | Run at least once before checking the condition |
| `break`      | Exit the loop immediately                       |
| `continue`   | Skip the current iteration                      |
| `for...of`   | Loop through arrays and iterable objects        |
| Nested Loops | Create patterns or work with rows and columns   |
