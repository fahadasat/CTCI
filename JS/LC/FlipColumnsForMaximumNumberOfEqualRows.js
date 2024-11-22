/**
 * @param {number[][]} matrix
 * @return {number}
 */
// 1072
var maxEqualRowsAfterFlips = function(matrix) {
    let patternCount = {};
    let count = 0;

    for(let i = 0; i < matrix.length; i++) {
        let trueVal = matrix[i][0];
        for(let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = matrix[i][j] === trueVal ? true : false;
        }
        patternCount[matrix[i]] = (patternCount[matrix[i]] + 1) || 1;
        count = Math.max(count, patternCount[matrix[i]]);
    }
    // console.log(patternCount)

    return count;
};