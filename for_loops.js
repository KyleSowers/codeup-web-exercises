"use strict";

let userNumber = prompt("Provide a number for multiplication table.");
userNumber = parseInt(userNumber);
function showMultiplicationTable() {
    for (let x = 1; x <= 10 ; x++) {
        console.log(userNumber + " x " + x + " = " +(userNumber * x));
    }
} console.log(showMultiplicationTable());