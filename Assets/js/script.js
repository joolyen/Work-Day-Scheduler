var currentDay = $('#currentDay');
var timeBlocks = $('.time-block');
var description = []; //needs to be an array
var planner = $('.planner');

//date field 
var date = moment().format('dddd, MMMM Do');
currentDay.text(date);

var currentTime = moment().format('H');

function setSchedule(){
    timeBlocks.each(function(){
      var thisBlock = $(this);
      var thisBlockHr = parseInt(thisBlock.attr('id'));
  
      var descObj = {
        hour: thisBlockHr,
        text: "",
      }
      //add to description array
      description.push(descObj);
    });
    localStorage.setItem('notes', JSON.stringify(description));
  }

//setting time block colors
function setupBlocks(){
    timeBlocks.each(function(){
        //creating a var to parse the id for multiple if statements
        var hour = parseInt($(this).attr('id'));

        if(hour == currentTime){
            $(this).addClass('present').removeClass('future past');
        }
        if(hour < currentTime) {
            $(this).addClass('past').removeClass('future present');
        }
        if(hour > currentTime) {
            $(this).addClass('future').removeClass('past present');
        }
    });
}

function renderDescriptions(){
    //setting up local storage
    description = localStorage.getItem('notes');
    description = JSON.parse(description);
    //looping through description values and creating a variable so we know which hour they are connected to
    for (var i = 0; i < description.length; i++){
        var descHour = description[i].hour;
        var descText = description[i].text; 
   
    $('[id=' + descHour + ']').children('textarea').val(descText);
  }
  console.log(description);
}

function saveDesc(){
    var timeBlock = $(this).parent();
    var timeUpdate = $(this).parent().attr('id');
    var newDesc = (($(this).parent()).children('textarea')).val();

     //see which item we need to update based on the hour of the button clicked matching
    for (var j = 0; j < description.length; j++){
        if (description[j].hour == timeUpdate){
        //set its text to what was added to textarea
        description[j].text = newDesc;
        }
    }
    localStorage.setItem('notes', JSON.stringify(description));
    renderDescriptions();
}

$(document).ready(function(){
    //setup time blocks 
    setupBlocks();
    if(!localStorage.getItem('notes')){
      setSchedule();
    }
    
    renderDescriptions();

    planner.on('click', 'button', saveDesc);
});



