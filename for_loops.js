"use strict";

// let userNumber = prompt("Provide a number for multiplication table.");
// userNumber = parseInt(userNumber);
// function showMultiplicationTable() {
//     for (let x = 1; x <= 10 ; x++) {
//         console.log(userNumber + " x " + x + " = " +(userNumber * x));
//     }
// } console.log(showMultiplicationTable());



// for (let x = 1; x <= 10; x++) {
//     let tenRandomNumbers = Math.floor(Math.random() * (200 - 20 + 1) + 20);
//     if (tenRandomNumbers % 2===0) {
//         console.log(tenRandomNumbers + " is even.");
//     } else {
//         console.log(tenRandomNumbers + " is odd.");
//     }
// }


// let result = "";
// let numberOfLoops = 9;
// let  currentLoop = 1;
//
// for ( currentLoop; currentLoop <= numberOfLoops; currentLoop++) {
//     let line = "";
//
//     for (let i = 1; i <= currentLoop; i++) {
//         line += currentLoop;
//     }
//
//     result += line + "\n";
// }
//
// console.log(result);

// for (let x = 100; x >= 5; x-=5) {
//     console.log(x);
// }

for (let x = 100; x >= 5; x--) {
    if (x % 5==0) {
        console.log(x);
    } else {
        continue;
    }
}