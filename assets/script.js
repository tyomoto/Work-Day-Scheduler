// Global Variances 
var currentDate = $('#currentDay');
var container = $('.container');
// this will give us the current hour of the day
var currentHour = moment().hour();

// set so once html and css is all loaded, everything below will run.
$(document).ready(function() {
   
    // Function to display current date in header container
    function displayTime() {
        var rightNow = moment().format('MMM DD, YYYY');
        currentDate.text(rightNow)
    };

    // Function to track what hour of the day it is
    // Loop funciton to check each block
    // If statements to set the color/class for each timeblock depending on hour of day
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
    // runs the function above
    hourofday();
    

    // Local storage saving function
    $('.saveBtn').click(function(event){
        event.preventDefault();
        var time = $(this).parent().attr('id');
        var details = $(this).siblings('.daydetails').val();
        
        // When button is clicked, storage will be set based on the variables time and details, which were assigned above
        localStorage.setItem(time, details);
       
    });


    // Will check local storage for each time block value on page refresh and load it into the appropriate container
    $("#hour-9 .daydetails").val(localStorage.getItem('hour-9'));
    $('#hour-10 .daydetails').val(localStorage.getItem('hour-10'));
    $('#hour-11 .daydetails').val(localStorage.getItem('hour-11'));
    $('#hour-12 .daydetails').val(localStorage.getItem('hour-12'));
    $('#hour-13 .daydetails').val(localStorage.getItem('hour-13'));
    $('#hour-14 .daydetails').val(localStorage.getItem('hour-14'));
    $('#hour-15 .daydetails').val(localStorage.getItem('hour-15'));
    $('#hour-16 .daydetails').val(localStorage.getItem('hour-16'));
    $('#hour-17 .daydetails').val(localStorage.getItem('hour-17'));

    // Refreshes the date every second at the top of the page in the container so it will change
    setInterval(displayTime, 1000);
   
});

// This log will just show what is currently in the local storage in console. This is not necessary and is just for viewing.
    console.log(localStorage);

