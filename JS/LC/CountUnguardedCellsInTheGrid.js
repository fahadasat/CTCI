/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
// 2257
var countUnguarded = function(m, n, guards, walls) {
    let grid = Array.from({length: m }, () => Array(n).fill(true));
    let count = m*n;

    let setRow = (row, col) => {
        for(let i = col + 1; i < grid[0].length; i++) {
            if(grid[row][i] === "W" || grid[row][i] === "G") {
                break;
            }
            grid[row][i] = false;
        }
        for(let i = col - 1; i >= 0; i--) {
            if(grid[row][i] === "W" || grid[row][i] === "G") {
                break;
            }
            grid[row][i] = false;
        }
    }

    let setCol = (row, col) => {
        for(let i = row + 1; i < grid.length; i++) {
            if(grid[i][col] === "W" || grid[i][col] === "G") {
                break;
            }
            grid[i][col] = false;
        }
        for(let i = row - 1; i >= 0; i--) {
            if(grid[i][col] === "W" || grid[i][col] === "G") {
                break;
            }
            grid[i][col] = false;
        }
    }

    for(let i = 0; i < guards.length; i++) {
        let row = guards[i][0];
        let col = guards[i][1];

        grid[row][col] = "G";
    }
    for(let i = 0; i < walls.length; i++) {
        let row = walls[i][0];
        let col = walls[i][1];

        grid[row][col] = "W";
    }

    for(let j = 0; j < m; j++) {
        for(let k = 0; k < n; k++) {
            if(grid[j][k] === "G") {
                setRow(j,k);
                setCol(j,k);
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] !== true) {
                count--;
            }
        }
    }

    // console.log(grid)
    return count;
};