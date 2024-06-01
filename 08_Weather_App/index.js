const apiKey = "dafb6322ffcc0cd76c3c50f052b58b7f";
const weatherDataElement = document.getElementById("weatherData");
const cityInputElement = document.getElementById("city-input");
const formElement = document.querySelector("form");

async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        
        if(!response.ok){
            throw new Error("Network Response was NOT OK");
        }

        const data = await response.json();
        const temperature = Math.floor(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `<b>Feels like:</b> ${Math.floor(data.main.feels_like)}`,
            `<b>Humidity: </b>${Math.floor(data.main.humidity)}%`,
            `<b>Wind:</b> ${Math.floor(data.main.speed)} m/s`,
        ]

        weatherDataElement.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
        weatherDataElement.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherDataElement.querySelector(".description").textContent = `${description}°C`;
        weatherDataElement.querySelector(".details").innerHTML = details.map((detail)=>`<div>${detail}</div>`).join("");
    } catch (error) {
        
        weatherDataElement.querySelector(".icon").innerHTML = "";
        weatherDataElement.querySelector(".temperature").textContent = "";
        weatherDataElement.querySelector(".description").textContent = `Something went Wrong`;
        weatherDataElement.querySelector(".details").innerHTML = "";
    }
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputElement.value;
    getWeatherData(cityValue);
});