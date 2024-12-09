"use strict";
// 12. TypeScript Basic Generics
// Assignment: Create a Data Storage System using TypeScript generics to handle different data types in a type-safe manner.
// Requirements:
// Generic Class:
// Implement a generic class DataStorage that can store and manage a collection of items of any type.
// Provide methods for adding, removing, and retrieving items from the storage.
// Generic Functions:
// Implement a generic function mergeObjects that takes two objects of different types and merges them into one.
// Implement a generic function getArrayItem that retrieves an item from an array at a specified index, with type safety.
// Constraints:
// Apply constraints on generics to restrict the types that can be used with the mergeObjects function (e.g., only objects with a certain structure).
// Default Generics:
// Implement a generic function createPair that creates a tuple from two values, with a default type provided for one of the generic parameters.
// Error Handling:
// Handle cases where operations on the generic class or functions might fail due to type issues, providing user-friendly error messages.
// Deliverables:
// A TypeScript file that includes:
// The implementation of the DataStorage generic class.
// The mergeObjects, getArrayItem, and createPair generic functions.
// Use of generic constraints and default generic parameters.
// Demonstrations of using the generic class and functions with different data types.
// Comments explaining how generics improve code flexibility and type safety.
// Verification that the TypeScript compiler reports no errors.
//creating generic class
class DataStorage {
    constructor() {
        this.storage = [];
    }
    // public static storage: any[] = [];
    //add items
    addItem(value) {
        this.storage.push(value);
    }
    //remove items
    removeItems(value) {
        let index = this.storage.indexOf(value);
        if (index !== -1) {
            let removedItem = this.storage.splice(index, 1);
            console.log(`Removed item: ${removedItem}`);
            console.log(`Updated Storage: ${this.storage}`);
        }
        else {
            console.log("Item not found on storage");
        }
    }
    //retrieve items
    viewItems() {
        console.log([...this.storage]);
    }
}
//string storage
let str1 = new DataStorage();
str1.addItem("string");
str1.addItem("string name");
let obj1 = new DataStorage();
obj1.addItem({ id: 1, name: "Alice" });
obj1.addItem({ id: 2, name: "Bob" });
//number storage
let num1 = new DataStorage();
num1.addItem(1);
num1.addItem(2);
num1.addItem(3);
//view collection
str1.viewItems();
num1.viewItems();
obj1.viewItems();
//remove items from collection
str1.removeItems("string");
str1.removeItems("strig");
//generic functions
const object1 = {
    id: 1,
    name: "Alice",
};
const object2 = {
    id: 2,
    email: "alice@gmail.com",
};
function mergeObjects(a, b) {
    const mergedObj = Object.assign(Object.assign({}, a), b);
    console.log(mergedObj);
}
mergeObjects(object1, object2);
//function getArrayItem
function getArrayItem(a, ind) {
    if (ind > 0 && ind < a.length) {
        return a[ind];
    }
    return undefined;
}
const numberArray = [10, 20, 30, 40, 50];
const arrayItem = getArrayItem(numberArray, 2);
console.log(`Retrieved item: ${arrayItem}`);
function mergeObjectsAgain(a, b) {
    const mergedObj = Object.assign(Object.assign({}, a), b);
    console.log(mergedObj);
}
mergeObjectsAgain(object1, object2);
//default generic
// Implement a generic function createPair that creates a tuple from two values, with a default type provided for one of the generic parameters.
function createPair(a, b) {
    let tuple = [a, b];
    console.log(`Created tuple: ${tuple}`);
}
createPair(20, 21);
createPair("This is a string ", 21);
//function error handling
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return (a + b);
    }
    else if (typeof a === "string" && typeof b === "string") {
        return (a + b);
    }
    else {
        console.error("Error: The '+' operator can only be applied to numbers or strings.");
        return null;
    }
}
console.log(add(1, 2));
console.log(add("HEllo ", "world"));
console.log(add(true, false)); //error
