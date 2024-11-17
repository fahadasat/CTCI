/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// lc 392
var isSubsequence = function(s, t) {
    let subsequencePointer = 0;

    for(let i = 0; i < t.length; i++) {
        if(subsequencePointer >= s.length) {
            break;
        }
        if(s[subsequencePointer] === t[i]) {
            subsequencePointer++;
        }
    }

    return subsequencePointer >= s.length ? true : false;
};