// ==============================================================================
// PROGRAMMING FUNDAMENTALS - Assignment 9
// Topic: Functions, Control Flow, and Input Validation
// ==============================================================================
//
// TASK: Console-Based Simple Calculator

const readlineSync = require('readline-sync');

function displayMenu() {
    console.log('\n==========================');
    console.log('    SIMPLE CALCULATOR    ');
    console.log('==========================');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Modulus');
    console.log('6. Exponentiation');
    console.log('7. Quit');
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log('Error: Cannot divide by zero.');
    } else {
        console.log(`Result: ${(a / b).toFixed(2)}`);
    }
}

function modulus(a, b) {
    if (b === 0) {
        console.log('Error: Cannot perform modulus by zero.');
    } else {
        console.log(`Result: ${(a % b).toFixed(2)}`);
    }
}

function exponentiate(base, exp) {
    return Math.pow(base, exp);
}

function main() {
    let choice = 0;

    while (choice !== 7) {
        displayMenu();
        choice = readlineSync.questionInt('Select an operation (1-7): ');

        if (choice === 7) {
            console.log('Goodbye!');
            break;
        }

        if (choice >= 1 && choice <= 6) {
            const num1 = readlineSync.questionFloat('Enter first number: ');
            const num2 = readlineSync.questionFloat('Enter second number: ');

            if (choice === 1) {
                console.log(`Result: ${add(num1, num2).toFixed(2)}`);
            } else if (choice === 2) {
                console.log(`Result: ${subtract(num1, num2).toFixed(2)}`);
            } else if (choice === 3) {
                console.log(`Result: ${multiply(num1, num2).toFixed(2)}`);
            } else if (choice === 4) {
                divide(num1, num2);
            } else if (choice === 5) {
                modulus(num1, num2);
            } else if (choice === 6) {
                console.log(`Result: ${exponentiate(num1, num2).toFixed(2)}`);
            }
        } else {
            console.log('Invalid choice. Please select an operation between 1 and 7.');
        }
    }
}

main();
