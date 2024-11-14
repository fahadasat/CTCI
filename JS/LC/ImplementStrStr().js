/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length < 1) {
        return 0;
    }

    if (needle.length > haystack.length) {
        return -1;
    }

    for (let i = 0; i < haystack.length; i++) {
        if (needle.charAt(0) === haystack.charAt(i)) {
            console.log(haystack.charAt(i))
            let str = haystack.slice(i, i + needle.length);
            if (str === needle) return i;
        }
    }

    return -1;
};

console.log(strStr("a", "a"))