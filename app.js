function getComputerChoice() {
    let ramdomNumber = Math.random();
    if (ramdomNumber < 0.34) {
        return "rock";
    } else if (ramdomNumber <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Do you choose rock, paper or scissors?");
    if (userChoice) {
        userChoice = userChoice.toLowerCase();
    }
    const choices = ["rock", "paper", "scissors"];
    if (choices.includes(userChoice)) {
        return userChoice;
    } else {
        alert("Invalid choice! Please choose rock, paper or scissors.");
        return getHumanChoice();
    }
}

function playGame () {
    let humanScore = 0
    let computerScore = 0

    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            alert("You win! " + humanChoice + " beats " + computerChoice);
        } else {
            computerScore++;
            alert("You lose! " + computerChoice + " beats " + humanChoice);
        }
    }

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log(playRound(humanChoice, computerChoice));
        }
    if (humanScore > computerScore) {
        alert("You win the game!");
    } else if (humanScore < computerScore) {
        alert("You lose the game!");
    } else {
        alert("The game is a tie!");
    }
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", playGame);
