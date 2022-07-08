/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 271
 */
var encode = function (strs) {
    let char = "";
    for (let i = 0; i < strs.length; i++) {
        char += `${strs[i].length}#${strs[i]}`;
    }
    return char;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
    let output = [];

    let left = 0;
    let right = 0;

    while (right < s.length) {
        let length = 0;
        while (s.charAt(right) !== "#") {
            right++;
        }

        length = parseInt(s.slice(left, right));
        output.push(s.slice(right + 1, right + 1 + length));
        left = right + 1 + length;
        right = left;
    }

    return output;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */