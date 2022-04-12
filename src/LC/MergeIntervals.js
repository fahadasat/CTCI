/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 56
var merge = function (intervals) {

    if (intervals.length < 2) return intervals;

    intervals = intervals.sort(function (a, b) {
        return a[0] - b[0];
    });

    let mergedOutput = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (mergedOutput[mergedOutput.length - 1][1] >= intervals[i][0]) {

            mergedOutput[mergedOutput.length - 1] = [mergedOutput[mergedOutput.length - 1][0],
                Math.max(intervals[i][1],
                    mergedOutput[mergedOutput.length - 1][1])]
        } else {
            mergedOutput.push(intervals[i])
        }
    }

    return mergedOutput;
};