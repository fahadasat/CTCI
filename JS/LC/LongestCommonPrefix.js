// Write a function to find the longest common prefix string amongst an array of strings.
//
//     If there is no common prefix, return an empty string "".
//
//
//
//     Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
//
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//
//     Constraints:
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
// 14
var longestCommonPrefix = function (strs) {

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let temp = ""
        for (let j = 0; j < Math.min(prefix.length, strs[i].length); j++) {
            if (prefix.charAt(j) === strs[i].charAt(j)) {
                temp += prefix.charAt(j);
            } else {
                break;
            }
        }
        prefix = temp;
    }
    return prefix;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["cir", "car"]))
