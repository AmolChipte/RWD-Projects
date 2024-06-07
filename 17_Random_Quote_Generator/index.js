const btnElement = document.getElementById("btn");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const quoteBoxElement = document.querySelector(".quote");
const apiURL = "https://api.quotable.io/random";

async function getQuote(){
    try {
        quoteBoxElement.style.display = "none";
        btnElement.innerText = "Loading ... ";
        btnElement.disabled = true;
        quoteElement.innerText = "";
        authorElement.innerText = "";

        const response = await fetch(apiURL);
        const data = await response.json();
    
        quoteBoxElement.style.display = "block";
        quoteElement.innerText = data.content;
        authorElement.innerText = "~ " + data.author;

        btnElement.disabled = false;
        btnElement.innerText = "Get Another Quote";
    } catch (error) {
        quoteElement.innerText = "Something went Wrong, Try again later";
    }
}

btnElement.addEventListener("click", getQuote)