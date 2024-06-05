const animeContainerElement = document.querySelector(".anime-container");
const animeImgElement = document.querySelector(".anime-img");
const animeNameElement = document.querySelector(".anime-name");
const btnElement = document.getElementById("btn");
let id = null;

function getId(){
  min = Math.ceil(1);
  max = Math.floor(10000);
  return Math.floor(Math.random() * (max - min) + min);
}

btnElement.addEventListener("click",async function (){
  try {
    btnElement.disabled = true;
    btnElement.innerText = "Loading...";
    animeNameElement.innerText = "Updating...";
    animeImgElement.src = "spinner.svg";
    id = getId();
    const response = await fetch(`https://api.jikan.moe/v4/characters/${id}`);
    const result = await response.json();
    btnElement.disabled = false;
    btnElement.innerText = "Get Anime";
    animeContainerElement.style.display = "block";
    animeImgElement.src = result.data.images.jpg.image_url;
    animeNameElement.innerText = result.data.name;
    console.log(id);
  } catch (error) {
    console.log(error);
    btnElement.disabled = false;
    btnElement.innerText = "Get Anime";
    animeNameElement.innerText = "An error happened, please try again";
  }
});