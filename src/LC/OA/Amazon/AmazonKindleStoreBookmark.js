/**
 * @param {string} pageType
 * @return {number}
 */

var numberOfWays = function (pageType) {
    let singleZero = 0;
    let singleOne = 0;
    let lookingForZero = 0;
    let lookingForOne = 0;
    let totalWays = 0;

    if (pageType.length < 3) return totalWays;

    for (let i = 0; i < pageType.length; i++) {
        let digit = parseInt(pageType[i]);
        switch (digit) {
            case 0:
                totalWays += lookingForZero;
                lookingForOne += singleOne;
                singleZero++;
                break;
            case 1:
                totalWays += lookingForOne;
                lookingForZero += singleZero;
                singleOne++;
                break;
        }
    }
    return totalWays;
}

console.log(numberOfWays("10111"))