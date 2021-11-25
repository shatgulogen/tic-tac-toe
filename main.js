let clickTurn = new Audio('click.mp3');
let gameOver = new Audio('gameover.mp3');
let applause = new Audio('applause.mp3');
let turn = 'X';
let isGameOver = false;
let numWins = [];
let cellText = document.getElementsByClassName('cellText');
let allCells = document.getElementsByClassName('cell');

//Create function to change the turn
//turn will return who gets to play next
function switchPlayer() {
    return turn === 'X' ? 'O' : 'X';
}

//Create function to check for a win
let scoreforX = 0;
let scoreforO = 0;

let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

//There are 8 different conditions for a win to occur
//innerTexts of all elements in each rows need to be the same
//innerTexts of all elements in each columns need to be the same
//innerTexts of all elements in upper-right to lower-left diagonal need to be the same
//innerTexts of all elements in upper-left to lower-right diagonal need to be the same

//If we use digit numbers to represent each element position in each cell in the game board, starting from 0
//Below is how the game board elements should look like
/* 
    __0__|__1__|__2__
    __3__|__4__|__5__
      6  |  7  |  8
    */
//There are no a === b === c function in javascript
// a===b && c===b && a !== ''
function checkForWin() {
    let scoreX = document.getElementById('scoreX');
    let scoreO = document.getElementById('scoreO');
    winConditions.forEach((element) => {
        if (
            cellText[element[0]].innerText === cellText[element[1]].innerText &&
            cellText[element[2]].innerText === cellText[element[1]].innerText &&
            cellText[element[0]].innerText !== ''
        ) {
            document.querySelector('.turnInfo').innerText =
                cellText[element[0]].innerText + ' Wins the Game!';
            if (cellText[element[0]].innerText === 'X') {
                scoreX.textContent = ++scoreforX;
            } else if (cellText[element[0]].innerText === 'O') {
                scoreO.textContent = ++scoreforO;
            }
            isGameOver = true;
            document.querySelector('.image img').classList.add('winner');
        }
    });
}

//Create logic for turns
Array.from(allCells).forEach((cell) => {
    let cellText = cell.querySelector('.cellText');
    cell.addEventListener('click', function (event) {
        if (cellText.innerText === '') {
            cellText.innerText = turn;
            turn = switchPlayer();
            console.log(turn);
            colorChange(event.target, turn);
            clickTurn.play();
            if (winConditions.length <= 9 && !isGameOver) {
                console.log('Helloooooooo');
                document.getElementsByClassName('turnInfo')[0].innerText =
                    'It is turn for ' + turn;
            }
            checkForWin();
            isDraw();
            determineWinner();
        }
    });
});

function colorChange(element, symbol) {
    if (symbol === 'X') {
        element.setAttribute('style', 'color: rgb(210, 97, 127)');
    } else if (symbol === 'O') {
        element.setAttribute('style', 'color: rgb(173, 133, 203)');
    }
}

const cells = document.querySelectorAll('.cellText');
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function () {
        if (cells[i].innerText === 'X') {
            cells[i].innerText.setAttribute(
                'style',
                'color: rgb(210, 97, 127)'
            );
        } else if (cells[i].innerText === 'O') {
            cells[i].innerText.setAttribute(
                'style',
                'color: rgb(173, 133, 203)'
            );
        }
    });
}

//Check for draw
function isDraw() {
    if (winConditions.length > 9 && isGameOver) {
        document.getElementsByClassName('turnInfo')[0].innerText ===
            "It's a draw! Play Again!";
    }
}

//score board
function determineWinner() {
    if (scoreforO > scoreforX && scoreforX + scoreforO >= 10) {
        applause.play();
        document.querySelector('.turnInfo').innerText =
            'Final round is over! O wins the game!';
    } else if (scoreforX > scoreforO && scoreforX + scoreforO >= 10) {
        applause.play();
        document.querySelector('.turnInfo').innerText =
            'Final round is over! X wins the game!';
    } else if (scoreforX == scoreforO && scoreforO + scoreforX >= 10) {
        document.querySelector('.turnInfo').innerText =
            "Final round is over! It's a tie!";
        isGameOver = true;
        gameOver.play();
    }
}

//make restart function responsive
function restart() {
    let cellTexts = document.querySelectorAll('.cellText');
    Array.from(cellTexts).forEach((element) => {
        element.innerText = '';
        turn = 'X';
        isGameOver = false;
        document.getElementsByClassName('turnInfo')[0].innerText =
            'It is turn for ' + turn;
        document.querySelector('.image img').classList.remove('winner');
    });
    if (scoreforX == 10 || scoreforX == 10 || scoreforX == scoreforO) {
        let scoreforX = 0;
        let scoreforO = 0;
    }
}
document.getElementById('restartBtn').addEventListener('click', function () {
    restart();
});

function playagain() {
    window.location.reload();
}
document.getElementById('playAgain').addEventListener('click', function () {
    playagain();
});

counterStarted = false;

const countdownEl = document.getElementById('countdown');
counterStarted = false;
document.getElementById('go').addEventListener('click', go);
let seconds = 0,
    stop = 60,
    counterStarted = false,
    counter;

function go() {
    if (counterStarted === false) {
        counterStarted = true;
        if (counterStarted === false) {
            counterStarted = true;
            counter = setInterval(function () {
                if (seconds <= stop) {
                    countdownEl.innerHTML = seconds;
                    seconds++;
                } else {
                    clearInterval(counter);
                    counterStarted = false;
                    seconds = 0;
                }
            }, 1000);
        }
    }
}
