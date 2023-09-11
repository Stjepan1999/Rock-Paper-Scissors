let choices = ["rock", "paper", "scissors"]
let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => playRound(button.id, getComputerChoice()))
})

const resultDiv = document.querySelector(".result");
const result = document.createElement("div");
resultDiv.appendChild(result);
const scoreDiv = document.querySelector(".score");
const playerScore = document.createElement("div")
playerScore.textContent = "testing"
scoreDiv.appendChild(playerScore)
  
function showResult(computerSelection, message) {
	if (playerWins < 5 && computerWins < 5) {
  result.textContent = `Computer choice is ${computerSelection}. ${message}. Result is: Player : ${playerWins} Computer: ${computerWins}`;
  playerScore.textContent = playerWins;
  scoreDiv.appendChild(playerScore);
  } else {if (playerWins > computerWins) {
  	result.textContent = `You won!`;
    playerWins = 0;
    computerWins = 0;
  } else {
  	result.textContent = `Game over, you lost!`;
    playerWins = 0;
    computerWins = 0;
  }}
 
  resultDiv.appendChild(result);
}


function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock" && computerSelection === "paper") {
  	computerWins++;
    let message = "You Lose! Paper beats Rock"
    showResult(computerSelection, message);
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
  	playerWins++;
    let message = "You Win! Rock beats Scissors"
    showResult(computerSelection, message);
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
  	playerWins++;
    let message = "You Win! Scissors beats Paper"
    showResult(computerSelection, message);
  }
  else if (playerSelection === "scissors" && computerSelection === "rock") {
  	computerWins++;
    let message = "You Lose! Rock beats Scissors"
  	showResult(computerSelection, message);
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
  	playerWins++;
    let message = "You Win! Paper beats Rock"
  	showResult(computerSelection, message);
  }
  else if (playerSelection === "paper" && computerSelection === "scissors") {
  	computerWins++;
    let message = "You Lose! Scissors beats Paper"
  	showResult(computerSelection, message);
  }
  else if (playerSelection === computerSelection) {
  	let message = "It is tie";
    showResult(computerSelection, message);
  }
}

function getComputerChoice () {
	random = Math.floor(Math.random() * choices.length);
	return choices[random];
}

