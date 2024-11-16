/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 28
//rk solution O(n)
var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    if (haystack.length < needle.length) return -1;

    let base = 26;
    let mod = 5381;
    let windowSize = needle.length;

    let hashNeedle = 0;
    let hashWindow = 0;
    let basePow = 1;

    for (let k = 0; k < windowSize - 1; k++) {
        basePow = (basePow * base) % mod;
    }

    for(let i = 0; i < windowSize; i++) {
        hashNeedle = (hashNeedle * base + needle.charCodeAt(i)) % mod;
        hashWindow = (hashWindow * base + haystack.charCodeAt(i)) % mod;
    }

    for(let j = 0; j <= haystack.length - windowSize; j++) {

        if(hashNeedle === hashWindow) {
            if(needle === haystack.slice(j, j + windowSize)) {
                return j;
            }
        }

        if (j < haystack.length - windowSize) {
            hashWindow = (hashWindow - haystack.charCodeAt(j) * basePow % mod + mod) % mod;
            hashWindow = (hashWindow * base + haystack.charCodeAt(j + windowSize)) % mod;
        }
    }

    return -1;
};

// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// // 28
// var strStr = function(haystack, needle) {
//
//     for(let i = 0; i < haystack.length; i++) {
//         if(haystack[i] === needle[0]) {
//             if (haystack.slice(i, i + needle.length) === needle) {
//                 return i;
//             }
//         }
//     }
//
//     // tc: O(n*m)
//
//     return -1;
// };