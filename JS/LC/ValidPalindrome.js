/**
 * @param {string} s
 * @return {boolean}
 */
//lc 125
var isPalindrome = function (s) {
    if (s.length < 2) return true;

    let leftStringChar = 0;
    let rightStringChar = s.length - 1;

    while (leftStringChar < rightStringChar) {

        while (leftStringChar < rightStringChar && !s.charAt(leftStringChar).match(/^[a-z0-9]+$/i)) leftStringChar++;
        while (leftStringChar < rightStringChar && !s.charAt(rightStringChar).match(/^[a-z0-9]+$/i)) rightStringChar--;


        if (s.charAt(leftStringChar).toLowerCase() !== s.charAt(rightStringChar).toLowerCase()) return false;

        leftStringChar++;
        rightStringChar--;
    }

    return true;
};