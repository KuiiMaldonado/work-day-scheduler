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
    let text;
    let blockID;

    let classElement = target.attr('class')
    console.log(classElement);
    if (classElement === 'fas fa-save') {
        let btn = target.parent();
        console.log(btn);
        text = btn.siblings('.description').val();
        blockID = btn.parent().attr('id');
    }
    else {
        text = target.siblings('.description').val();
        blockID = target.parent().attr('id');
    }
    localStorage.setItem(blockID, text);
}

checkTimeBlock();
loadEvents();
$('.saveBtn').on('click', saveEvent);