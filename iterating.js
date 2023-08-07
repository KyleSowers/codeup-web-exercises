"use strict";

/**
 * TODO:
 * Create an array of 4 people's names and store it in a variable called
 * 'names'.
 */
let names = ['Bob', 'Kevin', 'Micheal', 'Andrew'];

/**
 * TODO:
 * Create a log statement that will log the number of elements in the names
 * array.
 */
console.log(names);

console.log("\n");
/**
 * TODO:
 * Create log statements that will print each of the names individually by
 * accessing each element's index.
 */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

console.log("\n");
/**
 * TODO:
 * Write some code that uses a for loop to log every item in the names
 * array.
 */
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("\n");
/**
 * TODO:
 * Refactor your above code to use a `forEach` loop
 */
names.forEach(function(element) {
    console.log(element);
});

console.log("\n");
/**
 * TODO:
 * Create the following three functions, each will accept an array and
 * return an an element from it
 * - first: returns the first item in the array
 * - second: returns the second item in the array
 * - last: returns the last item in the array
 *
 * Example:
 *  > first([1, 2, 3, 4, 5]) // returns 1
 *  > second([1, 2, 3, 4, 5]) // returns 2
 *  > last([1, 2, 3, 4, 5]) // return 5
 */
let numbers = [1, 2, 3, 4, 5];

function first() {
    return numbers[0];
}
console.log(first());

function second() {
    return numbers[1];
}
console.log(second());

function third() {
    return numbers[4];
}
console.log(third());