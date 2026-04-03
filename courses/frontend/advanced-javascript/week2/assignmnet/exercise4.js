// Elements 
const startButton = document.getElementById('start-button');
const timeInput = document.getElementById('game-time');
const playerLScore = document.getElementById('player-l-score');
const playerSScore = document.getElementById('player-s-score');
const resultMessage = document.getElementById('result-message');
const timerDisplay = document.getElementById('timer-display');
const resultOverlay = document.getElementById('result-overlay');
const playAgainButton = document.getElementById('play-again-button');

//  Game State 
const gameState = {
    lPressCount: 0,
    sPressCount: 0,
    isGameActive: false,
    durationSeconds: 0,
    intervalId: null,
};

//Key Press Listener
document.addEventListener('keydown', (event) => {
    if (!gameState.isGameActive) return;

    const key = event.key.toLowerCase();

    if (key === 'l') {
        gameState.lPressCount++;
        playerLScore.textContent = gameState.lPressCount;
    } else if (key === 's') {
        gameState.sPressCount++;
        playerSScore.textContent = gameState.sPressCount;
    }
});

// Start Game 
startButton.addEventListener('click', () => {
    const seconds = Number(timeInput.value);

    // Validate input
    if (Number.isNaN(seconds) || seconds <= 0) return;

    // Reset state
    gameState.lPressCount = 0;
    gameState.sPressCount = 0;
    gameState.durationSeconds = seconds;

    // Update UI
    startButton.disabled = true;
    resultMessage.textContent = '';
    playerLScore.textContent = 0;
    playerSScore.textContent = 0;

    startCountdown(seconds);
});

// Timer Logic 
function startCountdown(seconds) {
    // Clear existing interval if any
    if (gameState.intervalId) {
        clearInterval(gameState.intervalId);
        gameState.intervalId = null;
    }

    let remainingTime = seconds;
    timerDisplay.textContent = remainingTime;
    gameState.isGameActive = true;

    gameState.intervalId = setInterval(() => {
        remainingTime--;

        if (remainingTime === 0) {
            clearInterval(gameState.intervalId);
            gameState.intervalId = null;

            // End game immediately
            timerDisplay.textContent = remainingTime;
            gameState.isGameActive = false;

            startButton.disabled = false;
            timeInput.value = '';

            displayWinner();
        } else {
            timerDisplay.textContent = remainingTime;
        }
    }, 1000);
}

//  Display Winner 
function displayWinner() {
    resultOverlay.classList.add('show');

    if (gameState.lPressCount > gameState.sPressCount) {
        document.querySelector('.player-l').classList.add('winner');
        resultMessage.textContent = `Player L wins with ${gameState.lPressCount} presses`;
    } else if (gameState.lPressCount < gameState.sPressCount) {
        document.querySelector('.player-s').classList.add('winner');
        resultMessage.textContent = `Player S wins with ${gameState.sPressCount} presses`;
    } else {
        resultMessage.textContent = `It's a draw!`;
    }
}

// Play Again 
playAgainButton.addEventListener('click', () => {

    // Hide overlay
    resultOverlay.classList.remove('show');

    // Remove winner highlight
    document.querySelectorAll('.player-card').forEach(card => {
        card.classList.remove('winner');
    });

    // Reset game state
    gameState.lPressCount = 0;
    gameState.sPressCount = 0;
    gameState.isGameActive = false;

    // Reset UI
    playerLScore.textContent = 0;
    playerSScore.textContent = 0;
    timerDisplay.textContent = 0;
    resultMessage.textContent = '';
    timeInput.value = '';

    // Enable start button
    startButton.disabled = false;
});