/**
 * @param {number[][]} grid
 * @return {boolean}
 * 2128
 */
var removeOnes = function (grid) {
    for (let i = 0; i < grid[0].length; i++) {
        if (grid[0][i] === 1) flipCol(i);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            if (grid[i][j] !== grid[i][j - 1]) return false;
        }
    }

    function flipCol(column) {
        for (let i = 0; i < grid.length; i++) {
            grid[i][column] = 1 - grid[i][column];
        }
    }

    // console.log(grid)
    return true;
};