/**
 * @param {string[]} strs
 * @return {string[][]}
 49
 */
var groupAnagrams = function (strs) {
    let output = [];
    let anagrams = new Map();

    strs.forEach(string => {
        let anagram = string.split('').sort((a, b) => a.localeCompare(b)).join('');

        if (anagrams.has(anagram)) {
            output[anagrams.get(anagram)].push(string);
        } else {
            anagrams.set(anagram, output.length);
            output.push([string]);
        }
    })

    return output;


//     let words = new Map;
//     strs.forEach(string => {
//         let currentWord = string.split('').sort((a, b) => a.localeCompare(b)).join('')
//         let currentWords = words.get(currentWord) || [];
//         currentWords.push(string);
//         words.set(currentWord, currentWords)
//     })

//     let output = [];

//     words.forEach((value, key) => {
//         output.push(value)
//     })

//     return output;
};