/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/

let currentPlayer = 'X'
let gameOver = false
let moveCount = 0

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset')

// select each square 
const square0El = document.getElementById('0');
const square1El = document.getElementById('1');
const square2El = document.getElementById('2');
const square3El = document.getElementById('3');
const square4El = document.getElementById('4');
const square5El = document.getElementById('5');
const square6El = document.getElementById('6');
const square7El = document.getElementById('7');
const square8El = document.getElementById('8');

// const squareEl = document.querySelectorAll('.sqr')


/*-------------------------------- Functions --------------------------------*/
messageEl.textContent = `It's ${currentPlayer} turn`

function switchPlayer() {

    if (gameOver === false) {
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer} turn`
    }
}

function moves() {
    if (moveCount === 9 && gameOver === false) {
        gameOver = true
        messageEl.textContent = 'Game Over!!'
    }
}

function winner() {
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
        gameOver = true 
        messageEl.textContent = `Player ${currentPlayer} wins!`;
    }
} 

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

square0El.addEventListener('click', () => {
    if (square0El.textContent === '' && gameOver === false) {
        square0El.textContent = currentPlayer;
        moveCount++
        winner()
        switchPlayer()
        moves()
    }
})

square1El.addEventListener('click', () => {
    if (square1El.textContent === '' && gameOver === false) {
        square1El.textContent = currentPlayer;
        winner()
        moveCount++
        switchPlayer()
        moves()
    }
})
square2El.addEventListener('click', () => {
    if (square2El.textContent === '' && gameOver === false) {
        square2El.textContent = currentPlayer;
        winner()
        moveCount++
        switchPlayer()
        moves()
    }
})
square3El.addEventListener('click', () => {
    if (square3El.textContent === '' && gameOver === false) {
        square3El.textContent = currentPlayer;
        winner()
        moveCount++
        switchPlayer()
        moves()
    }
})
square4El.addEventListener('click', () => {
    if (square4El.textContent === '' && gameOver === false) {
        square4El.textContent = currentPlayer;
        winner()
        moveCount++
        switchPlayer()
        moves()
    }
})
square5El.addEventListener('click', () => {
    if (square5El.textContent === '' && gameOver === false) {
        square5El.textContent = currentPlayer;
        winner()
        moveCount++
        switchPlayer()
        moves()
    }
})
square6El.addEventListener('click', () => {
    if (square6El.textContent === '' && gameOver === false) {
        square6El.textContent = currentPlayer;
        winner()
        moveCount++
        switchPlayer()
        moves()
    }
})
square7El.addEventListener('click', () => {
    if (square7El.textContent === '' && gameOver === false) {
        square7El.textContent = currentPlayer;
        winner()
        moveCount++
        switchPlayer()
        moves()
    }
})
square8El.addEventListener('click', () => {
    if (square8El.textContent === '' && gameOver === false) {
        square8El.textContent = currentPlayer;
        winner()
        moveCount++
        switchPlayer()
        moves()
    }
})

resetBtnEl.addEventListener('click', resetGame);
resetGame()