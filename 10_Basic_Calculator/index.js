const btnsElement = document.querySelectorAll("button");
const inputFieldElement = document.getElementById("result");

for(let i = 0; i < btnsElement.length; i++){
    btnsElement[i].addEventListener("click",() => {
        const btnValue = btnsElement[i].textContent;
        
        if(btnValue === "C"){
            clearResult();
        }else if(btnValue === "="){
            calculateResult();
        }else {
            appendValue(btnValue);
        }
    })
}

// D2H Channel Remove : 9902899028;

function clearResult(){
    inputFieldElement.value = "";
}

function calculateResult(){
    inputFieldElement.value = eval(inputFieldElement.value);
}

function appendValue(btnValue){
    inputFieldElement.value += btnValue; 
}