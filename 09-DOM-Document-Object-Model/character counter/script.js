// Select elements
const textInput = document.getElementById("textInput");
const counter = document.getElementById("counter");

// Update character count while typing
textInput.addEventListener("input", function () {
    const characterCount = textInput.value.length;
    counter.textContent = `${characterCount} characters`;
});