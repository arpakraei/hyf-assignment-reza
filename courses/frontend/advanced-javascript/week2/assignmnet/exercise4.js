// Get DOM elements
const startButton = document.getElementById('start-button');
const timeInput = document.getElementById('game-time');
const playerLScore = document.getElementById('player-l-score');
const playerSScore = document.getElementById('player-s-score');
const resultMessage = document.getElementById('result-message');
const timerDisplay = document.getElementById('timer-display');

// Central game state (single source of truth)
const gameState = {
    lPressCount: 0,
    sPressCount: 0,
    isGameActive: false,
    durationSeconds: 0,
    intervalId: null,
};

// Listen for key presses
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

// Start game button click
startButton.addEventListener('click', () => {
    const seconds = Number(timeInput.value);

    // Validate input
    if (Number.isNaN(seconds) || seconds <= 0) return;

    // Initialize game state
    //gameState.isGameActive = true;
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

// Timer logic
function startCountdown(seconds) {
    // Clear any existing interval
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
            
            // Stop timer
            clearInterval(gameState.intervalId);
            gameState.intervalId = null;

            // End game
            timerDisplay.textContent = remainingTime;
            gameState.isGameActive = false;
            startButton.disabled = false;
            timeInput.value = '';

            displayWinner();
        } else { timerDisplay.textContent = remainingTime;}
        
    }, 1000);
}

// Determine winner
function displayWinner() {
    if (gameState.lPressCount > gameState.sPressCount) {
        resultMessage.textContent = `Player L wins with ${gameState.lPressCount} presses`;
    } else if (gameState.lPressCount < gameState.sPressCount) {
        resultMessage.textContent = `Player S wins with ${gameState.sPressCount} presses`;
    } else {
        resultMessage.textContent = `It's a draw!`;
    }
}