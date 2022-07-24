/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 1143
 */
var longestCommonSubsequence = function (text1, text2) {
    let grid = new Array(text1.length + 1).fill(0).map(() => {
        return new Array(text2.length + 1).fill(0)
    });

    for (let row = text1.length - 1; row >= 0; row--) {
        for (let col = text2.length - 1; col >= 0; col--) {

            if (text1.charAt(row) === text2.charAt(col)) {
                //get diag value + 1
                grid[row][col] = grid[row + 1][col + 1] + 1;
            } else {
                //get max of right value and bottom value
                grid[row][col] = Math.max(grid[row + 1][col], grid[row][col + 1]);
            }
        }
    }

    return grid[0][0]
};