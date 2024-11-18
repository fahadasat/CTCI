/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 205
var isIsomorphic = function(s, t) {
    let map = {};
    let values = new Set();

    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] && map[s[i]] === t[i]) {
            continue;
        }

        if(map[s[i]] && map[s[i]] !== t[i]) {
            return false;
        }

        if(values.has(t[i])) {
            return false;
        }

        map[s[i]] = t[i];
        values.add(t[i]);
    }
    return true;
};