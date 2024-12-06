// 5. TS Object Types
// Assignment: Develop a TypeScript program that models a library system. Create objects to represent books, authors, and library members. Define a method to check out a book, ensuring the objects are typed correctly.
// Requirements:
// Define object types for Book, Author, and LibraryMember.
// Ensure that each type includes relevant properties (e.g., title, author, ISBN for books; name, biography for authors).
// Implement a method that checks out a book to a library member, updating the member’s record and the book’s availability status.

//object type for book
type book = {
    title: string;
    author: string;
    ISBN: string;
    stock: number;
};

//object type for author
type author = {
    name: string;
    biography: string;
    birthDate: string;
};

//object type for library member
type member = {
    id: number;
    name: string;
    email: string;
    joiningDate: string;
    issuedBooksCount: number;
    issuedBooks: { title: string }[];
};

//adding books
let books: book[] = [
    {
        title: "Pride and Prejudice",
        author: "John Doe",
        ISBN: "978-3-16-148410-0",
        stock: 5,
    },
    {
        title: "1984",
        author: "George Orwell",
        ISBN: "978-0-452-28423-4",
        stock: 8,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        ISBN: "978-0-06-093546-7",
        stock: 3,
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        ISBN: "978-0-7432-7356-5",
        stock: 6,
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        ISBN: "978-0-14-243724-7",
        stock: 4,
    },
];

//adding author
let authors: author = {
    name: "Jane Austen",
    biography:
        "Jane Austen was an English novelist known primarily for her six major novels...",
    birthDate: "1775-12-16",
};

//adding library member
let members: member[] = [
    {
        id: 1,
        name: "Bob Dane",
        joiningDate: "2020-01-01",
        email: "bob@gmail.com",
        issuedBooksCount: 0,
        issuedBooks: [],
    },
    {
        id: 2,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        joiningDate: "2021-05-15",
        issuedBooksCount: 2,
        issuedBooks: [{ title: "Pride and Prejudice" }, { title: "1984" }],
    },
    {
        id: 3,
        name: "Charlie Smith",
        email: "charlie.smith@example.com",
        joiningDate: "2019-11-23",
        issuedBooksCount: 0,
        issuedBooks: [],
    },
    {
        id: 4,
        name: "Diana Prince",
        email: "diana.prince@example.com",
        joiningDate: "2022-07-09",
        issuedBooksCount: 1,
        issuedBooks: [{ title: "To Kill a Mockingbird" }],
    },
    {
        id: 5,
        name: "Eve Adams",
        email: "eve.adams@example.com",
        joiningDate: "2018-03-11",
        issuedBooksCount: 0,
        issuedBooks: [],
    },
];

//function to check out
function checkOut(title: string, memberId: number): void {
    //find book
    for (let book of books) {
        if (book.title == title) {
            //reduce stock
            book.stock -= 1;

            //updat member info
            for (let member of members) {
                if (member.id == memberId) {
                    //update issue count
                    member.issuedBooksCount += 1;

                    //update issued books array
                    member.issuedBooks.push({ title });
                }
            }
        }
    }
}

checkOut("1984", 3);
checkOut("The Great Gatsby", 3);
console.log(books);
console.log(members);
