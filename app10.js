"use strict";
// 10. TypeScript Casting
// Assignment: Develop a Data Parsing Tool that reads JSON data and converts it into a specific TypeScript object type using casting.
// Requirements:
// JSON Data Parsing:
// Parse a JSON string that represents an array of objects (e.g., a list of users with properties like id, name, email).
// Casting:
// After parsing the JSON, use type casting to convert the resulting data into a specific TypeScript object type.
// Use both as casting syntax and angle-bracket casting syntax to demonstrate different casting methods.
// Type Checking:
// Implement functions that safely access properties of the parsed objects, with type checks in place to handle potential runtime errors.
// Type Assertion:
// Demonstrate the use of type assertion to handle cases where you know more about the type than TypeScript’s type inference.
// Deliverables:
// A TypeScript file that includes:
// The JSON data parsing and casting.
// Functions to access and manipulate the parsed data.
// Demonstrations of both as and angle-bracket casting syntax.
// Use of type assertion to manage complex scenarios.
// Comments explaining the casting techniques and the potential risks involved.
// Verification that the TypeScript compiler reports no errors.
//json data as string
const jsonData = `
[
    {
        "id": 1,
        "name": "Alice Johnson",
        "age": 30,
        "email": "alice@gmail.com"
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "age": 25,
        "email": "bob.smith@example.com"
    }
]
`;
let userProfilesAsCasting = JSON.parse(jsonData); //as type assertion
let userProfilesAngleCasting = JSON.parse(jsonData); //angle bracket type assertion
console.log(userProfilesAsCasting);
console.log(userProfilesAngleCasting);
//function to safey access properties with type checking
function getEmail(user) {
    if (typeof user.email === "string") {
        return user.email;
    }
    return undefined;
}
function getName(user) {
    if (typeof user.name === "string") {
        return user.name;
    }
    return undefined;
}
userProfilesAsCasting.forEach((user) => {
    let name = getName(user);
    let email = getEmail(user);
    console.log(name, email);
});
