// Rock paper scissors
// variables for scores

// create function to pay a round computer vs player
const playerOptions = document.querySelector("#options");
playerOptions.addEventListener('click', (e) => {
  let playerSelection = e.target.getAttribute("value");
  console.log(playRound(playerSelection, getComputerChoice()));
})

// create function to randomly select rock, paper, scissors
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// play round
function playRound(playerChoice, computerChoice) {
  let playerScore = 0;
  let computerScore = 0;
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (
    (playerChoice === "rock") && (computerChoice === "scissors") ||
    (playerChoice === "paper") && (computerChoice === "rock") ||
    (playerChoice === "scissors") && (computerChoice === "paper")
  ) {
    playerScore += playerScore + 1;
    if (playerScore == 5) { result("Player", "Computer") };
    result(playerChoice, computerChoice);
  } else if (playerChoice === computerChoice) {
    "its a draw try again"
  } else {
    computerScore += computerScore +1;
    if (computerScore == 5) { result("Computer", "Player") };
  }
}

function result(winner, loser) {
  // return `${winner} beats ${loser}!!`
  console.log(winner + " beats " + loser);
}


