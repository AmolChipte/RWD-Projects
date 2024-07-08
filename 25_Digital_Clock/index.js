const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock(){
    let hrs = new Date().getHours();
    let mins = new Date().getMinutes();
    let secs = new Date().getSeconds();
    
    let ampm = "AM"
    if(hrs > 12){
        hrs = hrs - 12;
        ampm = "PM"
    }

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    hoursElement.innerText = hrs;
    minutesElement.innerText = mins;
    secondsElement.innerText = secs;
    ampmElement.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();