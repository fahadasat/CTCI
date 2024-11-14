/**
 * @param {number[]} prices
 * @return {number}
 */
// lc 122
var maxProfit = function(prices) {
    let maxProfit = 0;

    let stockPriceMin = prices[0];
    let stockPriceMax = prices[0];

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < stockPriceMax) {
            maxProfit += Math.max(0, stockPriceMax-stockPriceMin);
            stockPriceMin = prices[i];
            stockPriceMax = prices[i];
        } else if (prices[i] > stockPriceMax) {
            stockPriceMax = prices[i];
        }
    }

    maxProfit += Math.max(0, stockPriceMax-stockPriceMin);

    return maxProfit;

    // space: o(1)
    // time: o(n)
};