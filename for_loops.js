"use strict";

// let userNumber = prompt("Provide a number for multiplication table.");
// userNumber = parseInt(userNumber);
// function showMultiplicationTable() {
//     for (let x = 1; x <= 10 ; x++) {
//         console.log(userNumber + " x " + x + " = " +(userNumber * x));
//     }
// } console.log(showMultiplicationTable());



for (let x = 1; x <= 10; x++) {
    let tenRandomNumbers = Math.floor(Math.random() * (200 - 20 + 1) + 20);
    if (tenRandomNumbers % 2===0) {
        console.log(tenRandomNumbers + " is even.");
    } else {
        console.log(tenRandomNumbers + " is odd.");
    }
}