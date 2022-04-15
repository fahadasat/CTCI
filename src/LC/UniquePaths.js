/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 62
var uniquePaths = function (m, n) {
    const matrix = new Array(m).fill(0).map(() => new Array(n).fill(-1));
    matrix[m - 1][n - 1] = 1;

    for (let row = m - 1; row >= 0; row--) {
        for (let col = n - 1; col >= 0; col--) {
            if (matrix[row][col] === -1) {
                let right = 0;
                let bottom = 0;

                try {
                    right = matrix[row][col + 1] || 0;
                } catch (e) {
                }
                try {
                    bottom = matrix[row + 1][col];
                } catch (e) {
                }
                matrix[row][col] = right + bottom;
            }

        }
    }
    return matrix[0][0]
};