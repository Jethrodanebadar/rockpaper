let choice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(4);
  computerChoice = Math.floor(
    Math.random() * (maxFloored - minCeiled) + minCeiled
  );
  return computerChoice;
}

function playRound() {
    let resultDisplay = document.getElementById("result");
    let scoreDisplay = document.getElementById("score");
    let roundDisplay = document.getElementById("round");
  let humanchoice = parseInt(document.getElementById("choiceInput").value);
  if (isNaN(humanchoice) || humanchoice < 1 || humanchoice > 3) {
    alert("Please enter a valid choice (1, 2, or 3)");
    return; 
  }
  let computerChoice = getComputerChoice();
  if (computerChoice == humanchoice) {
    resultDisplay.textContent = "It's a draw!";
  } else if (
    (computerChoice === 1 && humanchoice === 2) ||
    (computerChoice === 2 && humanchoice === 3) ||
    (computerChoice === 3 && humanchoice === 1)
  ) {
    resultDisplay.textContent ="Player Wins!";
    humanScore++;
  } else if (
    (computerChoice === 2 && humanchoice === 1) ||
    (computerChoice === 3 && humanchoice === 2) ||
    (computerChoice === 1 && humanchoice === 3)
  ) {
    resultDisplay.textContent = "Computer Wins!";
    computerScore++;
  } else {
    resultDisplay.textContent = "Wrong Input";
  }

  roundsPlayed++;
  roundDisplay.textContent = "Round " + roundsPlayed + " completed.";
  scoreDisplay.textContent = "Player's score: " + humanScore + " - Computer's score: " + computerScore;

  if(roundsPlayed===5){
    determineWinner();
  }
}

function determineWinner(){
    let resultDisplay = document.getElementById("result");
    if (humanScore > computerScore) {
        resultDisplay.textContent ="Player wins with " + humanScore + " points!";
      } else if (humanScore < computerScore) {
        resultDisplay.textContent ="Computer wins with " + computerScore + " points!";
      } else {
        resultDisplay.textContent =("It's a tie!");
      }
      roundsPlayed = 0;
      humanScore = 0;
      computerScore = 0;
}
  


