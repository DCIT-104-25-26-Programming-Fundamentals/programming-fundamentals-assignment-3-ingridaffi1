// ==============================================================================
// PROGRAMMING FUNDAMENTALS - Assignment 4
// Topic: Multi-dimensional Arrays (2D Arrays), Nested Loops, and Functions
// ==============================================================================
//
// TASK: Matrix Operations

const readlineSync = require('readline-sync');

function readMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const rowInput = readlineSync.question(`Enter row ${i + 1}: `);
        const row = rowInput.trim().split(/\s+/).map(Number);
        matrix.push(row);
    }
    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const rowStr = matrix[i].map(num => String(num).padStart(5)).join('');
        console.log(rowStr);
    }
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];

    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }
    return transposed;
}

function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;
    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const row = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

function main() {
    const rows = readlineSync.questionInt('Enter number of rows: ');
    const cols = readlineSync.questionInt('Enter number of columns: ');

    console.log('\nEnter Matrix:');
    const matrix = readMatrix(rows, cols);

    console.log('\nOriginal Matrix:');
    printMatrix(matrix);

    const transposed = transposeMatrix(matrix);

    console.log('\nTransposed Matrix:');
    printMatrix(transposed);
}

main();
