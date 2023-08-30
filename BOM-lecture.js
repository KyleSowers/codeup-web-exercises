"use strict"

//set interval
// let count = 0;
//
// let max = 10;
//
// let interval = 1000;
//
// let intervalId= window.setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log("All done");
//     } else {
//         count++;
//         console.log("Repeating this line " + count);
//     }
// }, interval);

//set timeout
let delay = 5000 // delay time in milliseconds

let timeOutId = setTimeout(function () {
    alert("Here is a delayed hello!");
}, delay);