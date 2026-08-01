// ==============================================================================
// PROGRAMMING FUNDAMENTALS - Assignment 2
// Topic: Conditional Logic (if / else if / else) and Functions
// ==============================================================================
//
// TASK: Student Grade System

const readlineSync = require('readline-sync');

function getGrade(score) {
    if (score < 0 || score > 100 || isNaN(score)) {
        return null; // Return null for invalid or out-of-range scores
    } else if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

function main() {
    const scoreInput = readlineSync.question('Enter student score (0-100): ');
    const score = parseFloat(scoreInput);

    const grade = getGrade(score);

    if (grade === null) {
        console.log("Error: Score must be between 0 and 100.");
    } else {
        console.log(`Grade: ${grade}`);
    }
}

main();
