/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 289
var gameOfLife = function(board) {
    let liveMap = {};

    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++) {
            let liveCount = 0;

            (board[row - 1] != null && board[row - 1][col - 1] === 1) ? liveCount++ : liveCount;
            (board[row - 1] != null && board[row - 1][col] === 1) ? liveCount++ : liveCount;
            (board[row - 1] != null && board[row - 1][col + 1] === 1) ? liveCount++ : liveCount;

            (board[row] != null && board[row][col - 1] === 1) ? liveCount++ : liveCount;
            (board[row] != null && board[row][col + 1] === 1) ? liveCount++ : liveCount;

            (board[row + 1] != null && board[row + 1][col - 1] === 1) ? liveCount++ : liveCount;
            (board[row + 1] != null && board[row + 1][col] === 1) ? liveCount++ : liveCount;
            (board[row + 1] != null && board[row + 1][col + 1] === 1) ? liveCount++ : liveCount;

            liveMap[[row, col]] = liveCount;
        }
    }

    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++) {
            let currentVal = board[row][col];
            let liveCount = liveMap[[row, col]];

            if(currentVal === 0 ) {
                if(liveCount === 3) {
                    board[row][col] = 1;
                }
            } else {
                if(liveCount !== 2 && liveCount !== 3) {
                    board[row][col] = 0;
                }
            }
        }
    }

};