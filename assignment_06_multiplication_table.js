// ==============================================================================
// PROGRAMMING FUNDAMENTALS - Assignment 6
// Topic: Loops and Functions
// ==============================================================================
//
// TASK: Multiplication Table Generator

const readlineSync = require('readline-sync');

function generateSingleTable(num) {
    console.log(`Multiplication Table for ${num}:`);
    for (let i = 1; i <= 12; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

function generateTablesUpToN(n) {
    for (let i = 1; i <= n; i++) {
        generateSingleTable(i);
        if (i < n) {
            console.log('-------------------');
        }
    }
}

function main() {
    const num = readlineSync.questionInt('Enter a number: ');

    if (num <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }

    generateSingleTable(num);

    console.log('\n==============================\n');

    const n = readlineSync.questionInt('Enter a number N for full tables: ');

    if (n <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }

    generateTablesUpToN(n);
}

main();
