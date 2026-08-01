// ==============================================================================
// PROGRAMMING FUNDAMENTALS - Assignment 1
// Topic: Conditional Logic, Loops, and Functions
// ==============================================================================
//
// TASK: Prime Number Checker

const readlineSync = require('readline-sync');

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function main() {
    const num = readlineSync.questionInt('Enter a number: ');
    
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
    } else {
        console.log(`${num} is NOT a prime number.`);
    }
}

main();
