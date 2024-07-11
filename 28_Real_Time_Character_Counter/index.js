const textareaElement = document.getElementById("textarea");
const totalCounterElement = document.getElementById("total-counter");
const remainingCounterElement = document.getElementById("remaining-counter");

function updateCounter(){
    totalCounterElement.innerText = textareaElement.value.length;
    remainingCounterElement.innerText = textareaElement.getAttribute("maxLength")-textareaElement.value.length;
}

updateCounter();

textareaElement.addEventListener("keyup", () => {
    updateCounter();
});