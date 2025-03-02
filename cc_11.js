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

