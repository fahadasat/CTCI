/**
 * @param {int []} prices
 * @return {int}
 */

var minimumPriceChange = function (prices) {

    let minimumMonth = 0;
    let minimumChange = Infinity;

    for (let i = 0; i < prices.length; i++) {

        let firstArray = prices.slice(0, i + 1);
        let secondArray = prices.slice(i + 1, prices.length);

        let firstAvg = getAvg(firstArray);
        let secondAvg = getAvg(secondArray);

        let currentChange = Math.abs(firstAvg - secondAvg);
        if (currentChange < minimumChange) {
            minimumChange = currentChange;
            minimumMonth = i + 1;
        }
    }

    return minimumMonth;

}

/**
 * @param {int []} prices
 * @return {int}
 */
function getAvg(prices) {
    if (prices.length < 1) return 0;
    return Math.floor(prices.reduce((a, b) => a + b) / prices.length);
}

console.log(minimumPriceChange([10, 5, 3, 4, 6]))