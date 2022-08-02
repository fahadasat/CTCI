/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 424
 */
var characterReplacement = function (s, k) {
    let longest = 0;
    let count = new Map();

    for (let index in s) {
        count.set(s.charAt(index), 0);
    }

    count.forEach((key, character) => {
        let leftPointer = 0;

        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) === character) {
                count.set(character, count.get(character) + 1);
            } else {
                let substringLength = i - leftPointer + 1;
                let currentCount = count.get(character);
                while (substringLength - currentCount > k) {
                    if (s.charAt(leftPointer) === character)
                        count.set(character, count.get(character) - 1);
                    leftPointer++;
                    substringLength = i - leftPointer + 1;
                    currentCount = count.get(character);
                }
            }
            longest = Math.max(longest, i - leftPointer + 1);
        }
    });
    return longest;
};