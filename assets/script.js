// Global Variances 
var currentDate = $('#currentDay');
var container = $('.container');
// this will give us the current hour of the day
var currentHour = moment().hour();

$(document).ready(function() {
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
    // Refreshes page every second to get date
    
    hourofday();
    
    

    // Local Storage Set up for Save Button

    $('.saveBtn').click(function(event){
        event.preventDefault();
        var time = $(this).parent().attr('id');
        var details = $(this).siblings('.daydetails').val();
        
        localStorage.setItem(time, details);
        // code to make sure local storage is being stored on save button click
        console.log(time, details);
    });


    // load local storage
    $("#hour-9 .daydetails").val(localStorage.getItem('hour-9'));
    $('#hour-10 .daydetails').val(localStorage.getItem('hour-10'));
    $('#hour-11 .daydetails').val(localStorage.getItem('hour-11'));
    $('#hour-12 .daydetails').val(localStorage.getItem('hour-12'));
    $('#hour-13 .daydetails').val(localStorage.getItem('hour-13'));
    $('#hour-14 .daydetails').val(localStorage.getItem('hour-14'));
    $('#hour-15 .daydetails').val(localStorage.getItem('hour-15'));
    $('#hour-16 .daydetails').val(localStorage.getItem('hour-16'));
    $('#hour-17 .daydetails').val(localStorage.getItem('hour-17'));

    setInterval(displayTime, 1000);
   
   
});

    console.log(localStorage);

// Timeblocks for standard business hours
// each timeblock is color coded to indicate whether it is past, present or future
// click timeblock, user can enter an event
// Click save button for timeblock, saved in local storage
// refresh page, save event persists