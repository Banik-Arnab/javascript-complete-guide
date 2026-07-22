# 📦 Chapter 7: Objects & JSON

> **Objects** are used to store related data as key-value pairs, making it easy to represent real-world entities such as students, products, and users. **JSON (JavaScript Object Notation)** is a lightweight format for storing and exchanging data between applications.

---

## 📖 Topics Covered

* 📌 What is an Object?
* 🔑 Object Properties
* 🛠️ Object Methods
* 👉 The `this` Keyword
* 📂 Nested Objects & Arrays
* 📦 Object Destructuring
* 🔄 Looping Through Objects
* 🌐 JSON (`JSON.stringify()` & `JSON.parse()`)
* 🚀 Practical Examples

---

# 📌 What is an Object?

An **object** stores related data using **key-value pairs**.

```javascript
const student = {
    name: "Arnab",
    department: "CSE",
    semester: "8th"
};
```

---

# 🔑 Accessing Object Properties

Use **dot notation** or **bracket notation** to access object properties.

```javascript
const student = {
    name: "Arnab",
    semester: "8th"
};

console.log(student.name);
console.log(student["semester"]);
```

**Output**

```text
Arnab
8th
```

---

# ✏️ Updating Object Properties

```javascript
const student = {
    name: "Arnab",
    semester: "8th"
};

student.semester = "9th";

console.log(student);
```

---

# 🛠️ Object Methods

Objects can contain functions called **methods**.

```javascript
const student = {
    name: "Arnab",

    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

console.log(student.greet());
```

**Output**

```text
Hello, I'm Arnab
```

---

# 👉 The `this` Keyword

The **`this`** keyword refers to the current object.

```javascript
const student = {
    name: "Arnab",

    describe() {
        return `${this.name} is a CSE student.`;
    }
};

console.log(student.describe());
```

---

# 📂 Objects with Arrays

Objects can store arrays as property values.

```javascript
const student = {
    name: "Arnab",
    skills: ["HTML", "CSS", "JavaScript", "Git"]
};

console.log(student.skills);
console.log(student.skills[0]);
```

---

# 📦 Object Destructuring

Extract multiple properties in a single line.

```javascript
const student = {
    name: "Arnab",
    semester: "8th"
};

const { name, semester } = student;

console.log(name);
console.log(semester);
```

---

# 🔄 Looping Through Objects

Use a **`for...in`** loop to iterate over object properties.

```javascript
const student = {
    name: "Arnab",
    dept: "CSE",
    semester: "8th"
};

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
```

---

# 🌐 JSON

### Convert Object to JSON

```javascript
const student = {
    name: "Arnab",
    semester: "8th"
};

const json = JSON.stringify(student);

console.log(json);
```

### Convert JSON to Object

```javascript
const parsed = JSON.parse(json);

console.log(parsed.name);
```

---

# 💡 Best Practices

* ✅ Use meaningful property names.
* ✅ Keep related data inside one object.
* ✅ Use methods for object-specific behavior.
* ✅ Use `this` to access the current object's properties.
* ✅ Use destructuring to write cleaner code.
* ✅ Use JSON when sending or receiving data.

---

# 📌 Summary

| Topic              | Purpose                            |
| ------------------ | ---------------------------------- |
| Object             | Store related data                 |
| Property           | A key-value pair                   |
| Method             | A function inside an object        |
| `this`             | Refers to the current object       |
| Destructuring      | Extract object properties          |
| `for...in`         | Loop through object properties     |
| `JSON.stringify()` | Convert object to JSON string      |
| `JSON.parse()`     | Convert JSON string back to object |

---

# 📝 Key Takeaways

* Objects store **related information** using key-value pairs.
* Methods add **behavior** to objects.
* `this` refers to the current object.
* Destructuring makes code shorter and cleaner.
* JSON is the standard format for data exchange in web applications.

---
