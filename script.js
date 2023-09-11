let playerWins = 0;
let computerWins = 0;

const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    random = Math.floor(Math.random() * choices.length);
	return choices[random];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock" && computerSelection === "paper") {
  	computerWins++;
    return "You Lose! Paper beats Rock";
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
  	playerWins++;
    return "You Win! Rock beats Scissors";
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
  	playerWins++;
    return "You Win! Scissors beats Paper";
  }
  else if (playerSelection === "scissors" && computerSelection === "rock") {
  	computerWins++;
    return "You Lose! Rock beats Scissors";
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
  	playerWins++;
    return "You Win! Paper beats Rock";
  }
  else if (playerSelection === "paper" && computerSelection === "scissors") {
  	computerWins++;
    return "You Lose! Scissors beats Paper";
  }
  else if (playerSelection === computerSelection) {
  	return "It is tie";
  }
}

function game() {
    while (playerWins < 5 && computerWins < 5) {
        let playerSelection = prompt("Rock, paper or scissors?:  ");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player wins: ${playerWins},   Computer wins: ${computerWins}`) ;
    }
    if (playerWins = 5) {
        console.log("You won the game!");
    } else {console.log("Computer won the game!");}
}


game()