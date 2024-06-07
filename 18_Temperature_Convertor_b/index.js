const celsiusElement = document.getElementById("celsius");
const fahrenheitElement = document.getElementById("fahrenheit");
const kelvinElement = document.getElementById("kelvin");

function computeTemp(event){
    const currentValue = +event.target.value;
    switch(event.target.name){
        case "celsius":
            kelvinElement.value = (currentValue + 273.15).toFixed(2);
            fahrenheitElement.value = (currentValue * 1.8 + 32).toFixed(2);
            break;

        case "fahrenheit":
            celsiusElement.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinElement.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);
            break;

        case "kelvin":
            celsiusElement.value = (currentValue - 273.15).toFixed(2);
            fahrenheitElement.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
            break;

        default:
            break;
    }
}