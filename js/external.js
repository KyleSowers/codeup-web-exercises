"use strict";

// Simple opening alert
console.log("Hello from extrenal JavaScript");

alert("Welcome to my Website!");


// prompt user for favorite color
var userFavoriteColor = prompt("Tell me your favorite color.");

console.log("Users favorite color is " + userFavoriteColor.charAt(0).toLowerCase() + userFavoriteColor.slice(1) + ".");

// Making user input capitalized because it begins the next alert statement
userFavoriteColor = userFavoriteColor.charAt(0).toUpperCase() + userFavoriteColor.slice(1);

alert(userFavoriteColor + " is also my favorite color!");
// End of color prompt/alert


/* Below is the first problem of exercise 3 regarding movie rental costs */
alert('Movie rental rate is $3 a day.')

var theLittleMermaid = prompt("For how many days have you rented out the movie: The Little Mermaid?")
theLittleMermaid = parseInt(theLittleMermaid);

console.log("Days user has had The Little Mermaid: " + theLittleMermaid);

var brotherBear = prompt("For how many days have you rented out the movie: Brother Bear?")
brotherBear = parseInt(brotherBear);

console.log("Days user has had Brother Bear: " + brotherBear);

var hercules = prompt("For how many days have you rented out the movie: Hercules?")
hercules = parseInt(hercules);

console.log("Days user has had Hercules: " + hercules);

var totalUserCost = (theLittleMermaid + brotherBear + hercules) * 3;

console.log("User cost for all movies currently is: $" + totalUserCost);

alert("Your current rental cost for The Little Mermaid, Brother Bear, and Hercules is $" + totalUserCost);

/* Below is the second problem from exercise 3 regarding Google/Facebook/Amazon contracting pay for a week*/
alert('Contracting for three FAANG companies is a big deal! Let\'s figure out your payment for the week.');

// prompt answers inputs will be parsed to integers
var payGoogleContract = prompt("First, how much does the Google contract pay per hour?");
payGoogleContract = parseInt(payGoogleContract);

console.log("Google pays: $" + payGoogleContract + " per hour.");

var hoursThisWeekGoogle = prompt("How many hours were worked for Google this week?");
hoursThisWeekGoogle = parseInt(hoursThisWeekGoogle);

console.log("User hours worked for Google: " + hoursThisWeekGoogle);

var payFacebookContract = prompt("Now, how much does the Facebook contract pay per hour?");
payFacebookContract = parseInt(payFacebookContract);

console.log("Facebook pays: $" + payFacebookContract + " per hour.");

var hoursThisWeekFacebook = prompt("And how many hours were worked for Facebook this week?");
hoursThisWeekFacebook = parseInt(hoursThisWeekFacebook);

console.log("User hours worked for Facebook: " + hoursThisWeekFacebook);

var payAmazonContract = prompt("Finally, how much does the Amazon contract pay per hour?");
payAmazonContract = parseInt(payAmazonContract);

console.log("Amazon pays: $" + payAmazonContract + " per hour.");

var hoursThisWeekAmazon = prompt(" And how many hours were worked for Amazon this week?");
hoursThisWeekAmazon = parseInt(hoursThisWeekAmazon);

console.log("User hours worked for Amazon: " + hoursThisWeekAmazon);

var totalContractorWeekPay = (payGoogleContract * hoursThisWeekGoogle) + (payFacebookContract * hoursThisWeekFacebook) + (payAmazonContract * hoursThisWeekAmazon);

console.log("Total pay for work: $" + totalContractorWeekPay);

alert("Your total pay for the week before taxes should be $" + totalContractorWeekPay + ".");
//end of contractor weekly pay problem set

/* Below is the third problem from exercise 3 regarding whether an individual can enroll into a class */
alert("So I hear you want to join a class. Let's find out if you can at this time.");

var seatAvailable =  confirm("You are required to verify that the class is not full. Tell us, is space still available to join the class? Selecting \"okay\" advises yes. Selecting \"Cancel\" advises no.");

console.log("User suggests class availability: " + seatAvailable);

var noConflictingSchedule = confirm("You also must have the availability within your schedule to attend the class per class schedule. Have you identified the schedule requirements AND does your availability meet the class schedule requirements? Answer \"okay\" to indicate you DO have availability meeting class schedule. Answer \"cancel\" to indicate your availability DOES NOT meet class schedule needs.");

console.log("User suggests schedule availability works: " + noConflictingSchedule);

var meetsAcceptanceRequirement = seatAvailable && noConflictingSchedule;

console.log("User meets class entry requirements: " + meetsAcceptanceRequirement);

alert("Your current position of acceptance is " + meetsAcceptanceRequirement + ".");
// End of class acceptance problem set

/* Below is the fourth problem of exercise 3 regarding product offer */
alert('Does our product offer still apply? Let\'s find out!');

var isPremiumMember = confirm("To begin, being a premium member qualifies for offer. Are you a premium member? Answer \"okay\" for yes or \"cancel\" for no.");

console.log("User is a premium member: " + isPremiumMember);

var confirmPurchaseMin = confirm("If you answered \"okay\" to being a premium member previously, you may submit either answer now and move forward. Otherwise, non premium members do need to meet the min purchase of 2 items to qualify for product offer. If you are a non premium member, have you purchased a minimum of 2 items? Selecting \"okay\" for yes or \"cancel\" for no");

console.log("User meets min purchase requirement: " + confirmPurchaseMin);

var offerNotExpired = confirm("Lastly, the offer date must not be expired. Looking at your offer, is the offer date still valid? (meaning the expiry date has not passed) Answer \"okay'\" for not expired or \"cancel\" for expired.");

console.log("User offer is not expired: " + offerNotExpired);

var offerValidity = (isPremiumMember || confirmPurchaseMin) && offerNotExpired;

console.log("User offer was accepted: " + offerValidity);

alert("Your offer will be accepted: " + offerValidity + ".");
// End of product offer problem set

















