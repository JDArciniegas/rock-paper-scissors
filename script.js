// Rock paper scissors
// variables for scores
const pScore = document.querySelector('#player-score');
const cScore = document.querySelector('#computer-score');
const battleResult = document.querySelector('#result');
const gameWinner = document.querySelector('#winner');
const options = document.querySelectorAll('.icons');

// button for reset
const restart = document.querySelector('#restart');

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

let playerScore = 0;
let computerScore = 0;
// play round
function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (
    (playerChoice === "rock") && (computerChoice === "scissors") ||
    (playerChoice === "paper") && (computerChoice === "rock") ||
    (playerChoice === "scissors") && (computerChoice === "paper")
  ) {
    playerScore++;
    pScore.textContent = playerScore;
    result.textContent = `${playerChoice} beats ${computerChoice}`
   } else if (playerChoice === computerChoice) {
    result.textContent = "It's a draw play again"
  } else {
    computerScore++;
    cScore.textContent = computerScore;
    result.textContent = `${computerChoice} beats ${playerChoice}`
  }
  if ((playerScore === 5)){
    winWar("human")
  } else if (computerScore === 5) {
    winWar("computer")
    }
}

// when score increases output single game message for the winner
function winBattle(winner, winChoice, loseChoice){
  let message = `${winner} wins battle with ${winChoice} with ${loseChoice}`;
  winner.textContent = message;
}

// output message for full game winner
function winWar(winner){
  result.textContent = ''
  gameWinner.textContent = `${winner.toUpperCase()} wins the game!!!!!`;
}


// reset variables
function reset(){
  playerScore = 0;
  computerScore = 0;
  pScore.textContent = '0'
  cScore.textContent = '0'
  gameWinner.textContent = ''
  options.disable = false;
}


