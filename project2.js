// this is the number the user is trying to guess and how many tries they took
let secretNumber;
let attempts = 0;

// this makes a random number between 1 and 10
function generateNumber() {
  secretNumber = Math.floor(Math.random() * 10) + 1; // random number from 1 to 10
  console.log("Secret number:", secretNumber); // just showing the number in console for testing
}

// this checks what number the user guessed
function checkGuess() {
  const userGuess = Number(document.getElementById("userGuess").value); // gets the number they typed
  const resultText = document.getElementById("resultText"); // text area for results
  const attemptsText = document.getElementById("attemptsText"); // text area for how many tries

  // if the user types nothing or something not between 1 and 10
  if (!userGuess || userGuess < 1 || userGuess > 10) {
    resultText.textContent = "❌ Please enter a number between 1 and 10!"; // show warning
    return; // stop running the function
  }

  attempts++; // every time they guess, add one to the attempt count

  // if they get the number right
  if (userGuess === secretNumber) {
    resultText.textContent = `🎉 Correct! The number was ${secretNumber}!`;
  } 
  // if their guess is too low
  else if (userGuess < secretNumber) {
    resultText.textContent = "📉 Too low! Try again.";
  } 
  // if their guess is too high
  else {
    resultText.textContent = "📈 Too high! Try again.";
  }

  attemptsText.textContent = `Attempts: ${attempts}`; // show how many tries they’ve done
}

// this just updates the message on the screen (keeps things clean)
function displayMessage(message) {
  document.getElementById("resultText").textContent = message; // shows whatever message is passed in
}

// this resets everything to start over
function resetGame() {
  generateNumber(); // makes a new number
  attempts = 0; // resets tries back to zero
  document.getElementById("userGuess").value = ""; // clears the input box
  displayMessage("Game reset! Guess a new number!"); // shows message that game restarted
  document.getElementById("attemptsText").textContent = ""; // clears the attempt text
}

// this runs right away when the page first loads
generateNumber();
