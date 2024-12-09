//1. TS Simple Types
// Assignment: Create a TypeScript file that defines variables using simple types (string, number, boolean, etc.) and writes a function that performs basic arithmetic operations.
// Requirements:
// Define variables for a person's name, age, and whether they are a student.
// Create a function that takes two numbers as parameters and returns their sum, difference, product, and quotient.
// Ensure that the types of the variables and function parameters/returns are explicitly specified.

let fullName: string = "Puneet Rawat";
let age: number = 23;
let isStudent: boolean = true;

function operations(a: number, b: number): number[] {
    let sum: number = a + b;
    let diff: number = a - b;
    let mul: number = a * b;
    let div: number = a / b;

    //return using array
    return [sum, diff, mul, div];
}

let [sum, diff, mul, div] = operations(10, 2);
console.log("Sum: ", sum);
console.log("Difference: ", diff);
console.log("Product: ", mul);
console.log("Quotient: ", div);
