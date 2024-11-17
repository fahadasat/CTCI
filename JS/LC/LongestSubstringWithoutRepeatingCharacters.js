/**
 * @param {string} s
 * @return {number}
 */
// lc: 3
var lengthOfLongestSubstring = function(s) {
    let currentChars = new Set();

    let maxSize = 0;
    let l = 0;
    for(let i = 0; i < s.length; i++) {
        while(currentChars.has(s[i]) && l <= i) {
            currentChars.delete(s[l]);
            l++;
        }
        currentChars.add(s[i]);

        maxSize = Math.max(maxSize, currentChars.size);
    }

    return maxSize;
};