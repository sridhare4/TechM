// Script to enable to stopwatch functionality

timerElement = document.getElementById("stopwatch-timer");
resetElement = document.getElementById("reset-btn");
startElement = document.getElementById("start-btn");

   
resetElement.addEventListener("click", resetTimer);
resetElement.disabled = false;
startElement.addEventListener("click", startTimer);
startElement.disabled = false;

//Timer object
timerObj = null;
currentTime = 0;

// Start the stopwatch
function startTimer() {
    timerObj = setInterval(updateTimer, 1000);
    startElement.value = "Stop";
    startElement.removeEventListener("click", startTimer);
    startElement.addEventListener("click", stopTimer);
}

// Stop the stopwatch
function stopTimer() {
    clearInterval(timerObj);
    timerObj = null;
    startElement.value = "Start";
    startElement.removeEventListener("click", stopTimer);
    startElement.addEventListener("click", startTimer);
} 

// Reset the stopwatch
function resetTimer() {
    if (timerObj != null) { stopTimer(); }
    currentTime = -1;
    updateTimer();
}

// Update the timer value for stopwatch
function updateTimer() {
    // Calculate the time components - HOURS, MINS, SECONDS
    currentTime++;
    var timePart = currentTime;
    var hours = Math.floor(timePart / 3600);
    timePart -= hours * 3600;
    var mins = Math.floor(timePart / 60);
    timePart -= mins * 60;
    var secs = timePart;

    // Update the timer value
    if (hours<10) { hours = "0" + hours; }
    if (mins<10) { mins = "0" + mins; }
    if (secs<10) { secs = "0" + secs; }
    timerElement.innerHTML = hours + ":" + mins + ":" + secs;
}