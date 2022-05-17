/**
 * @param {number[][]} points
 * @return {number}
 * 1937
 */
var maxPoints = function (points) {

    let prevArray = points[0];
    let currentArray = [];

    for (let i = 1; i < points.length; i++) {

        // left to right
        let leftMax = 0;
        for (let j = 0; j < points[0].length; j++) {
            leftMax = Math.max(leftMax - 1, prevArray[j])
            currentArray[j] = leftMax + points[i][j];
        }

        //right to left
        let rightMax = 0;
        for (let j = points[0].length - 1; j >= 0; j--) {
            rightMax = Math.max(rightMax - 1, prevArray[j])
            currentArray[j] = Math.max(currentArray[j], rightMax + points[i][j]);
        }
        console.log(currentArray)

        prevArray = currentArray;
        currentArray = [];


    }

    return Math.max(...prevArray)
};