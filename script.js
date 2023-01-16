// Rock paper scissors
// variables for scores
const pScore = document.querySelector('#player-score');
const cScore = document.querySelector('#computer-score');
const winner = document.querySelector('#winner');

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
    pScore.textContent = playerScore;
    if (playerScore == 5) { result("Player") };
    result(playerChoice, computerChoice);
  } else if (playerChoice === computerChoice) {
    "its a draw try again"
  } else {
    computerScore += computerScore + 1;
    cScore.textContent = computerScore;
    if (computerScore == 5) { result("Computer") };
  }
}

function result(winner) {
  return `${winner}`
}


