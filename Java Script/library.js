const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let books = [];

function addBook(title, author) {
    books.push({
        title: title,
        author: author,
        available: true
    });

    console.log("\nBook added successfully!");
}

function removeBook(title) {
    let index = books.findIndex(book =>
        book.title.toLowerCase() === title.toLowerCase());

    if (index !== -1) {
        books.splice(index, 1);
        console.log("\nBook removed successfully!");
    } else {
        console.log("\nBook not found!");
    }
}

function searchBook(title) {
    let book = books.find(book =>
        book.title.toLowerCase() === title.toLowerCase());

    if (book) {
        console.log("\nBook Found!");
        console.log("Title     :", book.title);
        console.log("Author    :", book.author);
        console.log("Available :", book.available);
    } else {
        console.log("\nBook not found!");
    }
}

function borrowBook(title) {
    let book = books.find(book =>
        book.title.toLowerCase() === title.toLowerCase());

    if (!book) {
        console.log("\nBook not found!");
    } else if (!book.available) {
        console.log("\nBook already borrowed!");
    } else {
        book.available = false;
        console.log("\nBook borrowed successfully!");
    }
}

function returnBook(title) {
    let book = books.find(book =>
        book.title.toLowerCase() === title.toLowerCase());

    if (!book) {
        console.log("\nBook not found!");
    } else if (book.available) {
        console.log("\nBook is already available.");
    } else {
        book.available = true;
        console.log("\nBook returned successfully!");
    }
}

function displayBooks() {
    console.log("\n========== BOOK LIST ==========");

    if (books.length === 0) {
        console.log("No books available.");
    } else {
        books.forEach((book, index) => {
            console.log(`${index + 1}.`);
            console.log("Title     :", book.title);
            console.log("Author    :", book.author);
            console.log("Available :", book.available);
            console.log("-------------------------");
        });
    }
}

rl.question("Enter Book Title: ", (title) => {

    rl.question("Enter Author Name: ", (author) => {

        addBook(title, author);

        rl.question("Enter Book to Search: ", (searchTitle) => {

            searchBook(searchTitle);

            rl.question("Enter Book to Borrow: ", (borrowTitle) => {

                borrowBook(borrowTitle);

                rl.question("Enter Book to Return: ", (returnTitle) => {

                    returnBook(returnTitle);

                    rl.question("Enter Book to Remove: ", (removeTitle) => {

                        removeBook(removeTitle);

                        displayBooks();

                        rl.close();

                    });

                });

            });

        });

    });

});