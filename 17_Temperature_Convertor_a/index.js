const btnElement = document.getElementById("btn");
const outputDataElement = document.getElementById("output-data");

function fahrToCel(f){
    return ((f - 32) / (9 / 5));
}

function fahrToKel(f){
    return (((f - 32) * (5 / 9)) + 273.15);
}

function celToKel(c){
    return c + 273.15;
}

function celToFahr(c){
    return (c * (9 / 5) + 32);
}

function kelToFahr(k){
    return (((k - 273.15) * (9 / 5)) + 32);
}

function kelToCel(k){
    return (k - 273.15);
}

function getConvert(){
    let result = 0;
    const rawInputElement = document.getElementById("input-data").value;
    const tempInputElement = document.getElementById("input-type").value;
    const tempOutputElement = document.getElementById("output-type").value;
    
    if(tempInputElement === tempOutputElement){
        result = rawInputElement;
    }else{
        if(tempOutputElement === "c"){
            if(tempInputElement === "f"){
                result = fahrToCel(rawInputElement);
            }else if(tempInputElement === "k"){
                result = kelToCel(rawInputElement);
            }
        }else if(tempOutputElement === "f"){
            if(tempInputElement === "c"){
                result = celToFahr(rawInputElement);
            }else if(tempInputElement === "k"){
                result = kelToFahr(rawInputElement);
            }
        }else if(tempOutputElement === "k"){
            if(tempInputElement === "f"){
                result = fahrToKel(rawInputElement);
            }else if(tempInputElement === "c"){
                result = celToKel(rawInputElement);
            }
        }
    }
    outputDataElement.value = result;
}

btnElement.addEventListener("click",getConvert);