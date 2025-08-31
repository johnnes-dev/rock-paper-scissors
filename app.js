let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#result");

const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");

const rock = document.querySelector("#btnRock");
const paper = document.querySelector("#btnPaper");
const scissors = document.querySelector("#btnScissors");
rock.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});

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

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDiv.textContent = `You win the round! ${humanChoice} beats ${computerChoice}!`;
        humanScore += 1;

    } else {
        resultDiv.textContent = `You lose the round! ${computerChoice} beats ${humanChoice}!`;
        computerScore += 1;
    }
    updateScoreDisplay();
    gameScore();
}

function updateScoreDisplay() {
    humanScoreDisplay.textContent = `Human: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function gameScore () {
    if (humanScore === 5) {
        alert("You win the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("You lose the game!");
        resetGame();
    }
}

function resetGame() {
    // Reseta a mensagem de resultado
    resultDiv.textContent = "Let's play!";

    // Reseta os displays de placar
    humanScoreDisplay.textContent = "Human: 0";
    computerScoreDisplay.textContent = "Computer: 0";

    // Zera os placares
    humanScore = 0;
    computerScore = 0;
}

const btn = document.querySelector("#btnStart");
btn.addEventListener("click", resetGame);
