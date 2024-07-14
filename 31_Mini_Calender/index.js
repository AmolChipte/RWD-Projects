const monthNameElement = document.getElementById("month-name");
const dayNameElement = document.getElementById("day-name");
const dayNumberElement = document.getElementById("day-number");
const yearNumberElement = document.getElementById("year-number");

const date = new Date();

monthNameElement.innerText = date.toLocaleDateString("en",{month:"long"});
dayNameElement.innerText = date.toLocaleDateString("en",{weekday:"long"});
dayNumberElement.innerText = date.getDate();
yearNumberElement.innerText = date.getFullYear();