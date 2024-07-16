const menuElement = document.querySelector(".menu");
const menuTextElement = document.querySelector(".menu p");
const socialListsElement = document.querySelector(".social-lists");
const liElements = document.querySelectorAll(".social-lists li");

liElements.forEach(liElement => {
    liElement.addEventListener("click", () => {
        menuTextElement.innerHTML = liElement.innerHTML;
        socialListsElement.classList.add("hide");
        menuElement.classList.toggle("rotate");
    })
})

menuElement.addEventListener("click", () => {
    socialListsElement.classList.toggle("hide");
    menuElement.classList.toggle("rotate");    
});