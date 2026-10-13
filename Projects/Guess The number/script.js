



// Generate random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);


// Select HTML elements
const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const loworHi = document.querySelector('.loworHi');

const startover = document.querySelector('.resultParas');


// Create paragraph for new game button
const p = document.createElement('p');


// Game variables
let prevGuess = [];

let numGuess = 1;

let playGame = true;


// ========================================
// START GAME
// ========================================

if (playGame) {

    submit.addEventListener('click', function (e) {

        e.preventDefault();

        const guess = parseInt(userInput.value);

        validateGuess(guess);

    });

}


// ========================================
// VALIDATE GUESS
// ========================================

function validateGuess(guess) {

    // Check if input is not a number
    if (isNaN(guess)) {

        displayMessage("⚠️ Please enter a number.");

        return;

    }


    // Check if number is below 1
    if (guess < 1) {

        displayMessage("⚠️ Please enter a number between 1 and 100.");

        return;

    }


    // Check if number is above 100
    if (guess > 100) {

        displayMessage("⚠️ Please enter a number between 1 and 100.");

        return;

    }


    // Valid guess
    prevGuess.push(guess);


    // If this is the 10th guess
    if (numGuess === 10) {

        displayGuess(guess);

        checkGuess(guess);

        if (guess !== randomNumber) {

            displayMessage(
                `😢 Game Over! The number was ${randomNumber}.`
            );

            endGame();
        }

    }

    else {

        displayGuess(guess);

        checkGuess(guess);

    }

}


// ========================================
// CHECK GUESS
// ========================================

function checkGuess(guess) {

    if (guess === randomNumber) {

        displayMessage("🎉 Congratulations! You guessed it!");

        endGame();

    }

    else if (guess < randomNumber) {

        displayMessage("📉 Too Low! Try a higher number.");

    }

    else if (guess > randomNumber) {

        displayMessage("📈 Too High! Try a lower number.");

    }

}


// ========================================
// DISPLAY GUESS
// ========================================

function displayGuess(guess) {

    // Clear input
    userInput.value = '';


    // Display previous guesses
    guessSlot.innerHTML += `${guess} `;


    // Increase guess count
    numGuess++;


    // Update remaining guesses
    remaining.innerHTML = `${11 - numGuess}`;

}


// ========================================
// DISPLAY MESSAGE
// ========================================

function displayMessage(message) {

    loworHi.innerHTML = message;

}


// ========================================
// END GAME
// ========================================

function endGame() {

    // Disable input
    userInput.value = '';

    userInput.setAttribute('disabled', '');

    // Disable submit button
    submit.setAttribute('disabled', '');


    // Create new game button
    p.innerHTML = `
        <button id="newGame" class="newGame">
            🔄 Start New Game
        </button>
    `;


    // Add button to page
    startover.appendChild(p);


    // Get new game button
    const newGameButton = document.querySelector('#newGame');


    // Add click event
    newGameButton.addEventListener('click', newGame);


    // Stop game
    playGame = false;

}


// ========================================
// NEW GAME
// ========================================

function newGame() {

    // Generate a NEW random number
    randomNumber = parseInt(Math.random() * 100 + 1);


    // Reset guesses
    prevGuess = [];


    // Reset guess counter
    numGuess = 1;


    // Reset UI
    guessSlot.innerHTML = '';

    remaining.innerHTML = '10';

    loworHi.innerHTML = '';


    // Enable input
    userInput.removeAttribute('disabled');


    // Enable submit button
    submit.removeAttribute('disabled');


    // Remove old new-game button
    p.remove();


    // Start game again
    playGame = true;


    // Focus on input
    userInput.focus();

}

