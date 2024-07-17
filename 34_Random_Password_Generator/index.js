const btnElement =  document.querySelector(".btn");
const inputElement = document.getElementById("input");
const copyIconElement = document.querySelector(".fa-copy");
const alertContainerElement = document.querySelector(".alert-container");

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 15;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password = password + chars.substring(randomNum, randomNum+1);
    }
    inputElement.value = password;
    alertContainerElement.innerText = password + " Copied!";
}

function copyPassword(){
    //for Desktop
    inputElement.select();
    //for Mobile
    inputElement.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputElement.value);

}

btnElement.addEventListener("click", () => {
    createPassword();
});

copyIconElement.addEventListener("click", () => {
    copyPassword();
    if(inputElement.value){
        alertContainerElement.style.backgroundColor = "green";
        alertContainerElement.classList.remove("active");
        setTimeout(() => {
            alertContainerElement.classList.add("active");
        }, 2000)
    }else if(!inputElement.value){
        alertContainerElement.style.backgroundColor = "red";
        alertContainerElement.innerText = " Generate Password First!!";
        alertContainerElement.classList.remove("active");
        setTimeout(() => {
            alertContainerElement.classList.add("active");
        }, 2000)
    }
})