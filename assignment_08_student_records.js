// ==============================================================================
// PROGRAMMING FUNDAMENTALS - Assignment 8
// Topic: Objects, Arrays, Loops, and Functions
// ==============================================================================
//
// TASK: Student Record Management System

const readlineSync = require('readline-sync');

function displayMenu() {
    console.log('\n----------------------------------');
    console.log('   STUDENT RECORD SYSTEM MENU    ');
    console.log('----------------------------------');
    console.log('1. Add student');
    console.log('2. Display all students');
    console.log('3. Calculate average score');
    console.log('4. Quit');
}

function calculateAverage(scores) {
    if (scores.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function addStudent(students) {
    const name = readlineSync.question('Student name: ');
    const id = readlineSync.questionInt('Student ID: ');
    const numScores = readlineSync.questionInt('How many scores? ');

    if (numScores <= 0) {
        console.log('Invalid number of scores.');
        return;
    }

    const scores = [];
    for (let i = 1; i <= numScores; i++) {
        const score = readlineSync.questionFloat(`Enter score ${i}: `);
        scores.push(score);
    }

    const student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);
    console.log(`Student "${name}" added successfully.`);
}

function displayAllStudents(students) {
    if (students.length === 0) {
        console.log('No students have been added yet.');
        return;
    }

    console.log('\n---------------------------------------------------------');
    console.log(
        'Name'.padEnd(15) + 
        'ID'.padEnd(12) + 
        'Scores'.padEnd(20) + 
        'Average'
    );
    console.log('---------------------------------------------------------');

    for (let i = 0; i < students.length; i++) {
        const s = students[i];
        const scoresStr = s.scores.join(', ');
        const avgStr = calculateAverage(s.scores).toFixed(2);

        console.log(
            s.name.padEnd(15) + 
            String(s.id).padEnd(12) + 
            scoresStr.padEnd(20) + 
            avgStr
        );
    }
}

function calculateSpecificAverage(students) {
    if (students.length === 0) {
        console.log('No students have been added yet.');
        return;
    }

    const searchId = readlineSync.questionInt('Enter student ID: ');
    let found = false;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === searchId) {
            const avg = calculateAverage(students[i].scores).toFixed(2);
            console.log(`${students[i].name}'s average score: ${avg}`);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log('Error: Student ID not found.');
    }
}

function main() {
    const students = [];
    let choice = 0;

    while (choice !== 4) {
        displayMenu();
        choice = readlineSync.questionInt('Enter your choice (1-4): ');

        if (choice === 1) {
            addStudent(students);
        } else if (choice === 2) {
            displayAllStudents(students);
        } else if (choice === 3) {
            calculateSpecificAverage(students);
        } else if (choice === 4) {
            console.log('Goodbye!');
        } else {
            console.log('Invalid choice. Please enter a number between 1 and 4.');
        }
    }
}

main()
