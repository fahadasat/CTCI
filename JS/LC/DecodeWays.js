/**
 * @param {string} s
 * @return {number}
 91
 */
var numDecodings = function (s) {
    let arr = [];
    arr[s.length] = 1;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == 0)
            arr[i] = 0;
        else {
            arr[i] = arr[i + 1];

            if (i + 1 < s.length && parseInt(s[i] + s[i + 1]) < 27) {
                arr[i] += arr[i + 2];
            }
        }
    }

    return arr[0]
};