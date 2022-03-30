/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let buy = 0;
    let sell = 1;

    while (sell < prices.length) {
        if (prices[sell] > prices[buy]) {
            profit = Math.max(profit, prices[sell] - prices[buy]);
        } else buy = sell;
        sell++;
    }
    return profit;

//     let profit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         let currentProfit = 0;

//         for (let j = i + 1; j < prices.length; j++) {
//             if ((prices[j] - prices[i]) > currentProfit) {
//                 currentProfit = prices[j] - prices[i];
//             }
//         }
//         if (currentProfit > profit) {
//             profit = currentProfit;
//         }
//     }

//     return profit;
};