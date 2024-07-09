const btnNextElement = document.getElementById("btn-next");
const btnPrevElement = document.getElementById("btn-prev");
const imageContainerElement = document.querySelector(".image-container");
let x = 0;
let timer;

updateGallery();

function updateGallery(){
    imageContainerElement.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45;
        updateGallery();
    },3000)
}

btnPrevElement.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
});

btnNextElement.addEventListener("click", () => {
    x = x - 45;
    updateGallery();
});