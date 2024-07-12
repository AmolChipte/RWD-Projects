const countersElement = document.querySelectorAll(".counter");

countersElement.forEach((counterElement) => {
    counterElement.innerText = "0";
    incrementCounter();
    function incrementCounter(){
        let currentNumber = +counterElement.innerText;
        const dataCeilElement = counterElement.getAttribute("data-ceil");
        const increment = dataCeilElement / 6;
        currentNumber = Math.ceil(currentNumber + increment);
        
        if(currentNumber < dataCeilElement){
            setTimeout(incrementCounter, 50);
            counterElement.innerText = currentNumber;
        }else{
            counterElement.innerText = dataCeilElement
        }
    }
});