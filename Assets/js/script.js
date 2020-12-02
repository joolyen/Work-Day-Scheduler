var currentDay = $("#currentDay");
var timeBlocks = $(".time-block");
var saveButton = $('.saveBtn');

//date field 
var date = moment().format("dddd, MMMM Do");
currentDay.text(date);

var currentTime = moment().format('H');

//setting time block colors
timeBlocks.each(function(){

    if($(this).attr('id') == currentTime){
        $(this).addClass('present').removeClass("past future");
    }
    if ($(this).attr('id') < currentTime) {
        $(this).addClass('past').removeClass("present future");
    }
    if ($(this).attr('id') > currentTime) {
        $(this).addClass('future').removeClass("past present");
    }
});

function renderDescriptions() {
    var description = localStorage.getItem("description");
}

saveButton("click", function(event) {
    event.preventDefault();

    var description = document.querySelector(".description").value;
    localStorage.setItem("description", description);

     renderDescriptions();
 });



