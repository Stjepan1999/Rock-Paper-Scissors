
let playerWins = 0;
let computerWins = 0;
let currentPlayerChoice = null; // Variables used for button animation
let currentComputerChoice = null

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
  	let playerSelection = button.id
    let computerSelection = getComputerChoice()

    
    if (currentPlayerChoice) {
    	const previousPlayerChoice = document.getElementById(currentPlayerChoice);
      previousPlayerChoice.classList.remove("current-choice");
      }
    
    if (currentComputerChoice){
      const previousComputerChoice = document.getElementById(`computer-${currentComputerChoice}`);
      previousComputerChoice.classList.remove("current-computer-choice");
    }
    
  	
    currentComputerChoice = computerSelection
    const computerChoiceElement = document.getElementById(`computer-${computerSelection}`)
    computerChoiceElement.classList.add("current-computer-choice");
	
    button.classList.add("current-choice");
    currentPlayerChoice = playerSelection;
    playRound(playerSelection, computerSelection);
  	})
})


const playerScoreDiv = document.querySelector(".player-score")
const computerScoreDiv = document.querySelector(".computer-score")
const winnerDiv = document.querySelector("#winner")

function showResult() {
	if (playerWins < 5 && computerWins < 5) {
    playerScoreDiv.textContent = `SCORE: ${playerWins}`;
    computerScoreDiv.textContent = `SCORE: ${computerWins}`;
  
  } else if (playerWins === 5 || computerWins === 5){ 
  	playerScoreDiv.textContent = `SCORE: ${playerWins}`;
    computerScoreDiv.textContent = `SCORE: ${computerWins}`;
  {if (playerWins > computerWins) {
  	winnerDiv.textContent = `You won the game!`;
    winnerDiv.style.color =  "#FAC650";
    playerWins = 0;
  	computerWins = 0;
    } else {
      winnerDiv.textContent = `Game over, you lost!`;
      winnerDiv.style.color =  "red";
      playerWins = 0;
 		  computerWins = 0;
    }}}
  
	
}


function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock" && computerSelection === "paper") {
  	computerWins++;
    winnerDiv.textContent = "You lost";
    winnerDiv.style.color =  "red";
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
  	playerWins++;
    winnerDiv.textContent = "You won";
    winnerDiv.style.color =  "#FAC650";
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
  	playerWins++;
    winnerDiv.textContent = "You won";
    winnerDiv.style.color =  "#FAC650";
  }
  else if (playerSelection === "scissors" && computerSelection === "rock") {
  	computerWins++;
    winnerDiv.textContent = "You lost";
    winnerDiv.style.color =  "red";
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
  	playerWins++;
    winnerDiv.textContent = "You won";
    winnerDiv.style.color =  "#FAC650";
  }
  else if (playerSelection === "paper" && computerSelection === "scissors") {
  	computerWins++;
    winnerDiv.textContent = "You lost";
    winnerDiv.style.color =  "red";
  }
  else if (playerSelection === computerSelection) {
  	winnerDiv.textContent = "It's tie";
    winnerDiv.style.color =  "#222831";
  }
  showResult();
}

function getComputerChoice () {
	let choices = ["rock", "paper", "scissors"]
	randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

