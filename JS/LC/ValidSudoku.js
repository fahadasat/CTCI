/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 36
var isValidSudoku = function(board) {
    let rowSets = [];
    let colSets = [];
    let gridSets = [];

    let findGrid = (row, col) => {
        let subGridRow = Math.floor(row / 3);
        let subGridCol = Math.floor(col / 3);
        let subGridIndex = subGridRow * 3 + subGridCol;

        return subGridIndex;
    }

    for(let row = 0; row < board.length; row++) {
        let rowSet = rowSets[row] || new Set();
        for(let col = 0; col < board[0].length; col++) {
            if(board[row][col] === ".") {
                continue;
            }
            let colSet = colSets[col] || new Set();
            let grid = findGrid(row, col);
            let gridSet = gridSets[grid] || new Set();

            if(rowSet.has(board[row][col]) || colSet.has(board[row][col]) || gridSet.has(board[row][col])) {
                // console.log(board[row][col])
                return false;
            } else {
                rowSet.add(board[row][col]);
                colSet.add(board[row][col])
                gridSet.add(board[row][col]);

                if(!rowSets[row])
                    rowSets[row] = rowSet;
                if(!colSets[col])
                    colSets[col] = colSet;
                if(!gridSets[grid])
                    gridSets[grid] = gridSet;
            }
        }
    }
    return true;
};