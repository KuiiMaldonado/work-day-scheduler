//Set today's date
var currentDayElement = $('#currentDay');
currentDayElement.text(moment().format('dddd, MMMM Do'));

//Function to define if the time block is in the past, present or future.
function checkTimeBlock() {
    let currentTime = moment().hour();

    $('.time-block').each(function () {
       let blockHour = $(this).attr('id');
       let textArea = $(this).find('textarea')

       if (blockHour < currentTime)
           textArea.addClass('past');
       else if (blockHour > currentTime)
           textArea.addClass('future');
       else if (blockHour == currentTime)
           textArea.addClass('present')
    });
}

//Funtcion to save the calendar event on the clicked hour.
function saveEvent(event) {
    let target = $(event.target);
    console.log(target);

    let text = target.siblings('.description').val();
    console.log(text);
}

checkTimeBlock();
$('.saveBtn').on('click', saveEvent);