const currencyInputElement = document.getElementById("currency-input");
const worthInputElement = document.getElementById("worth-input");
const currencyOutputElement = document.getElementById("currency-output");
const worthOutputElement = document.getElementById("worth-output");
const exchangeRateElement = document.getElementById("exchange-rate");
const apiKey = "4601cbe6e02134e8c21f27d1";

onChange()

function onChange(){
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyInputElement.value}`)
        .then((response) => response.json())
        .then((data) => {
            const rate = data.conversion_rates[currencyOutputElement.value];
            
            exchangeRateElement.innerText = `1 ${currencyInputElement.value} = ${rate + " " + currencyOutputElement.value}`;
            worthOutputElement.value = (worthInputElement.value * rate);
    });
}

currencyInputElement.addEventListener("change", onChange);
currencyOutputElement.addEventListener("change", onChange);
worthInputElement.addEventListener("change", onChange);