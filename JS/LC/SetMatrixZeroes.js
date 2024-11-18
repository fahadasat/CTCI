/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 73
var setZeroes = function(matrix) {
    let rowFlag = false;
    let colFlag = false;

    // see if row 0 needs to be made zero
    for(let i = 0; i < matrix[0].length; i++) {
        if(matrix[0][i] === 0) {
            rowFlag = true;
        }
    }
    // see if col 0 needs to be made zero
    for(let j = 0; j < matrix.length; j++) {
        if(matrix[j][0] === 0) {
            colFlag = true;
        }
    }

    // if index is zero then set its row[0] and col[0] to zero
    for(let row = matrix.length - 1; row > 0; row--) {
        for(let col = matrix[0].length - 1; col > 0; col--) {
            if(matrix[row][col] === 0) {
                matrix[0][col] = 0;
                matrix[row][0] = 0;
            }
        }
    }

    // if the col or row is 0 then the index needs to be made zero
    for(let row = matrix.length - 1; row > 0; row--) {
        for(let col = matrix[0].length - 1; col > 0; col--) {
            if(matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    // check if the first row needs to be made zero
    for(let i = 0; i < matrix[0].length; i++) {
        if(rowFlag) {
            matrix[0][i] = 0;
        }
    }

    // check if the first col needs to be made zero
    for(let j = 0; j < matrix.length; j++) {
        if(colFlag) {
            matrix[j][0] = 0;
        }
    }

    return matrix;
};