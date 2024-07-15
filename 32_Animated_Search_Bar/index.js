const searchBarContainerElement = document.querySelector(".search-bar-container");
const magnifierElement = document.querySelector(".magnifier");

magnifierElement.addEventListener("click", () => {
    searchBarContainerElement.classList.toggle("active");
})
