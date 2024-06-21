//Get references to the DOM elements
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const buttons = document.querySelectorAll(".btn");

// Step 1: Write the logic to get the computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Step 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    // Update the score
    scoreDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

    // Check if someone has reached 5 points
    if (humanScore === 5) {
        resultDiv.textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        resultDiv.textContent = "Game over! The computer won the game.";
        disableButtons();
    }
}

// Disable buttons once the game is over
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Add event listeners to the buttons
buttons.forEach(button => {
    // console.log(button.);
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});