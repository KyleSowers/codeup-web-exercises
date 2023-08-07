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

//

// for (let x = 100; x >= 5; x-=5) {
//     console.log(x);
// }

// for (let x = 100; x >= 5; x--) {
//     if (x % 5==0) {
//         console.log(x);
//     } else {
//         continue;
//     }
// }


//Second Run of Loop Exercises
//Problem 2 "Show Multiplication Table"
function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        if (typeof number !== "number") {
            continue;
        }
        console.log(number + " x " + i + ' = ' + (number * i));
    }
}
showMultiplicationTable(undefined);
showMultiplicationTable(null);
showMultiplicationTable(7);
showMultiplicationTable("");
showMultiplicationTable(30);
showMultiplicationTable("Bob");
//End of Problem 2 "Show Multiplication Table"

//Problem 3 "For Loop 10 Random Between 20 and 200"
// let randomNumberGenerated = Math.floor(Math.random() * 181) + 20;

for (let i = 1; i <= 10; i++) {
    let randomNumberGenerated = Math.floor(Math.random() * 181) + 20;
    if (randomNumberGenerated % 2 === 0) {
        console.log(randomNumberGenerated + " is even");
    } else if (randomNumberGenerated % 2 === 1) {
        console.log(randomNumberGenerated + " is odd");
    }
}


var line = "";

for (let initialNumber = 1; initialNumber <= 9; initialNumber++) {

    for (let additionalNumber = 1; additionalNumber <= initialNumber; additionalNumber++) {
         line = (line + initialNumber);
    } line += "\n";
}

console.log(line);
