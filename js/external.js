"use strict";

// Simple opening alert
console.log("Hello from extrenal JavaScript");

alert("Welcome to my Website!");

// prompt user for favorite color
var userFavoriteColor = prompt("Tell me your favorite color.");

// Make sure use of prompt in below alert is capitalized because it begins a sentence
userFavoriteColor = userFavoriteColor.charAt(0).toUpperCase() + userFavoriteColor.slice(1);

alert(userFavoriteColor + " is also my favorite color!");
// End of color prompt/alert

/* Below is the first problem of exercise 3 regarding movie rental costs */
alert('Movie rental rate is $3 a day.')

var theLittleMermaid = prompt("For how many days have you rented out movie: The Little Mermaid?")
theLittleMermaid = parseInt(theLittleMermaid);

var brotherBear = prompt("For how many days have you rented out movie: Brother Bear?")
brotherBear = parseInt(brotherBear);

var hercules = prompt("For how many days have you rented out movie: Hercules?")
hercules = parseInt(hercules);

var totalUserCost = (theLittleMermaid + brotherBear + hercules) * 3;

alert("Your current rental cost for The Little Mermaid, Brother Bear, and Hercules is $" + totalUserCost);

/* Below is the second problem from exercise 3 regarding Google/Facebook/Amazon contracting pay for a week*/
alert('Contracting for three FAANG companies is a big deal! Let\'s figure out your payment for the week.');

// prompt answers inputs will be parsed to integers
var payGoogleContract = prompt("First, how much does the Goolge contract pay per hour?");
payGoogleContract = parseInt(payGoogleContract);

var hoursThisWeekGoogle = prompt("How many hours were worked for Google this week?");
hoursThisWeekGoogle = parseInt(hoursThisWeekGoogle);

var payFacebookContract = prompt("Now, how much does the Facebook contract pay per hour?");
payFacebookContract = parseInt(payFacebookContract);

var hoursThisWeekFacebook = prompt("And how many hours were worked for Facebook this week?");
hoursThisWeekFacebook = parseInt(hoursThisWeekFacebook);

var payAmazonContract = prompt("Finally, how much does the Amazon contract pay per hour?");
payAmazonContract = parseInt(payAmazonContract);

var hoursThisWeekAmazon = prompt(" And how many hours were worked for Amazon this week?");
hoursThisWeekAmazon = parseInt(hoursThisWeekAmazon);

var totalContractorWeekPay = (payGoogleContract * hoursThisWeekGoogle) + (payFacebookContract * hoursThisWeekFacebook) + (payAmazonContract * hoursThisWeekAmazon);

/* This alert tells user their total pay form above collected prompt input data values */
alert("Your total pay for the week, by reported pay rate and hours worked, should be $" + totalContractorWeekPay + ".");
//end of contractor weekly pay problem set

/* Below is the third problem from exercise 3 regarding whether an individual can enroll into a class */
alert("So I hear you want to join a class. Let's find out if you can at this time.");

var seatAvailable =  confirm("You are required to verify that the class is not full. Tell us, is space still available to join the class? Selecting \"okay\" advises yes. Selecting \"Cancel\" advises no.");

var noConflictingSchedule = confirm("You also must have the availability within your schedule to attend the class per class schedule. Have you identified the schedule requirements AND does your availability meet the class schedule requirements? Answer \"okay\" to indicate you DO have availability meeting class schedule. Answer \"cancel\" to indicate your availability DOES NOT meet class schedule needs.");

var meetsAcceptanceRequirement = seatAvailable && noConflictingSchedule;

alert("Your current position of acceptance is " + meetsAcceptanceRequirement + ".");
// End of class acceptance problem set

/* Below is the fourth problem of exercise 3 regarding product offer */
alert('Does our product offer still apply? Let\'s find out!');

var isPremiumMember = confirm("To begin, premium members qualify for offer, if not expired. Are you a premium member? Answer \"okay\" for yes. Answer \"cancel\" for no.");

var confirmPurchaseMin = confirm("If you advised in previous prompt you are a premium member, you may submit either answer to move forword now. Otherwise, non members do need to meet a min purchase of 2 items to qualify for product offer. If you are a non premium member, identified by selecting \"cancel\" in last question pop-up, have you purchased a minimum of 2 items?");

var offerNotExpired = confirm("Lastly, the offer date must not be expired. Looking at your offer, is the offer date still valid? (meaning the expiry date has not passed) Answer \"okay'\" if offer date is still valid. Answer \"cancel\" is offer date has already passed.");

var offerValidity = (isPremiumMember || confirmPurchaseMin) && offerNotExpired;

alert("Your offer is accepted: " + offerValidity + ".");
// End of product offer problem set

















