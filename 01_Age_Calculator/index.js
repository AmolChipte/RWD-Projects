const btnElement = document.getElementById("btn");
// Creating and Getting Variable Object of ID where id=birthday
const birthdayElement = document.getElementById("birthday");
// Creating Variable Object of ID where id=result
const resultElement = document.getElementById("result");

// Creating Function
function calculateAge() {
  const birthdayValue = birthdayElement.value;
  if (birthdayValue === "") {
    resultElement.innerText = `Please enter your Birthdate`;
    resultElement.style.color = "red";
  } else {
    const age = getAge(birthdayValue);
    if(age < 0){
      resultElement.innerText = `You are from Future. Please Enter Correct Date`;
      resultElement.style.color = "blue";
    }else{
      resultElement.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old`;
      resultElement.style.color = "green";
    }
  }
}

// Creating Function for Calculating Age
function getAge(birthdayValue) {
  // Create Variable of Current Date
  const currentDate = new Date();
  // Create Variable of Birthdate from birthdayValue
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  // Check Conditions to Avoid Incorrect Age of same Year
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

btnElement.addEventListener("click", calculateAge);