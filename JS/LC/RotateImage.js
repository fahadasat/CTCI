/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 48
var rotate = function(matrix) {
    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix.length - 1;

    while(top <= bottom && left <= right) {
        for(let i = left; i < right; i++) {

            let temp = matrix[top][i];

            //bottom left -> top left
            matrix[top][i] = matrix[matrix.length - 1-i][left];

            //bottom right -> bottom left
            matrix[matrix.length - 1-i][left] = matrix[bottom][matrix.length - 1-i];

            //top right -> bottom right
            matrix[bottom][matrix.length - 1-i] = matrix[i][right];

            //top left -> top right
            matrix[i][right] = temp;

        }
        top++;
        left++;
        bottom--;
        right--;
    }
};