"use strict";

// function logUser(string) {
//     return (string + " has logged in for the day");
// }
//
// console.log(logUser("kyle"));

// function logUser(string) {
//     if (typeof string === "string");
//     return (`${string} has logged in for the day`);
// }

console.log(logUser("Kyle"));

// Create an object literal with the following properties: a string property called “username” and a string property called “email” with string values representing the property name to them.
//     Assign your object literal into a variable called “userObject”. Console.log the objects properties to verify your values are assigned into the object properly.
// console.log(userObject.username) // “ken2cool”
// console.log(userObject.email) // “ken2cool@yahoo.com”
// Bonus:
//     I. Refactor your logUser function to use your userObject’s property of username vs. an hardcoded string literal argument - update the string return from logUser to also include the userObject.email property e.g.: “ken2cool with email ken2cool@yahoo.com has logged in for the day.”
//         Ii. Refactor your userObject to have a userRoles property that is an array of strings listing the user’s roles - e.g “admin”, “moderator”, “buyer”, “seller” and other hypothetical roles a user could have on a website
// Iii. Refactor your user object to have a nested userProfile object property - this nested property should have a userProfileUrl property with a string value mocking a link to an image. The other property should be a userLocation property with a string value mocking a CityName, StateName location the user could be from. Finally, add a property called numLikes with a number value indicating the users received ‘likes’ in our hypothetical application.

let userObject = {
    username: "Kyle",
    email: "k@gmail.com"
}

console.log(userObject.username);
console.log(userObject.email);


console.log(logUser(userObject.username));

function logUser(userObject) {
    if (typeof userObject.username !== "string" || typeof userObject.email !== "string") {
    return false;
}
    return (`${object.username} has logged in for the day`);
}

userObject.userRoles = ["admin", "moderator"];

console.log(userObject.userRoles);

userObject.userProfile = {
    userProfileUrl: "abcd.jpg",
    userLocation: "San Antonio, Texas",
    numLikes: 7
}

console.log(userObject.userProfile.userLocation);