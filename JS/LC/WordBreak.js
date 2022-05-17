/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 139
var wordBreak = function (s, wordDict) {
    let subStringInDictionary = new Map();

    subStringInDictionary.set(s.length, true);

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = 0; j < wordDict.length; j++) {

            let currentDictionaryWord = wordDict[j];
            if (currentDictionaryWord.length > s.length - i) continue;
            let currentSubtring = s.slice(i, i + currentDictionaryWord.length);

            if (currentDictionaryWord === currentSubtring) {
                let neededSubstring = i + currentDictionaryWord.length;

                if (subStringInDictionary.has(neededSubstring)) {
                    subStringInDictionary.set(i, true);
                }
            }
        }
    }

    return subStringInDictionary.get(0) || false;
};