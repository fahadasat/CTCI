/**
 * @param {string[]} words
 * @return {string}
 269
 */
var alienOrder = function (words) {
    let characterGraph = new Map;
    words.forEach((word) => {
        word.split("").forEach((character) => {
            characterGraph.set(character, [])
        })
    })

    for (let i = 0; i < words.length - 1; i++) {
        let wordOne = words[i];
        let wordTwo = words[i + 1];

        if (wordOne.length > wordTwo.length && wordOne.startsWith(wordTwo)) return "";

        let minLength = Math.min(wordOne.length, wordTwo.length);
        for (let j = 0; j < minLength; j++) {
            if (wordOne.charAt(j) !== wordTwo.charAt(j)) {
                characterGraph.get(wordOne.charAt(j)).push(wordTwo.charAt(j));
                break;
            }
        }
    }

    let visited = new Set();
    let currentPath = new Set();
    let outputString = "";

    for ([key, entries] of characterGraph) {
        // console.log(key, entries)
        if (!checkCycle(key)) return "";
    }

    function checkCycle(node) {
        if (currentPath.has(node)) return false;
        if (visited.has(node)) return true;

        currentPath.add(node);

        let children = characterGraph.get(node);
        for (let i = 0; i < children.length; i++) {
            if (!checkCycle(children[i])) return false;
        }

        currentPath.delete(node);
        outputString += node;
        visited.add(node);
        return true;
    }

    return outputString.split("").reverse().join("").toString()
};