class TicTacToe {
    constructor() {
        this.player = 'X'
        this.computer = 'O'
        this.currentPlayer = this.player
        this.board = ['', '', '', '', '', '', '', '', '']
        this.makeMove = this.makeMove.bind(this)
        this.end =false
    }

    makeMove(index) {
        if (this.board[index] === '') {
            this.board[index] = this.currentPlayer
            this.displayBoard()
            if (this.checkWin(this.currentPlayer)) {
                document.getElementById("ketqua").innerHTML = `${this.currentPlayer} Thắng!`
                this.end = true
                return
            }
            if (this.checkDraw()) {
                document.getElementById("ketqua").innerHTML = `Có mà Win được`
                return
            }
            this.currentPlayer = (this.currentPlayer === this.player) ? this.computer : this.player
            if (this.currentPlayer === this.computer) {
                this.makeComputerMove()
            }
        }
    }

    makeComputerMove() {
        const bestMove = this.getBestMove()
        this.makeMove(bestMove)
    }

    getBestMove() {
        let bestScore = -Infinity
        let bestMove

        for (let i = 0; i < 9; i++) {
            if (this.board[i] === '') {
                this.board[i] = this.computer
                let score = this.minimax(this.board, 0, false)
                this.board[i] = ''
                if (score > bestScore) {
                    bestScore = score
                    bestMove = i
                }
            }
        }

        return bestMove
    }

    minimax(board, depth, isMaximizing) {
        if (this.checkWin(this.player)) {
            return -10 + depth
        }
        if (this.checkWin(this.computer)) {
            return 10 - depth
        }
        if (this.checkDraw()) {
            return 0;
        }

        if (isMaximizing) {
            let maxScore = -Infinity
            for (let i = 0; i < 9; i++) {
                if (board[i] === '') {
                    board[i] = this.computer;
                    let score = this.minimax(board, depth + 1, false)
                    board[i] = ''
                    maxScore = Math.max(score, maxScore)
                }
            }
            return maxScore
        } else {
            let minScore = Infinity
            for (let i = 0; i < 9; i++) {
                if (board[i] === '') {
                    board[i] = this.player
                    let score = this.minimax(board, depth + 1, true)
                    board[i] = ''
                    minScore = Math.min(score, minScore)
                }
            }
            return minScore
        }
    }

    checkWin(player) {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]
        ]
        return winningCombos.some(function (combo) {
            return combo.every(function (index) {
                return this.board[index] === player
            }.bind(this))
        }.bind(this))
    }

    checkDraw() {
        return this.board.every(function (cell) {
            return cell !== ''
        })
    }

    resetBoard() {
        document.getElementById("ketqua").innerHTML = ``
        this.currentPlayer = this.player
        this.board = ['', '', '', '', '', '', '', '', '']
        this.displayBoard()
    }

    displayBoard() {
        const squares = document.getElementsByClassName('cell')
        for (let i = 0; i < 9; i++) {
            squares[i].textContent = this.board[i]
        }
    }
}

const game = new TicTacToe()
game.displayBoard()





// const squares = document.querySelectorAll('.square');
// let currentPlayer = 'X';


// squares.forEach(square => {
//     square.addEventListener('click', () => {
//         if (square.textContent === '') {
//             square.textContent = currentPlayer;
//             if (checkWin()) {
//                 document.getElementById("error_message1").innerHTML = `${currentPlayer} Thắng!`;
//             } else if (checkDraw()) {
//                 document.getElementById("error_message1").innerHTML = `Hòa!`;
//             } else {
//                 switchPlayer();
//             }
//         }
//     });
// });


// document.querySelector('.reset-btn').addEventListener('click', resetGame);

// function switchPlayer() {
//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
// }

// function checkWin() {
//     return checkRows() || checkColumns() || checkDiagonals();
// }
// function checkRows() {
//     for (let i = 0; i < 9; i += 3) {
//         if (squares[i].textContent !== '' &&
//             squares[i].textContent === squares[i + 1].textContent &&
//             squares[i + 1].textContent === squares[i + 2].textContent) {
//             return true;
//         }
//     }
//     return false;
// }

// function checkColumns() {
//     for (let i = 0; i < 3; i++) {
//         if (squares[i].textContent !== '' &&
//             squares[i].textContent === squares[i + 3].textContent &&
//             squares[i + 3].textContent === squares[i + 6].textContent) {
//             return true;
//         }
//     }
//     return false;
// }

// function checkDiagonals() {
//     if (squares[0].textContent !== '' &&
//         squares[0].textContent === squares[4].textContent &&
//         squares[4].textContent === squares[8].textContent) {
//         return true;
//     }
//     if (squares[2].textContent !== '' &&
//         squares[2].textContent === squares[4].textContent &&
//         squares[4].textContent === squares[6].textContent) {
//         return true;
//     }
//     return false;
// }

// function checkDraw() {
//     return Array.from(squares).every(square => square.textContent !== '');
// }


// function resetGame() {
//     squares.forEach(square => {
//         square.textContent = '';
//     });
//     document.getElementById("error_message1").innerHTML = '';
//     currentPlayer = 'X';
// }









