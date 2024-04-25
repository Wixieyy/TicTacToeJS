let playerCount = 1;
var playAllowed = true;

const winner = document.getElementById('winner')
const board = document.getElementById('board')
const turnText = document.getElementById('turn-text')
const body = document.querySelector('body')
const toggleModeButton = document.getElementById('toggle-mode-button')
const restartButton = document.getElementById('restart-button')
const square = document.getElementById('square')

function clearBoard() {
    for (let i = 0; i < board.children.length; i++) {
        board.children[i].textContent = ''
        playerCount = 1
    }
    turnText.style.transform = 'scale(1)'
    turnText.textContent = "Player 1's turn (X)"
    winner.children[0].style.transform = 'scale(0)'
    playAllowed = true
}

function onClick() {
    const square = event.target
    if (square.textContent === '' && playAllowed === true) {
        if (playerCount % 2 !== 0) {
            square.textContent = 'X'
            turnText.textContent = "Player 2's turn (O)";
        } else {
            square.textContent = 'O'
            turnText.textContent = "Player 1's turn (X)";
        }
        checkWinV()
        checkWinH()
        checkWinD()
        playerCount++
    }
}

function checkWinV() {
    for (let x= 0; x < board.children.length; x++) {
        if (board.children[x].textContent !== "" && board.children[x + 3] && board.children[x + 6]) {
            if (board.children[x].textContent === board.children[x + 3].textContent) {
                if (board.children[x + 3].textContent == board.children[x + 6].textContent) {
                    turnText.style.transform = 'scale(0)'
                    if (board.children[x + 6].textContent === 'X') {
                        winner.children[0].textContent = 'Player 1 wins'
                        playAllowed = false
                    } else {
                        winner.children[0].textContent = 'Player 2 wins'
                        playAllowed = false
                    }
                    winner.children[0].style.transform = 'scale(1)'
                }
            }
        }
    }
}

function checkWinH() {
    for (let x= 0; x < board.children.length; x += 3) {
        if (board.children[x].textContent !== "" && board.children[x + 1] && board.children[x + 2]) {
            if (board.children[x].textContent === board.children[x + 1].textContent) {
                if (board.children[x + 1].textContent == board.children[x + 2].textContent) {
                    turnText.style.transform = 'scale(0)'
                    if (board.children[x + 2].textContent === 'X') {
                        winner.children[0].textContent = 'Player 1 wins'
                        playAllowed = false
                    } else {
                        winner.children[0].textContent = 'Player 2 wins'
                        playAllowed = false
                    }
                    winner.children[0].style.transform = 'scale(1)'
                }
            }
        }
    }
}

function checkWinD() {
    for (let x= 0; x < board.children.length; x += 4) {
        if (board.children[x].textContent !== "" && board.children[x + 4] && board.children[x + 8]) {
            if (board.children[x].textContent === board.children[x + 4].textContent) {
                if (board.children[x + 4].textContent == board.children[x + 8].textContent) {
                    turnText.style.transform = 'scale(0)'
                    if (board.children[x + 8].textContent === 'X') {
                        winner.children[0].textContent = 'Player 1 wins'
                        playAllowed = false
                    } else {
                        winner.children[0].textContent = 'Player 2 wins'
                        playAllowed = false
                    }
                    winner.children[0].style.transform = 'scale(1)'
                }
            }
        }
    }

    let x= 2
        if (board.children[x].textContent !== "" && board.children[x + 2] && board.children[x + 4]) {
            if (board.children[x].textContent === board.children[x + 2].textContent) {
                if (board.children[x + 2].textContent == board.children[x + 4].textContent) {
                    turnText.style.transform = 'scale(0)'
                    if (board.children[x + 4].textContent === 'X') {
                        winner.children[0].textContent = 'Player 1 wins'
                        playAllowed = false
                    } else {
                        winner.children[0].textContent = 'Player 2 wins'
                        playAllowed = false
                    }
                    winner.children[0].style.transform = 'scale(1)'
                }
            }
        }
}

function toggleMode() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        board.classList.remove('dark-mode');
        restartButton.style.backgroundColor = '';
        restartButton.style.color = '';
        toggleModeButton.style.backgroundColor = '';
        toggleModeButton.style.color = '';

        for (let i = 0; i < board.children.length; i++) {
            board.children[i].classList.remove('dark-mode');
        }
    } else {
        body.classList.add('dark-mode');
        board.classList.add('dark-mode');
        restartButton.style.backgroundColor = '#282828';
        restartButton.style.color = '#f8f8ff';
        toggleModeButton.style.backgroundColor = '#282828';
        toggleModeButton.style.color = '#f8f8ff';

        for (let i = 0; i < board.children.length; i++) {
            board.children[i].classList.add('dark-mode');
        }
    }
}