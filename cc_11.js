//Inital Commit 
//Task 1 

class Book {
    //Initialize Properties
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    //Return the book details 
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    //Update the number of copies
    updateCopies(quantity) {
        this.copies += quantity;
    }
}
//Test Case 1: Create a book and log 
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());//Log
//Test Case 2: Update the copies 
book1.updateCopies(-1);
console.log(book1.getDetails());//Log

//Task 2
class Borrower {
    //Constructor to initialize borrower properties
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = []; //Array to store borrowed book titles
    }
    //Borrow a book by adding its title to borrowedBooks
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }
    //Return a book by removing its title 
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
}
//Test Case 1: Create a borrower and borrow a book
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
//Test Case 2: Return the borrowed book
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

//Task 3

class Library {
    //Initialize books and borrowers arrays
    constructor() {
        this.books = [];
        this.borrowers = [];
    }
    //Add a new book to the library
    addBook(book) {
        this.books.push(book);
    }
    //List all books in the library
    listBooks() {
        if (this.books.length === 0) {
            console.log("No books available in the library.");
        } else {
            this.books.forEach(book => {
                console.log(book.getDetails());
            });
        }
    }
}
//Test Case 1
const library = new Library();
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
library.addBook(book2);
library.listBooks();

