const btnElement = document.getElementById("btn");
const bmiResultElement = document.getElementById("bmi-result");
const weightConditionElement = document.getElementById("weight-condition");

function calculateBMI(){
    const heightElement = document.getElementById("height").value;
    const weightElement = document.getElementById("weight").value;
    
    const bmiValue = weightElement * 10000 / (heightElement * heightElement)
    bmiResultElement.value = bmiValue;

    if(bmiValue < 18.5){
        weightConditionElement.innerText = "Under Weight";
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        weightConditionElement.innerText = "Normal Weight";
    }else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionElement.innerText = "Over Weight";
    }else if(bmiValue >= 30){
        weightConditionElement.innerText = "Obesity";
    }
}

btnElement.addEventListener("click", calculateBMI);
