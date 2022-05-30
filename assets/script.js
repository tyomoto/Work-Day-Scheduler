// Global Variances 
var currentDate = $('#currentDay');
var container = $('.container');
// this will give us the current hour of the day
var currentHour = moment().hour();


// Displays current date in header container
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    currentDate.text(rightNow)
};

// Function to track what hour of the day it is
// Loop funciton to check each block
// If statements to set the color/class for each timeblock




// Refreshes page every second to get date
setInterval(displayTime, 1000);


// Timeblocks for standard business hours
// each timeblock is color coded to indicate whether it is past, present or future
// click timeblock, user can enter an event
// Click save button for timeblock, saved in local storage
// refresh page, save event persists