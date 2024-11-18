/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 76
var minWindow = function(s, t) {
    if(t.length > s.length) return "";

    let count = new Map();
    let subStringCount = t.length;
    for(let char of t) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    let min = [0, s.length];
    let l = 0;
    for(let r = 0; r < s.length; r++) {
        // console.log(s[r])
        if(count.has(s[r])) {
            count.set(s[r], count.get(s[r]) - 1);
            if(count.get(s[r]) >= 0)
                subStringCount--;
            while(l < r) {
                if(count.has(s[l])) {
                    if(count.get(s[l]) + 1 > 0) {
                        break;
                    } else {
                        count.set(s[l], count.get(s[l]) + 1);
                    }
                }
                l++;
            }
        }

        if(subStringCount <= 0 && (r - l) < (min[1] - min[0])) {
            min[0] = l;
            min[1] = r;
            // console.log(min)
        }
    }

    // console.log(min)

    return (subStringCount <= 0) ? s.slice(min[0], min[1] + 1) : "";
};