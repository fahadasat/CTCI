/**
 * @param {number[][]} intervals
 * @return {boolean}
 * 252
 */
var canAttendMeetings = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    let i = 0;
    while (i + 1 < intervals.length) {
        if (intervals[i + 1][0] < intervals[i][1])
            return false;
        i++;
    }

    return true;
};