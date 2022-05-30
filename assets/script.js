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
function hourofday(){
    $(".time-block").each(function (){
        var timeblockhour = parseInt($(this).attr("id").split("hour")[1]);
        
        if (currentHour < timeblockhour) {
            $(this).addClass('future');
            $(this).removeClass('present');
            $(this).removeClass('past');
        } else if (currentHour === timeblockhour) {
            $(this).addClass('present');
            $(this).removeClass('future');
            $(this).removeClass('past');
        } else {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        }
    })
}
hourofday();



// Refreshes page every second to get date
setInterval(displayTime, 1000);


// Timeblocks for standard business hours
// each timeblock is color coded to indicate whether it is past, present or future
// click timeblock, user can enter an event
// Click save button for timeblock, saved in local storage
// refresh page, save event persists