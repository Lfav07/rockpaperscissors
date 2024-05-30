let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    document.getElementById("humanChoice").innerText = "Human picked: " + humanChoice;
    document.getElementById("computerChoice").innerText = "Computer picked: " + computerChoice;

    let roundResult = "";

    if (humanChoice === computerChoice) {
        roundResult = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        roundResult = "You win!";
        humanScore++;
    } else {
        roundResult = "Computer wins!";
        computerScore++;
    }

    if (humanScore === 5) {
        roundResult = "You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        roundResult = "Computer won the game!";
        resetGame();
    }

    document.getElementById("roundResult").innerText = roundResult;
    document.getElementById("humanScore").innerText = "Human score: " + humanScore;
    document.getElementById("computerScore").innerText = "Computer score: " + computerScore;
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("humanChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("roundResult").innerText = "";
    document.getElementById("humanScore").innerText = "Human score: 0";
    document.getElementById("computerScore").innerText = "Computer score: 0";
}

document.getElementById("rock").addEventListener("click", function () {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    playRound("scissors");
    document.getElementById("resetGame").addEventListener("click", function () {
        resetGame();
    });
});
