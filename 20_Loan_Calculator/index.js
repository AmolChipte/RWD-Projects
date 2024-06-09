calculateLoan()

function calculateLoan(){
    loanAmountElement = document.getElementById("loan-amount").value;
    interestRateElement = document.getElementById("interest-rate").value;
    timePeriodElement = document.getElementById("time-period").value;
    
    interest = (loanAmountElement * (interestRateElement * 0.01)) / timePeriodElement;

    monthlyPaymentValue = (loanAmountElement / timePeriodElement + interest)
    
    resultElement = document.getElementById("result")
    resultElement.value = monthlyPaymentValue.toFixed(2);

}