/**
 * @param {string} s
 * @return {number}
 *1653
 */
var minimumDeletions = function (s) {
    let deletions = [];

    let bCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "b") {
            deletions[i] = deletions[i - 1] || 0;
            bCount++;
        } else {
            deletions[i] = Math.min(bCount, (deletions[i - 1] || 0) + 1)
        }
    }

    return deletions[s.length - 1];
};