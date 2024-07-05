const inputElement = document.getElementById("input");
const resultElement = document.getElementById("result");
const errorElement = document.getElementById("error");
const resultpElement = document.querySelector(".result-p");
let errorTime;

function updateResult(){
    if(inputElement.value <= 0 || isNaN(inputElement.value)){
        errorElement.innerText = "Please Enter Valid Weight";
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            errorElement.innerText = "";
            inputElement.value = "";
        },1500)
    }else{
        resultpElement.style.display = "block";
        resultElement.innerText = (+inputElement.value * 2.2).toFixed(2);
    }
}

inputElement.addEventListener("input", updateResult);