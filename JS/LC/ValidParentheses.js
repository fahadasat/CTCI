/**
 * @param {string} s
 * @return {boolean}
 */
// 20
var isValid = function(s) {
    let brackets = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    let needBracket = [];

    for(let i = 0; i < s.length; i++) {
        if(brackets[s[i]]) {
            needBracket.push(brackets[s[i]]);
        } else if (needBracket[needBracket.length - 1] === s[i]) {
            needBracket.pop();
        } else {
            return false;
        }
    }

    return needBracket.length === 0 ? true : false;
};