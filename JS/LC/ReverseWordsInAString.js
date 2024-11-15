/**
 * @param {string} s
 * @return {string}
 */
// 151
var reverseWords = function(s) {
    let output = "";

    let l = s.length - 1;
    let r = l;

    while(r >= 0) {
        if(s[l] === " ") {
            l--;
            r--;
            continue;
        }
        while(r >= 0 && s[r] !== " ") {
            r--;
        }
        output = output + s.slice(r + 1, l + 1) + " ";

        l = r;
    }

    return output.trim();
};