"use strict";
// 8. TS Union Types
// Assignment: Create a TypeScript application for a user profile management system where users can have different types of contact information (e.g., email, phone, or social media). Use union types to handle different contact methods.
// Requirements:
// Define a union type that represents the different possible contact methods.
// Create a UserProfile type that includes properties for basic user information and contact methods (using the union type).
// Implement functions to add and update contact information, ensuring that the type of contact method is checked and handled appropriately.
// Write logic to display user profiles, correctly formatting the contact information based on its type.
//function to add contact method
function addContactMethod(user, newContact) {
    user.contactMethod.push(newContact);
}
//function to update contact method
function updateContactMethod(user, newContact) {
    user.contactMethod = newContact;
}
//creating user
let user1 = {
    id: 1,
    name: "Alice",
    age: 23,
    contactMethod: [],
};
console.log(user1);
//adding contact method
addContactMethod(user1, { type: "email", value: "alice@gmail.com" });
// updating contact method
updateContactMethod(user1, [
    { type: "phone", value: 123455677 },
    { type: "linkedin", value: "linkedin/alice" },
]);
