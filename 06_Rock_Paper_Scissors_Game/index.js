const btnsElement = document.querySelectorAll('button');
const resultElement = document.getElementById('result');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const choices = ["rock","paper","scissor"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playround(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a TIE!";
    }else if((playerSelection === "rock" && computerSelection ==="scissor") ||
        (playerSelection === "paper" && computerSelection ==="rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")){
        playerScore++;
        playerScoreElement.textContent = `${playerScore}`;
        return "You Win ! "+playerSelection+" beats "+computerSelection;
    }else{
        computerScore++;
        computerScoreElement.textContent = `${computerScore}`;
        return "You Lose ! "+computerSelection+" beats "+playerSelection;
    }
}

btnsElement.forEach(button => {
    button.addEventListener('click',() =>{
        const result = playround(button.id, computerPlay());
        resultElement.textContent = `${result}`;
        console.log(result);
    });
});