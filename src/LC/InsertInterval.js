/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
//lc 57
var insert = function (intervals, newInterval) {
    let updatedInterval = [];

    if (intervals.length < 1) return [newInterval];

    if (newInterval[0] > intervals[intervals.length - 1][1]) {
        intervals.push(newInterval);
        return intervals;
    }

    for (let i = 0; i < intervals.length; i++) {

        if (newInterval[1] < intervals[i][0]) {
            updatedInterval.push(newInterval);
            for (let j = i; j < intervals.length; j++) {
                updatedInterval.push(intervals[j])
            }
            return updatedInterval;
        } else if (newInterval[0] > intervals[i][1]) {
            updatedInterval.push(intervals[i]);
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
        }
    }

    updatedInterval.push(newInterval);
    return updatedInterval;
};