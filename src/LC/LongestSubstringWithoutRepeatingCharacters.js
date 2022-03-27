/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    if (s.length === 1) return 1;

    let letters = new Set();
    let maxLength = 0;
    let currentLength = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {

            if (!letters.has(s.charAt(j))) {
                currentLength++;
                letters.add(s.charAt(j));
            } else {
                letters = new Set();
                if (currentLength > maxLength) {
                    maxLength = currentLength;
                }
                currentLength = 0;
                break;
            }
        }
    }
    if (currentLength > maxLength) {
        maxLength = currentLength;
    }
    return maxLength;
};