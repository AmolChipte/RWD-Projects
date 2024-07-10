const containerElement = document.querySelector(".container");

for (let index = 0; index < 25; index++) {
  const colorContainerElement = document.createElement("div");
  colorContainerElement.classList.add("color-container");
  containerElement.appendChild(colorContainerElement);
}

const colorContainerElements = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
  colorContainerElements.forEach((colorContainerElement) => {
    const newColorCode = randomColor();
    colorContainerElement.style.backgroundColor = "#" + newColorCode;
    colorContainerElement.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}