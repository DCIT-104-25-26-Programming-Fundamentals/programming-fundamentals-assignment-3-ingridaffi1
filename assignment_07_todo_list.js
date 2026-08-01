// ==============================================================================
// PROGRAMMING FUNDAMENTALS - Assignment 7
// Topic: Console-Based To-Do List Application
// ==============================================================================

const readlineSync = require('readline-sync');

function displayMenu() {
    console.log('\n-------------------------');
    console.log('      TO-DO LIST MENU    ');
    console.log('-------------------------');
    console.log('1. Add task');
    console.log('2. View tasks');
    console.log('3. Delete task');
    console.log('4. Quit');
}

function addTask(tasks) {
    const task = readlineSync.question('Enter task: ');
    if (task.trim() !== '') {
        tasks.push(task.trim());
        console.log(`Task added: "${task.trim()}"`);
    } else {
        console.log('Task description cannot be empty.');
    }
}

function viewTasks(tasks) {
    if (tasks.length === 0) {
        console.log('Your to-do list is empty.');
    } else {
        console.log('Your Tasks:');
        for (let i = 0; i < tasks.length; i++) {
            console.log(`${i + 1}. ${tasks[i]}`);
        }
    }
}

function deleteTask(tasks) {
    if (tasks.length === 0) {
        console.log('Your to-do list is empty. Nothing to delete.');
        return;
    }

    viewTasks(tasks);
    const taskNum = readlineSync.questionInt('Enter task number to delete: ');

    if (taskNum >= 1 && taskNum <= tasks.length) {
        const removed = tasks.splice(taskNum - 1, 1);
        console.log(`Task "${removed[0]}" has been removed.`);
    } else {
        console.log('Invalid task number.');
    }
}

function main() {
    const tasks = [];
    let choice = 0;

    while (choice !== 4) {
        displayMenu();
        choice = readlineSync.questionInt('Enter your choice (1-4): ');

        if (choice === 1) {
            addTask(tasks);
        } else if (choice === 2) {
            viewTasks(tasks);
        } else if (choice === 3) {
            deleteTask(tasks);
        } else if (choice === 4) {
            console.log('Goodbye!');
        } else {
            console.log('Invalid choice. Please enter a number between 1 and 4.');
        }
    }
}

main();
