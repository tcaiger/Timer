
//Global variables
var minutes = 0;
var secondsRemaining;
var intervals = 1;
var intervalCounter = 0;
var intervalsRemaining;
var intervalHandle;

//Grab buttons
var intervalUpButton = document.getElementById("intervalUpButton");
var intervalDownButton = document.getElementById("intervalDownButton");
var timeUpButton = document.getElementById("timeUpButton");
var timeDownButton = document.getElementById("timeDownButton");

//Functions for when users click on inputs
timeUpButton.onclick = function() {    
    minutes++;
    var display = document.getElementById("time");
    var message = '0' + minutes + ':00';
    display.innerHTML = message;
    document.getElementById("leadIn").innerHTML = "LEAD IN TIME: 60 SECONDS<br>MEDITATION TIME: "+(minutes*intervals)+" MINUTES";
};
timeDownButton.onclick = function() {    
    minutes--;
    var display = document.getElementById("time");
    var message = '0' + minutes + ':00';
    display.innerHTML = message;
    document.getElementById("leadIn").innerHTML = "LEAD IN TIME: 60 SECONDS<br>MEDITATION TIME: "+(minutes*intervals)+" MINUTES";
};
intervalUpButton.onclick = function() {    
    intervals++;
    var display = document.getElementById("intervals");
    var message = '1 / ' + intervals;
    display.innerHTML = message;
    document.getElementById("leadIn").innerHTML = "LEAD IN TIME: 60 SECONDS<br>MEDITATION TIME: "+(minutes*intervals)+" MINUTES";
};
intervalDownButton.onclick = function() {    
    intervals--;
    var display = document.getElementById("intervals");
    var message = '1 / ' + intervals;
    display.innerHTML = message;
    document.getElementById("leadIn").innerHTML = "LEAD IN TIME: 60 SECONDS<br>MEDITATION TIME: "+(minutes*intervals)+" MINUTES";
};

//Set up the timer variables
function startUp () {
    // how many seconds?
    secondsRemaining =  59;
    intervalsRemaining = intervals;
    // every second, call the "tick" function
    intervalHandle = setInterval(tick, 1000);
    // hide the buttons and lead in time and show the pause button
    document.getElementById("timeUpButton").style.display = "none";
    document.getElementById("timeDownButton").style.display = "none";
    document.getElementById("intervalUpButton").style.display = "none";
    document.getElementById("intervalDownButton").style.display = "none";
    document.getElementsByClassName("leadIn")[0].style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("pause").style.display = "flex";
    document.getElementById("stop").style.display = "flex";
    
}

//Changes the time display each second
function tick() {
    // grab the h1
    var timeDisplay = document.getElementById("time");
    
    // turn seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    
    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    // add a leading zero (as a string value) if minutes less than 10
    if (min < 10) {
        min = "0" + min;
    }
    // concatenate with colon
    var message = min + ":" + sec;
    // now change the display
    timeDisplay.innerHTML = message;

    //Update the interval display
    var intervalDisplay = document.getElementById("intervals");
    var intervalMessage = intervalCounter +' / '+ intervals;
    intervalDisplay.innerHTML = intervalMessage;

    // Reset if seonds = 0
    if (secondsRemaining === 0) {
    	//play gong sound
        var gong = document.getElementById("gong");
        gong.play();
        //Reset seconds remaining & decrement intervals remaining
    	intervalsRemaining--;
    	secondsRemaining = minutes * 60;

        //Update interval counter
        intervalCounter++;    	
    }
    //stop if intervals are finished
    if(intervalsRemaining == -1){
            alert('intervals done');
            clearInterval(intervalHandle);
    }																
    // subtract from seconds remaining
    secondsRemaining--;
}

//Handels when a user pushes start
var startButton = document.getElementById("start");
startButton.onclick = function () {
    startUp();   
};









