/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//54
var spiralOrder = function (matrix) {
    let currentMatrix = [];
    let visited = new Set();

    let leftBoundary = 0;
    let rightBoundary = matrix[0].length;

    let topBoundary = 0;
    let bottomBoundary = matrix.length;

    while (leftBoundary < rightBoundary && topBoundary < bottomBoundary) {

        //left to right
        for (let col = leftBoundary; col < rightBoundary; col++) {
            currentMatrix.push(matrix[topBoundary][col])
        }
        topBoundary++;

        //top to bottom
        for (let row = topBoundary; row < bottomBoundary; row++) {
            currentMatrix.push(matrix[row][rightBoundary - 1])
        }
        rightBoundary--;

        if (!(leftBoundary < rightBoundary && topBoundary < bottomBoundary)) {
            break;
        }

        //right to left
        for (let col = rightBoundary - 1; col >= leftBoundary; col--) {
            currentMatrix.push(matrix[bottomBoundary - 1][col])
        }
        bottomBoundary--;

        //bottom to top
        for (let row = bottomBoundary - 1; row >= topBoundary; row--) {
            currentMatrix.push(matrix[row][leftBoundary])
        }
        leftBoundary++;
    }

    return currentMatrix;

};