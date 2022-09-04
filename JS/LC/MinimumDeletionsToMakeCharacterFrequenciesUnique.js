/**
 * @param {string} s
 * @return {number}
 * 1647
 */
var minDeletions = function (s) {
    let characterCount = new Map();
    let characterGrouped = new Map();
    let count = [];

    let changes = 0;

    for (let i = 0; i < s.length; i++) {
        if (characterCount.has(s[i]))
            characterCount.set(s[i], characterCount.get(s[i]) + 1);
        else
            characterCount.set(s[i], 1);
    }

    for (const [key, value] of characterCount) {
        if (characterGrouped.has(value)) {
            characterGrouped.set(value, characterGrouped.get(value) + 1)
        } else {
            characterGrouped.set(value, 1)
        }
        count[value] = true;
    }

    // count = [...count].sort((a,b) => {
    //     return a - b;
    // })

    // console.log(count);
    // console.log(characterCount)
    // console.log(characterGrouped)

    for (let currentNum = count.length - 1; currentNum > 0; currentNum--) {
        // currentNum = count[i];
        if (characterGrouped.get(currentNum) > 1) {
            characterGrouped.set(currentNum - 1, (characterGrouped.get(currentNum - 1) || 0) + characterGrouped.get(currentNum) - 1)

            if (currentNum - 1 > 0)

                count[currentNum - 1] = true;

            changes += characterGrouped.get(currentNum) - 1;
        }
    }

    return changes;
};