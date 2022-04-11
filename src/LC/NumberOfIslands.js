/**
 * @param {character[][]} grid
 * @return {number}
 */
// 200
var numIslands = function (grid) {

    if (grid.length < 1) return 0;

    let islands = 0;
    // let visited = new Set();
    let toVisit = [];

    let rowLength = grid.length;
    let colLength = grid[0].length;

    for (let rows = 0; rows < rowLength; rows++) {
        for (let cols = 0; cols < colLength; cols++) {
            if (grid[rows][cols] === "1") {
                islands++;

                toVisit.push([rows, cols]);
                dfs();
            }
        }
    }

    function dfs() {
        while (toVisit.length > 0) {
            //use pop for dfs
            let cord = toVisit.pop();
            //use shift for bfs
            // let cord = toVisit.shift();

            let rows = cord[0];
            let cols = cord[1];

            grid[rows][cols] = "0";

            //left
            if ((cols - 1) >= 0 && grid[rows][cols - 1] === "1") {
                toVisit.push([rows, cols - 1]);
                grid[rows][cols - 1] = 0;
            }
            //right
            if ((cols + 1) < colLength && grid[rows][cols + 1] === "1") {
                toVisit.push([rows, cols + 1]);
                grid[rows][cols + 1] = 0;
            }
            //top
            if ((rows - 1) >= 0 && grid[rows - 1][cols] === "1") {
                toVisit.push([rows - 1, cols]);
                grid[rows - 1][cols] = 0;
            }
            //bottom
            if ((rows + 1) < rowLength && grid[rows + 1][cols] === "1") {
                toVisit.push([rows + 1, cols]);
                grid[rows + 1][cols] = 0;
            }
        }
    }

    return islands;
};