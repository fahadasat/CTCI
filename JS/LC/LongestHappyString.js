/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 * 1405
 */
var longestDiverseString = function (counta, countb, countc) {
    let maxString = "";

    createString();

    function createString(currentString = "", a = counta, b = countb, c = countc, stackA = 0, stackB = 0, stackC = 0) {

        let getLetter = getHighestCount(a, b, c, stackA, stackB, stackC);

        if (getLetter) {
            if (getLetter === "a") {
                createString(currentString + "a", a - 1, b, c, stackA + 1, 0, 0);
            } else if (getLetter === "b") {
                createString(currentString + "b", a, b - 1, c, 0, stackB + 1, 0);
            } else if (getLetter === "c") {
                createString(currentString + "c", a, b, c - 1, 0, 0, stackC + 1);
            }
        }
        maxString = (currentString.length > maxString.length) ? currentString : maxString;
    }

    function getHighestCount(counta, countb, countc, stackA, stackB, stackC) {
        let count = [
            ['a', counta, stackA],
            ['b', countb, stackB],
            ['c', countc, stackC],
        ];

        count.sort((a, b) => {
            return b[1] - a[1];
        })

        for (let i = 0; i < count.length; i++) {
            if (count[i][1] < 1) continue;
            if (count[i][2] > 1) continue;
            return count[i][0];
        }
        return false;
    }

    return maxString;
};