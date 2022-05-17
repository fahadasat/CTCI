// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//     An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    if (s.length % 2 > 0)
        return false;

    let currentOpen = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
            currentOpen += s[i];
        } else {
            switch (s[i]) {
                case ")":
                    if (currentOpen === "" || currentOpen.slice(-1) !== "(") return false;
                    else currentOpen = currentOpen.slice(0, -1)
                    break;
                case "]":
                    if (currentOpen === "" || currentOpen.slice(-1) !== "[") return false;
                    else currentOpen = currentOpen.slice(0, -1)
                    break;
                case "}":
                    if (currentOpen === "" || currentOpen.slice(-1) !== "{") return false;
                    else currentOpen = currentOpen.slice(0, -1)
                    break;
            }
        }
    }
    return currentOpen.length <= 0;

};

console.log(isValid("()"))