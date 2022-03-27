/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    if (s.length < 2) {
        return s;
    }

    let longestSubstring = s.charAt(0);
    let currentSubstring = "";
    let currentLetter = "";

    for (let i = 0; i < s.length; i++) {

        if ((s.length - i) < longestSubstring.length) {
            break;
        }

        let end = s.length - 1;

        while (end >= i) {
            if (((end + 1) - i) < longestSubstring.length) {
                break;
            }

            if (s.charAt(end) !== s.charAt(i)) {
                end--;
            } else {
                if (checkPalindrome(s.slice(i, end + 1)) && s.slice(i, end + 1).length > longestSubstring.length) {
                    longestSubstring = s.slice(i, end + 1);
                }
                end--;
            }
        }
    }
    return longestSubstring
};

function checkPalindrome(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

console.log(longestPalindrome("cac"))