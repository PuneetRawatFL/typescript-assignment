// 2. TS Special Types
// Assignment: Implement a simple user management system that uses TypeScript’s special types (any, unknown, never, and void) to handle various scenarios.
// Requirements:
// Use any to allow flexibility in one of the function parameters, but demonstrate the risks by showing how it could lead to runtime errors.
// Use unknown as a safer alternative to any and add type-checking logic before performing operations.
// Create a function that never returns (e.g., a function that throws an error) and annotate it with the never type.
// Write a function that performs an action but doesn’t return anything, annotated with the void type.

function display(a: string, b: any): void {
    a.toUpperCase();
    b.toUpperCase();
    console.log(a, b);
}
display("Hello", "World");
// display("Hello", 23); //run-time error - toUpperCase is not a function

function displayAgain(a: string, b: unknown): void {
    if (typeof a === "string" && typeof b === "string") {
        a.toUpperCase();
        b.toUpperCase();
    } else {
        console.error("string function can only be used on string types");
    }
    console.log(a, b);
}
displayAgain("Hello", "World");

//never ending function
function neverReturn(): never {
    throw new Error("Never ending function");
}
// neverReturn(); //run-time error = Uncaught Error: Never ending function

//function that does not return anything
function result(a: number, b: number): void {
    console.log(a + b);
}
result(2, 3);
