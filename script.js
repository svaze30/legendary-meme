console.log("ok");

// playRound(humanSelection, computerSelection);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    console.log(choice);

    if (choice === 0) {
      return "rock";
    } else if (choice === 1) {
      return "paper";
    } else {
      return "scissor";
    }
  }

  function getHumanChoice() {
    const choice = prompt("Pick rock, paper or scissor");
    if (choice === "rock" || choice === "paper" || choice === "scissor") {
      return choice;
    } else return getHumanChoice();
  }

  function playRound(humanChoice, computerChoice) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
      alert("Computer chose " + computerSelection + ", you drew.");
    } else {
      if (humanSelection === "rock") {
        if (computerSelection === "paper") {
          alert("Computer chose paper, you lost.");
          computerScore++;
        } else {
          alert("Computer chose scissor, you won.");
          humanScore++;
        }
      } else if (humanSelection === "paper") {
        if (computerSelection === "scissor") {
          alert("Computer chose scissor, you lost.");
          computerScore++;
        } else {
          alert("Computer chose rock, you won.");
          humanScore++;
        }
      } else {
        if (computerSelection === "rock") {
          alert("Computer chose rock, you lost.");
          computerScore++;
        } else {
          alert("Computer chose paper, you won.");
          humanScore++;
        }
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (humanScore > computerScore) {
    alert("You Win : " + humanScore + " - " + computerScore);
  } else if (humanScore < computerScore) {
    alert("You Lose : " + humanScore + " - " + computerScore);
  } else {
    alert("Draw : " + humanScore + " - " + computerScore);
  }
}

playGame();
