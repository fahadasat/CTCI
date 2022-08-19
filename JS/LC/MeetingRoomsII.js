/**
 * @param {number[][]} intervals
 * @return {number}
 253
 */
var minMeetingRooms = function (intervals) {
    // if(intervals.length < 2) return intervals.length;
    let meetingEnd = [];
    let maxMeetings = 0, currentMeetings = 0;
    intervals.sort((a, b) => {
        return a[0] - b[0]
    });
    // meetingEnd.push(intervals.shift());

    while (intervals.length > 0) {
        let currentInterval = intervals.shift();

        if (meetingEnd.length < 1) {
            meetingEnd.push(currentInterval[1]);
            currentMeetings++;
        } else {
            if (currentInterval[0] >= meetingEnd[meetingEnd.length - 1]) {
                while (currentInterval[0] >= meetingEnd[meetingEnd.length - 1]) {
                    meetingEnd.pop();
                    currentMeetings--;
                }
            }
            meetingEnd.push(currentInterval[1]);
            currentMeetings++;
            meetingEnd.sort((a, b) => {
                return b - a
            });
        }

        maxMeetings = Math.max(maxMeetings, currentMeetings);
    }

    return maxMeetings;
};