/**
 * @param {string[]} words
 * @return {string}
 720
 */
var longestWord = function (words) {
    words.sort();

    let wordSet = new Set();
    let result = "";

    for (let word in words) {
        let sliced = words[word].slice(0, words[word].length - 1);
        if (words[word].length === 1 || wordSet.has(sliced)) {
            if (words[word].length > result.length)
                result = words[word];
            wordSet.add(words[word]);
        }
    }

    return result;
};