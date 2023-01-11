const prompt = require("prompt-sync")({ sigint: true });

// Rock paper scissors
// create function to randomly select rock, paper, scissors

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// create function to pay a round computer vs player
let playerSelection = "Rock";

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (playerChoice === computerChoice){
    return "its a draw try again"
  } else if (
    (playerChoice === "rock") && (computerChoice === "scissors") ||
    (playerChoice === "paper") && (computerChoice === "rock") ||
    (playerChoice === "scissors") && (computerChoice === "paper")
  ) {
    return `player wins with ${playerChoice} over ${computerChoice}`
  } else if (
    (playerChoice === "scissors") && (computerChoice === "rock") ||
    (playerChoice === "rock") && (computerChoice === "paper") ||
    (playerChoice === "paper") && (computerChoice === "scissors")
  ) {
    return `computer wins with ${computerChoice} over ${playerChoice}`
  }
}

