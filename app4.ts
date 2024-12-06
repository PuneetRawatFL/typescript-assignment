// 4. TS Tuples
// Assignment: Create a TypeScript program that manages a list of user tuples, where each tuple contains a user's ID (number), name (string), and email (string).
// Requirements:
// Define a tuple type for a user with an ID, name, and email.
// Create an array of users and write functions to add a new user and find a user by ID.
// Write a function that returns a user's name and email as a tuple, given their ID.

//defining tuple
type tuple = [number, string, string];

//array of users with type tuple
let users: tuple[] = [
    [1, "Alice", "alice@example.com"],
    [2, "Bob", "bob@example.com"],
    [3, "Charlie", "charlie@example.com"],
];
console.log(users);

//function to add a new user
function addUser(id: number, name: string, email: string): void {
    users.push([id, name, email]);
}
addUser(5, "Eve", "eve@example.com");
console.log(users);

//function to find user by id
function findUser(id: number): void {
    let found = false;
    for (let user of users) {
        if (user[0] === id) {
            found = true;
            break;
        }
    }
    if (found) {
        console.log("User found");
    } else {
        console.log("Invalid ID");
    }
}
findUser(6);

//function to returns user's name and email as a tuple from id ID.
function returnUser(id: number): [string, string] | null {
    for (let user of users) {
        if (user[0] === id) {
            return [user[1], user[2]];
        }
    }
    return null;
}
let data = returnUser(2);
if (data == null) {
    console.log("Invalid ID");
} else {
    console.log("Name: ", data[0]);
    console.log("Email: ", data[1]);
}
