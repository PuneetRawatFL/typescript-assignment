"use strict";
// 9. TypeScript Functions
// Assignment: Create a Basic Calculator that performs arithmetic operations and implements advanced features like currying and function overloading using TypeScript.
// Requirements:
// Basic Operations:
// Implement functions for addition, subtraction, multiplication, and division.
// Function Overloading:
// Create an overloaded function calculate that can handle different types of input (e.g., two numbers or an array of numbers) and perform a specified operation (e.g., add, subtract, etc.).
// Currying:
// Implement a curried function curriedAdd that allows partial application of arguments.
// Default Parameters & Rest Parameters:
// Implement a function sumAll that takes a variable number of arguments (using rest parameters) and returns their sum.
// Implement a function with default parameters for optional arguments (e.g., a multiply function that defaults to multiplying by 1 if the second argument is not provided).
// Type Annotations:
// Ensure that all functions have appropriate type annotations for parameters and return types.
// Error Handling:
// Handle cases such as division by zero and provide user-friendly error messages.
// Deliverables:
// A TypeScript file that includes:
// The implementation of the basic arithmetic functions.
// The overloaded calculate function.
// The curried curriedAdd function.
// The sumAll function with rest parameters.
// A function with default parameters.
// Demonstrations of function usage with various input types.
// Comments explaining the use of function features like overloading, currying, rest parameters, and default parameters.
// Assurance that the TypeScript compiler reports no errors.
//creating basic function
//add function
function addition(a, b) {
    return a + b;
}
//subtract function
function subtract(a, b) {
    return a - b;
}
//multiply function
function multiply(a, b) {
    return a * b;
}
//division function
function division(a, b) {
    if (b == 0) {
        return "number cannot be divided by zero";
    }
    else {
        return a / b;
    }
}
//we use overloading when we want to perform a specific operation on different types of outputs
//implementation function
function over(a, b, c) {
    if (typeof a === "number" && typeof b === "number" && c === "add") {
        return addition(a, b);
    }
    else if (typeof a === "number" && typeof b === "number" && c === "sub") {
        return subtract(a, b);
    }
    else if (typeof a === "number" && typeof b === "number" && c === "mul") {
        return multiply(a, b);
    }
    else if (typeof a === "number" && typeof b === "number" && c === "div") {
        return division(a, b);
    }
    else if (Array.isArray(a)) {
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            sum += a[i];
        }
        return sum;
    }
}
//calling function
console.log(over(5, 6, "add")); // passing numbers
console.log(over([1, 2, 3, 4, 5])); // passing an array
//implementing currying function
function curriedAdd(a) {
    return function (b) {
        return a + b;
    };
}
let partialAdd = curriedAdd(10);
let finalResult = partialAdd(10);
console.log(finalResult);
//currying function helps us to use a function partially
//implementing function using rest parameters
function sumAll(...args) {
    let sum = 0;
    for (let i of args) {
        sum += i;
    }
    console.log(sum);
}
//calling function
sumAll(10, 20, 30, 40, 50);
//rest parameter function is useful when the input is large and we do not know the size
//implementing function using default paramater
function defaultPara(a, b = 1) {
    return a * b;
}
console.log(defaultPara(2)); //single paramater passed
console.log(defaultPara(2, 3)); //both parameters passed
//default parameter function is useful when we want a default value when no value if passed and prevent error
