/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 28
var strStr = function(haystack, needle) {

    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            if (haystack.slice(i, i + needle.length) === needle) {
                return i;
            }
        }
    }

    // tc: O(n*m)

    return -1;
};