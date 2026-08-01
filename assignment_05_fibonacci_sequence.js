// ==============================================================================
// PROGRAMMING FUNDAMENTALS - Assignment 5
// Topic: Loops, Sequences, and Functions
// ==============================================================================
//
// TASK: Fibonacci Sequence Generator

const readlineSync = require('readline-sync');

function generateFibonacci(n) {
    if (n <= 0) return;

    let first = 0;
    let second = 1;
    const sequence = [];

    for (let i = 0; i < n; i++) {
        sequence.push(first);
        const next = first + second;
        first = second;
        second = next;
    }

    console.log(`Fibonacci sequence: ${sequence.join(' ')}`);
}

function isFibonacciNumber(num) {
    if (num < 0) return false;

    let a = 0;
    let b = 1;

    while (a < num) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return a === num;
}

function main() {
    const n = readlineSync.questionInt('How many terms? ');

    if (n <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }

    generateFibonacci(n);

    console.log('');

    const checkNum = readlineSync.questionInt('Enter a number to check: ');

    if (isFibonacciNumber(checkNum)) {
        console.log(`${checkNum} is a Fibonacci number.`);
    } else {
        console.log(`${checkNum} is NOT a Fibonacci number.`);
    }
}

main();
