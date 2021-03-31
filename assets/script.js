// current time logic
currentDay = document.getElementById('currentDay')
currentDay.textContent = moment().format('dddd, MMM Do');

// container var
var container = document.querySelector('.container')

// storage display logic
for (var i = 9; i < 18; i++) {
    currentItem = document.getElementById(i)
    currentItem.value = localStorage.getItem(i)
} 

// moment.js logic
var timeNow = moment().format('HH');
var timeLater = parseInt(timeNow) + 1

if(timeNow <= 8){
    for (var i = 9; i < 18; i++) {
        var nextTime = document.getElementById(i)
        nextTime.classList.add('future')
    } 
}

for (var i = 9; i < timeNow; i++) {
    var nextTime = document.getElementById(i)
    nextTime.classList.remove('present')
    nextTime.classList.remove('future')
} 

for (var i = timeNow; i < 18; i++) {
    var nextTime = document.getElementById(i)
    nextTime.classList.add('present')
} 

for (var i = timeLater; i < 18; i++) {
    var nextTime = document.getElementById(i)
    nextTime.classList.add('future')
} 

// save button logic
container.addEventListener('click', function(event){
    elementCheck = JSON.stringify(event.toElement.id)
    
    if(elementCheck.includes('btn')){
        eventID = JSON.stringify(event.toElement.id)
        eventID = eventID.replace('btn', '')
        eventID = JSON.parse(eventID)
        var differentButtons = document.getElementById(eventID)
        localStorage.setItem( eventID, differentButtons.value)
    }

})

// clear button logic
clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
});
