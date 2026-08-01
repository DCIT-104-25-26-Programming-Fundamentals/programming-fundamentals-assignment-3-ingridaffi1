// ==============================================================================
// PROGRAMMING FUNDAMENTALS - Assignment 3
// Topic: Arrays, Loops, and Functions
// ==============================================================================
//
// TASK: Array Statistics Calculator

const readlineSync = require('readline-sync');

function calculateSum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    return calculateSum(arr) / arr.length;
}

function findMaximum(arr) {
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

function findMinimum(arr) {
    let minVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}

function main() {
    const count = readlineSync.questionInt('How many numbers? ');

    if (count <= 0) {
        console.log('Please enter a number greater than 0.');
        return;
    }

    const numbers = [];

    for (let i = 0; i < count; i++) {
        const num = readlineSync.questionFloat(`Enter number ${i + 1}: `);
        numbers.push(num);
    }

    console.log('\nResults:');
    console.log(`Sum:     ${calculateSum(numbers)}`);
    console.log(`Average: ${calculateAverage(numbers)}`);
    console.log(`Maximum: ${findMaximum(numbers)}`);
    console.log(`Minimum: ${findMinimum(numbers)}`);
}

main();
