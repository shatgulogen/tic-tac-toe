let clickTurn = new Audio('click.mp3');
let gameOver = new Audio('gameover.mp3');
let applause = new Audio('applause.mp3');
let turn = 'X';

//Create function to change the turn
//turn will return who gets to play next
function turnChange() {
    return turn === 'X' ? 'O' : 'X';
}

//Create function to check for a win
function checkForWin() {
    let cellText = document.getElementsByClassName('cellText');
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
    //There are no a === b === c function in javascript
    // a===b && c===b && a !== ''
    winConditions.forEach((element) => {
        if (
            cellText[element[0]].innerText === cellText[element[1]].innerText &&
            cellText[element[0]].innerText !== ''
        ) {
            document.querySelector('.turnInfo').innerText =
                cellText[element[0]].innerText + 'Won the Game!';
        }
    });
}

//Create logic for turns
let allCells = document.getElementsByClassName('cell');

Array.from(allCells).forEach((cell) => {
    let cellText = cell.querySelector('.cellText');
    cell.addEventListener('click', function () {
        if (cellText.innerText === '') {
            cellText.innerText = turn;
            turn = turnChange();
            clickTurn.play();
            checkForWin();
            document.getElementsByClassName('turnInfo')[0].innerText =
                'It is turn for ' + turn;
        }
    });
});

//Next, take into account the case when no body wins the game
//add sound effect for case gameover and case winning
//Write function for winning message page and make restart button responsive
