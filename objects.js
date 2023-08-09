"use strict";

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */
let person = {
    firstName: "Kyle",
    lastName: "Sowers"
};
console.log(`${person.firstName} ${person.lastName}`);


/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */
person.sayHello = function () {
    // console.log(`Hello from ${person.firstName} ${person.lastName}!`);
    return `Hello from ${this.firstName} ${this.lastName}!`;
};
console.log(person.sayHello());

/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

shoppers.forEach(function(shopper) {
    if (shopper.amount < 201){
        console.log(`${shopper.name}, your total was $${shopper.amount}, but the 12% discount required a purchase of more then $200. Your total is still $${shopper.amount}`);
    }
    if (shopper.amount > 200) {
       let newTotal = shopper.amount - (shopper.amount * .12);
        console.log(`${shopper.name}, your total was $${shopper.amount}, but with the 12% discount for a purchase of more then $200, your total is now $${newTotal.toFixed(2)}`);
    }
})

/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */
// let book1 = {
//     bookTitle: "Atomic Habits",
//     authorFirstName: "James",
//     authorLast: "Clear",
// }
// let book2 = {
//     bookTitle: "Deep Work",
//     authorFirstName: "Cal",
//     authorLast: "Newport",
// }
// let book3 = {
//     bookTitle: "Clean Code",
//     authorFirstName: "Robert",
//     authorLast: "Martin",
// }
// let book4 = {
//     bookTitle: "Think Like A Programmer",
//     authorFirstName: "V.",
//     authorLast: "Spraul",
// }
// let book5 = {
//     bookTitle: "Liftoff",
//     authorFirstName: "Eric",
//     authorLast: "Berger",
// }

let books = [{
    id: "1",
    bookTitle: "Atomic Habits",
    author: {
        firstName: "James",
        lastName: "Clear",
    },
},
    {
    id: "2",
    bookTitle: "Deep Work",
    author: {
        firstName: "Cal",
        lastName: "Newport",
    },
},
    {
    id: "3",
    bookTitle: "Clean Code",
    author:{
        firstName: "Robert",
        lastName: "Martin",
    },
},
    {
    id: "4",
    bookTitle: "Think Like A Programmer",
    author: {
        firstName: "V.",
        lastName: "Spraul",
    },
},
    {
    id: "5",
    bookTitle: "Liftoff",
    author: {
        firstName: "Eric",
        lastName: "Berger",
    },
}]
console.log(books[0].author.lastName);
console.log(books[3].author.firstName);

/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */
// books.forEach(function (bookDetails) {
//     console.log(`Book # ${books[i].id}`);
// })

// for (let i = 0; i < books.length; i++) {
//     console.log(`Book # ${books[i].id}`);
//     console.log(`Title: ${books[i].bookTitle}`);
//     console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
// }


/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */


function createBook() {
    let bookTitle = prompt("Provide a book title.");
    console.log(bookTitle);

    let authorsName = prompt("Provide authors first and last name");
    console.log(authorsName);
    let authorsNameArray = authorsName.split(" ");
    console.log(authorsNameArray);
    let firstName = authorsNameArray[0];
    console.log(firstName);
    let lastName = authorsNameArray[1];
    console.log(lastName);
    let book = {
        title: bookTitle, author: {authorsfirstName: firstName, authorslastName: lastName}
    }
    return book;
};

books.push(createBook());
console.log(books);


