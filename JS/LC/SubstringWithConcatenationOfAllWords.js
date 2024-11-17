/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// 30
var findSubstring = function(s, words) {
    let output = [];
    let wordsMap = {};
    let subLength = 0;
    let wordLength = words[0].length;

    let checkSubstring = (l, r) => {
        let map = Object.assign({}, wordsMap);
        // console.log(l, r, map);

        for(let i = l; i < r; i+= wordLength) {
            let word = s.slice(i, i + wordLength);
            if(map[word]) {
                map[word]--;
            } else {
                return false;
            }
        }
        return true;
    }

    words.forEach(str => {
        subLength += str.length;
        wordsMap[str] = (wordsMap[str] || 0) + 1;
    });

    for(let i = 0; i <= s.length - wordLength; i++) {
        let word = s.slice(i, i + wordLength);
        if(wordsMap[word]) {
            checkSubstring(i, i + subLength) && output.push(i);
        }
    }

    return output;
};