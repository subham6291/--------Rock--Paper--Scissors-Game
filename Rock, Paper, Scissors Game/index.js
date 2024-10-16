let userScore = 0;
let aiScore = 0;

const buttons = document.querySelectorAll(".button");
const userScoreDisplay = document.querySelectorAll(".command")[0];
const aiScoreDisplay = document.querySelectorAll(".command")[1];
const resultDisplay = document.createElement("div");
resultDisplay.classList.add("result-display");

const computerSection = document.querySelector(".computer");
computerSection.appendChild(resultDisplay);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (userScore >= 10 || aiScore >= 10) {
      return;
    }

    const userChoice = button.textContent;
    const aiChoice = getAIChoice();

    const winner = determineWinner(userChoice, aiChoice);

    if (winner === "User") {
      userScore++;
      resultDisplay.textContent = `You chose ${userChoice}. AI chose ${aiChoice}. You win! 🎉`;
    } else if (winner === "AI") {
      aiScore++;
      resultDisplay.textContent = `You chose ${userChoice}. AI chose ${aiChoice}. AI wins! 😞`;
    } else {
      resultDisplay.textContent = `You chose ${userChoice}. AI chose ${aiChoice}. It's a tie! 🤝`;
    }

    updateScores();
    checkWinner();
  });
});

function getAIChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, aiChoice) {
  if (userChoice === aiChoice) {
    return "Tie";
  } else if (
    (userChoice === "Rock" && aiChoice === "Scissors") ||
    (userChoice === "Paper" && aiChoice === "Rock") ||
    (userChoice === "Scissors" && aiChoice === "Paper")
  ) {
    return "User";
  } else {
    return "AI";
  }
}

function updateScores() {
  userScoreDisplay.textContent = `Your score: ${userScore}`;
  aiScoreDisplay.textContent = `AI score: ${aiScore}`;
}

function checkWinner() {
  if (userScore >= 10) {
    resultDisplay.textContent = `Congratulations! You reached 10 points first and won the game! 🎉`;
    disableButtons();
    setTimeout(resetGamePrompt, 2000);
  } else if (aiScore >= 10) {
    resultDisplay.textContent = `AI reached 10 points first and won the game! 😞`;
    disableButtons();
    setTimeout(resetGamePrompt, 2000);
  }
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function resetGamePrompt() {
  const playAgain = confirm("Game over! Do you want to play again?");
  if (playAgain) {
    resetGame();
  }
}

function resetGame() {
  userScore = 0;
  aiScore = 0;
  updateScores();
  resultDisplay.textContent = "Game reset! Make your move.";
  enableButtons();
}

function enableButtons() {
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

// Select the button
const button = document.querySelector(".magic");

// Variable to track clicks
let clickCount = 0; // Start counting clicks

// Add event listener to the button
button.addEventListener("click", () => {
  clickCount++; // Increment the click count on each button press

  if (clickCount === 1) {
    // First click: change to Lavender
    document.body.style.backgroundColor = "#e6e6fa"; // Lavender color
  } else if (clickCount === 2) {
    // Second click: change to Blue
    document.body.style.backgroundColor = "blue";
  } else {
    // Third click: reset to original color (light gray)
    document.body.style.backgroundColor = "black"; // Original color
    clickCount = 0; // Reset the counter after the third click
  }
});
