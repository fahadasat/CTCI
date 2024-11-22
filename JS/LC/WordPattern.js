/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// 290
var wordPattern = function(pattern, s) {
    let patternMap = new Map();
    let wordMap = new Map();

    let words = s.split(" ");

    if(pattern.length !== words.length) {
        return false;
    }

    for(let i = 0; i < pattern.length; i++) {
        if(patternMap.has(pattern[i]) && patternMap.get(pattern[i]) !== words[i]) {
            return false;
        }
        if(wordMap.has(words[i]) && wordMap.get(words[i]) !== pattern[i]) {
            // console.log(wordMap[words[i]])
            return false;
        }

        patternMap.set(pattern[i], words[i]);
        wordMap.set(words[i], pattern[i]);
    }

    return true;
};