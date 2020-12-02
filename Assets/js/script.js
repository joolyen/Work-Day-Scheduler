var currentDay = $("#currentDay");
var timeBlocks = $(".time-block");

//date field 
var date = moment().format("dddd, MMMM Do");
currentDay.text(date);


var saveButton = document.querySelector('.saveBtn');



timeBlocks.each(function(){

    var currentTime = moment().format('HH');

    if($(this).attr('id') === currentTime){
        $(this).addClass('present');
    }
    else if ($(this).attr('id') >= currentTime) {
        $(this).addClass('past');
    }
    else {
        $(this).addClass('future');
    }
});

function renderDescriptions() {
    var description = localStorage.getItem("description");
}

saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var description = document.querySelector(".description").value;
    localStorage.setItem("description", description);

     renderDescriptions();
 });



