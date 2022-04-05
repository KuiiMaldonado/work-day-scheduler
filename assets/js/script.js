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

//Function to load the events that are in the localStorage.
function loadEvents() {
    $('.time-block').each(function () {
        let blockID = $(this).attr('id');
        let event = localStorage.getItem(blockID);

        if (event !== null) {
            $(this).find('.description').val(event);
        }
    })
}

//Funtcion to save the calendar event on the clicked hour.
function saveEvent(event) {
    let target = $(event.target);
    let text = target.siblings('.description').val();
    let blockID = target.parent().attr('id');

    //Sometimes either of the variable is undefined. That's why I validate before saving.
    if (text !== undefined && blockID !== undefined)
        localStorage.setItem(blockID, text);
    else
        alert('Ooops something went wrong when saving. Please try again');
}

checkTimeBlock();
loadEvents();
$('.saveBtn').on('click', saveEvent);