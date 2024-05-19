// Importing Required Elements and Values
const btnElement = document.getElementById("calculate");
const billElement = document.getElementById("bill");
const tipElement = document.getElementById("tip");
const resultElement = document.getElementById("result");

// function for Calculating Values
function calculateTip(){
    const billValue = billElement.value;
    // Condition for Non-Negative Billing Amoung
    if(billValue < 0){
        resultElement.innerText = `Billing Amount Cannot be Negative`;
        resultElement.style.color = "red";
    }else{
        const tipValue = tipElement.value;
        //Condition for Non-Negative Tip Percentage Amount
        if(tipValue < 0){
            resultElement.innerText = `Tip Percentage Cannot be Negative`;
            resultElement.style.color = "red";
        }else{
            // Calculating Tip Amount
            const tipAmount = (billValue / 100) * tipValue;
            // Calculating Billing Amount
            const resultValue = billValue * (1 + tipValue / 100);
            resultElement.innerText = `Tip Amount = ${tipAmount.toFixed(2)} and Billing Amount = ${resultValue.toFixed(2)}`;
            resultElement.style.color = "green";
        }
    }
}

btnElement.addEventListener("click",calculateTip);