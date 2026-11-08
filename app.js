/*---------------------------- Variables (state) ----------------------------*/

// Hint 4: Game variables
let currentPlayer = 'X';
let moveCount = 0;
let gameOver = false;


/*------------------------ Cached Element References ------------------------*/

// Hint 1: Select each square
const square0El = document.getElementById('0');
const square1El = document.getElementById('1');
const square2El = document.getElementById('2');
const square3El = document.getElementById('3');
const square4El = document.getElementById('4');
const square5El = document.getElementById('5');
const square6El = document.getElementById('6');
const square7El = document.getElementById('7');
const square8El = document.getElementById('8');

const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');


/*-------------------------------- Functions --------------------------------*/

// Hint 6: Switch players
function switchPlayer() {
    if (gameOver === false) {
        if (currentPlayer === 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }

        messageEl.textContent = `Player ${currentPlayer}'s turn`;
    }
}

// Hints 7 & 8: Check winning lines
function checkWinner() {
    if (
        (square0El.textContent === currentPlayer &&
         square1El.textContent === currentPlayer &&
         square2El.textContent === currentPlayer) ||

        (square3El.textContent === currentPlayer &&
         square4El.textContent === currentPlayer &&
         square5El.textContent === currentPlayer) ||

        (square6El.textContent === currentPlayer &&
         square7El.textContent === currentPlayer &&
         square8El.textContent === currentPlayer) ||

        (square0El.textContent === currentPlayer &&
         square3El.textContent === currentPlayer &&
         square6El.textContent === currentPlayer) ||

        (square1El.textContent === currentPlayer &&
         square4El.textContent === currentPlayer &&
         square7El.textContent === currentPlayer) ||

        (square2El.textContent === currentPlayer &&
         square5El.textContent === currentPlayer &&
         square8El.textContent === currentPlayer) ||

        (square0El.textContent === currentPlayer &&
         square4El.textContent === currentPlayer &&
         square8El.textContent === currentPlayer) ||

        (square2El.textContent === currentPlayer &&
         square4El.textContent === currentPlayer &&
         square6El.textContent === currentPlayer)
    ) {
        gameOver = true;
        messageEl.textContent = `Player ${currentPlayer} wins!`;
    }
}

// Hint 9: Check for a tie
function checkTie() {
    if (moveCount === 9 && gameOver === false) {
        gameOver = true;
        messageEl.textContent = 'It is a tie!';
    }
}

// Hint 11: Reset the game
function resetGame() {
    square0El.textContent = '';
    square1El.textContent = '';
    square2El.textContent = '';
    square3El.textContent = '';
    square4El.textContent = '';
    square5El.textContent = '';
    square6El.textContent = '';
    square7El.textContent = '';
    square8El.textContent = '';

    currentPlayer = 'X';
    moveCount = 0;
    gameOver = false;

    messageEl.textContent = "Player X's turn";
}


/*----------------------------- Event Listeners -----------------------------*/

// Hints 2, 5 & 10: First square
square0El.addEventListener('click', function() {
    if (square0El.textContent === '' && gameOver === false) {
        square0El.textContent = currentPlayer;
        moveCount++;
        checkWinner();
        checkTie();
        switchPlayer();
    }
});

// Hint 3: Second square
square1El.addEventListener('click', function() {
    if (square1El.textContent === '' && gameOver === false) {
        square1El.textContent = currentPlayer;
        moveCount++;
        checkWinner();
        checkTie();
        switchPlayer();
    }
});

// Hint 3: Third square
square2El.addEventListener('click', function() {
    if (square2El.textContent === '' && gameOver === false) {
        square2El.textContent = currentPlayer;
        moveCount++;
        checkWinner();
        checkTie();
        switchPlayer();
    }
});

// Hint 3: Fourth square
square3El.addEventListener('click', function() {
    if (square3El.textContent === '' && gameOver === false) {
        square3El.textContent = currentPlayer;
        moveCount++;
        checkWinner();
        checkTie();
        switchPlayer();
    }
});

// Hint 3: Fifth square
square4El.addEventListener('click', function() {
    if (square4El.textContent === '' && gameOver === false) {
        square4El.textContent = currentPlayer;
        moveCount++;
        checkWinner();
        checkTie();
        switchPlayer();
    }
});

// Hint 3: Sixth square
square5El.addEventListener('click', function() {
    if (square5El.textContent === '' && gameOver === false) {
        square5El.textContent = currentPlayer;
        moveCount++;
        checkWinner();
        checkTie();
        switchPlayer();
    }
});

// Hint 3: Seventh square
square6El.addEventListener('click', function() {
    if (square6El.textContent === '' && gameOver === false) {
        square6El.textContent = currentPlayer;
        moveCount++;
        checkWinner();
        checkTie();
        switchPlayer();
    }
});

// Hint 3: Eighth square
square7El.addEventListener('click', function() {
    if (square7El.textContent === '' && gameOver === false) {
        square7El.textContent = currentPlayer;
        moveCount++;
        checkWinner();
        checkTie();
        switchPlayer();
    }
});

// Hint 3: Ninth square
square8El.addEventListener('click', function() {
    if (square8El.textContent === '' && gameOver === false) {
        square8El.textContent = currentPlayer;
        moveCount++;
        checkWinner();
        checkTie();
        switchPlayer();
    }
});

// Hint 11: Reset button
resetBtnEl.addEventListener('click', resetGame);

// Start the game
resetGame();