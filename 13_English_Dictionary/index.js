const inputElement = document.getElementById("input");
const infoTextElement = document.getElementById("info-text");
const meaningContainerElement = document.getElementById("meaning-container");
const titleElement = document.getElementById("title");
const meaningElement = document.getElementById("meaning");
const audioElement = document.getElementById("audio");

async function fetchAPI(word) {
  try {
    infoTextElement.style.display = "block";
    meaningContainerElement.style.display = "none";
    infoTextElement.innerText = `Searching the meaning of "${word}"`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
      meaningContainerElement.style.display = "block";
      infoTextElement.style.display = "none";
      titleElement.innerText = word;
      meaningElement.innerText = "N/A";
      audioElement.style.display = "none";
    } else {
      infoTextElement.style.display = "none";
      meaningContainerElement.style.display = "block";
      audioElement.style.display = "inline-flex";
      titleElement.innerText = result[0].word;
      meaningElement.innerText = result[0].meanings[0].definitions[0].definition;
      audioElement.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    console.log(error);
    infoTextElement.innerText = `an error happened, try again later`;
  }
}

inputElement.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});