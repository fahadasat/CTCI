/**
 * @param {string} s
 * @return {number}
 */
// 58
var lengthOfLastWord = function(s) {
    s = s.trim();
    let count = 0;

    while(count <= s.length - 1 && s[s.length - 1 - count] !== " ") {
        count++;
    }

    return count;
};