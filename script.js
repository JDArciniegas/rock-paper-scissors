// Rock paper scissors
// create function to randomly select rock, paper, scissors
// create function to pay a round computer vs player

function getComputerChoice(){
  const choices = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

console.log(getComputerChoice());
