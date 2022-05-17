/**
 * @param {string[]} timePoints
 * @return {number}
 */
// 539
var findMinDifference = function (timePoints) {

    for (let i = 0; i < timePoints.length; i++) {
        let [hour, min] = timePoints[i].split(":");

        timePoints[i] = parseInt(hour) * 60 + parseInt(min);
    }

    timePoints.sort((a, b) => {
        return a - b;
    });

    let min = timePoints[0] + 1440 - timePoints[timePoints.length - 1];


    for (let i = 0; i < timePoints.length - 1; i++) {
        min = Math.min(timePoints[i + 1] - timePoints[i], min);

        if (min === 0) return min;
    }

    return min;
};