var currentDay = $("#currentDay");
var timeBlocks = $(".time-block");
var saveButton = $('.saveBtn');
var description = []; //need to be an array

//date field 
var date = moment().format("dddd, MMMM Do");
currentDay.text(date);

var currentTime = moment().format('H');

//setting time block colors
timeBlocks.each(function(){
    //creating a var to parse the id for multiple if statements
    var hour = parseInt($(this).attr('id'));

    if(hour == currentTime){
        $(this).addClass('present').removeClass("future past");
    }
    if(hour < currentTime) {
        $(this).addClass('past').removeClass("future present");
    }
    if(hour > currentTime) {
        $(this).addClass('future').removeClass("past present");
    }
});

function renderDescriptions() {
    description = localStorage.getItem("description");
}

saveButton("click", function(event) {
    event.preventDefault();

    var description = document.querySelector(".description").value;
    localStorage.setItem("description", description);

     renderDescriptions();
 });



