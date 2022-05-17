/**
 * @param {string} s
 * @return {number}
 */
// 409
var longestPalindrome = function (s) {

    let letterSet = new Set();

    let totalEvenCharacters = 0;

    if (s.length < 2) return s.length;

    for (let i = 0; i < s.length; i++) {
        if (letterSet.has(s.charAt(i))) {
            totalEvenCharacters++;
            letterSet.delete(s.charAt(i));
        } else {
            letterSet.add(s.charAt(i));
        }
    }

    if (letterSet.size > 0) return (totalEvenCharacters * 2) + 1;

    return (totalEvenCharacters * 2);
};