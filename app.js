let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function makeGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptCount = document.getElementById("attemptCount");
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;
    attemptCount.textContent = attempts;

    if (userGuess < numberToGuess) {
        message.textContent = "Too low! Try again.";
    } else if (userGuess > numberToGuess) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = `Congratulations! You guessed the number ${numberToGuess} in ${attempts} attempts.`;
        guessInput.disabled = true;
    }

    guessInput.value = "";
}

function resetGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("attemptCount").textContent = attempts;
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
}
