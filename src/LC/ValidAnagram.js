/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//lc 242
var isAnagram = function (s, t) {

    if (s.length !== t.length) return false;
    if (s.length < 1 || t.length < 1) return false;

    let characterMap = new Map();

    for (let i = 0; i < s.length; i++) {
        characterMap.set(s.charAt(i), characterMap.get(s.charAt(i)) + 1 || 1)
    }

    for (let j = 0; j < t.length; j++) {
        characterMap.set(t.charAt(j), characterMap.get(t.charAt(j)) - 1)

        if (characterMap.get(t.charAt(j)) < 0 || isNaN(characterMap.get(t.charAt(j)))) return false;
    }

    return true;
};