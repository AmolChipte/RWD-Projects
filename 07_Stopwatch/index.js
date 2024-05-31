const startElement = document.getElementById("start");
const stopElement = document.getElementById("stop");
const resetElement = document.getElementById("reset");
const timerElement = document.getElementById("timer");
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
stopElement.disabled = true;
resetElement.disabled = true;

function startTimer(){
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerElement.textContent = formatTime(elapsedTime);
    },10)
    startElement.disabled = true;
    stopElement.disabled = false;
    resetElement.disabled = true;
}

function formatTime(elapsedTime){
    const miliseconds = Math.floor((elapsedTime % 1000)/10);
    const seconds = Math.floor((elapsedTime % (1000 * 60))/1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60))/ (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00")+":"+
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")+":"+
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")+":"+
        (miliseconds > 9 ? miliseconds : "0"+miliseconds)
    );
}

function stopTimer(){
    clearInterval(timerInterval);
    startElement.disabled = false;
    stopElement.disabled = true;
    resetElement.disabled = false;
}

function resetTimer(){
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerElement.textContent = "00:00:00:00";
    stopElement.disabled = true;
    resetElement.disabled = true;
    startElement.disabled = false;
}

startElement.addEventListener("click",startTimer);
stopElement.addEventListener("click",stopTimer);
resetElement.addEventListener("click",resetTimer);