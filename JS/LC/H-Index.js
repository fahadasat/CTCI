/**
 * @param {number[]} citations
 * @return {number}
 */
// lc 274
var hIndex = function(citations) {
    citations.sort((a, b) => b - a);

    let count = 0;

    for (let i = 0; i < citations.length; i++) {
        if(citations[i] > count) {
            count++;
        }

    }

    return count;

    // time o(nlogn)
    // space o(1)
};