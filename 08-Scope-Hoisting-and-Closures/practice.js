//. Write createBankAccount(initial) that returns an object with deposit and getBalance functions sharing a private balance via closure.
function createBankAccount(initial) {
    let balance = initial; // Private variable

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

// Create a bank account
const account = createBankAccount(1000);

// Deposit money
account.deposit(500);
account.deposit(250);

// Check balance
console.log("Current Balance:", account.getBalance());

//2. Predict, then verify: what does a loop of let vs a loop calling setTimeout print? Search 'let vs var setTimeout loop' after trying.
// Using let

for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// Using var

for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}


