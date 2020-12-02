var saveButton = document.querySelector('.saveBtn');

$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(".time-block").each(function(){

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

saveBuuton.addEventListener("click", function(event) {
    event.preventDefault();

    var description = document.querySelector(".description").value;
    localStorage.setItem("description", description);

     renderDescriptions();
 });



