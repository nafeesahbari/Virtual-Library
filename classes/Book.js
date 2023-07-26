// import the Media class:
const { Media } = require('./Media');

// create your Book class:
class Book extends Media{
    constructor(author, numPages, rating) {
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    };
    summary() {
        return `Title: ${Media.title}, Author: ${this.author}, 
        Year: ${Media.year}, Page Count: ${this.numPages}, 
        Genre: ${Media.genre}, Rating: ${this.rating}`;
    };

    static highestRating(books) {
        const highestRatedBook = books.reduce((prev, curr) => {
        if (prev.rating < curr.rating) {
            return curr;
        } else {
            return prev;
        }
        });
        return highestRatedBook;
    }

}

// Examples
const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 4.4);
console.log(Media.totalMediaCount); // 1
const book2 = new Book('The Bluest Eye', 1970, 'Fiction', 'Toni Morrison', 206, 4.6);
console.log(Media.totalMediaCount); // 2
console.log(book1.summary()); // "Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960, Page Count: 281, Genre: Fiction, Rating: 4.4"
console.log(Book.highestRating([book1, book2])); // Returns book2

// don't change below
module.exports = { Book }

