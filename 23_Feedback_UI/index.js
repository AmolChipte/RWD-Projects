const ratingElements = document.querySelectorAll(".rating");
const btnElement = document.getElementById("btn");

const containerElement = document.getElementById("container");

let selectedRating = "";

ratingElements.forEach((ratingElement) => {
  ratingElement.addEventListener("click", (event) => {
    removeActive();
    selectedRating = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnElement.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerElement.innerHTML = `
        <h1 class="heading">Thank you!</h1>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
  }
});

function removeActive() {
  ratingElements.forEach((ratingElement) => {
    ratingElement.classList.remove("active");
  });
}