// Counter App

const countElement = document.getElementById("count");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

// Increase
increaseBtn.addEventListener("click", function () {
    count++;
    countElement.textContent = count;
});

// Decrease
decreaseBtn.addEventListener("click", function () {
    count--;
    countElement.textContent = count;
});

// Reset
resetBtn.addEventListener("click", function () {
    count = 0;
    countElement.textContent = count;
});