/**
 * @param {string[]} words
 * @return {number}
 1048
 */
var longestStrChain = function (words) {
    let longestChain = 0;
    let wordLength = new Map();
    words.sort((a, b) => {
        return a.length - b.length;
    });

    let smallest = words[0].length;
    for (let i = 0; i < words.length; i++) {
        let word = [words[i]];

        if (words[i].length === smallest) {
            word.push(1);
        } else {
            //check lowest;
            let previousWords = wordLength.get(word[0].length - 1) || [];

            let chain = checkPrevious(word[0], previousWords);
            word.push(chain);
        }

        let currentArray = wordLength.get(word[0].length) || [];
        currentArray.push(word);
        wordLength.set(words[i].length, currentArray);

        longestChain = Math.max(longestChain, word[1])
    }

    function checkPrevious(currentWord, previousWords) {
        if (previousWords.length === 0) return 0;
        else {
            let maxChain = 1;
            for (let i = 0; i < previousWords.length; i++) {
                // let currentChain = 0;
                //if predecessor
                if (isPredecessor(currentWord, previousWords[i])) {
                    maxChain = Math.max(maxChain, previousWords[i][1] + 1)
                }
                // console.log(previousWords[i][0]);

            }
            return maxChain;
        }
    }

    function isPredecessor(current, [previous, count]) {
        // console.log(previous)
        // console.log(current.slice(0, current.length - 1))
        // console.log(current.slice(1, current.length))
        let diffCount = 0;
        if (current.slice(0, current.length - 1) === previous || current.slice(1, current.length) === previous)
            return true;
        else {
            let indexTwo = 0;
            for (let i = 0; i < current.length; i++) {
                if (current.charAt(i) !== previous.charAt(indexTwo)) {
                    diffCount++;
                } else {
                    indexTwo++;
                }
                if (diffCount > 1) return false;
            }
        }
        return true;
    }

    // console.log(wordLength);
    // console.log(longestChain);

    return longestChain;
};