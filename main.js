let level = 1;
let secretNumber;
let attempts;
let maxAttempts;
let resultLabel, guessInput, attemptsLabel, checkButton, playAgainButton;

function generateRandomNumber() {
  return Math.floor(Math.random() * (10 * level)) + 1;
}

function setAttempts() {
  maxAttempts = Math.ceil(6 - level * 0.5); // Increase attempts per level
  attempts = maxAttempts;
}

function playGame() {
  setAttempts();
  secretNumber = generateRandomNumber();
  resultLabel.textContent = `Welcome to Level ${level}! Guess the secret number between 1 and ${
    10 * level
  }.`;
  attemptsLabel.textContent = `Attempts remaining: ${attempts} out of ${maxAttempts}`;
  playAgainButton.disabled = true;
  checkButton.disabled = false;
}

function checkGuess() {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    alert("Please enter a valid number.");
    return;
  }

  attempts--;

  if (guess === secretNumber) {
    resultLabel.textContent =
      "Congratulations! You guessed the correct number!";
    resultLabel.style.color = "green";
    level++;
    playGame();
  } else if (guess < secretNumber) {
    resultLabel.textContent = "Too low! Try again.";
    resultLabel.style.color = "red";
  } else {
    resultLabel.textContent = "Too high! Try again.";
    resultLabel.style.color = "red";
  }

  if (attempts === 0) {
    resultLabel.textContent = `Out of attempts! The secret number was ${secretNumber}. Game Over.`;
    resultLabel.style.color = "black";
    playAgainButton.disabled = false;
    checkButton.disabled = true;
  }

  attemptsLabel.textContent = `Attempts remaining: ${attempts} out of ${maxAttempts}`;
}

window.onload = function () {
  resultLabel = document.getElementById("result");
  guessInput = document.getElementById("guess");
  attemptsLabel = document.getElementById("attempts");
  checkButton = document.getElementById("checkButton");
  playAgainButton = document.getElementById("playAgainButton");

  playGame();
};
