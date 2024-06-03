const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");
const apiKey = "Mvcg1wnzN4z73m5FEhgdsQ==5p72ZaZ5Gah3nXqs";
const limit = 1;
const options = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey}
}
const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke(){
    try {
        jokeElement.innerText = "Updating ...";
        btnElement.disabled = true;
        btnElement.innerText = "Telling ...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
        jokeElement.innerText = data[0].joke;
        btnElement.disabled = false;
        btnElement.innerText = "Tell me Another Joke";
    } catch (error) {
        alert(error);
    }
    
}

btnElement.addEventListener("click", getJoke);