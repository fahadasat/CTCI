/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 322
var coinChange = function (coins, amount) {
    let coinAmount = new Map();
    coinAmount.set(0, 0);

    if (amount === 0) return 0;

    for (let i = 1; i <= amount; i++) {
        let currentMinimum = amount + 1;

        for (let j = 0; j < coins.length; j++) {
            let currentAmountLeft = i - coins[j];

            if (currentAmountLeft >= 0)
                currentMinimum = Math.min(currentMinimum, 1 + coinAmount.get(currentAmountLeft));
        }
        coinAmount.set(i, currentMinimum);
    }

    if (coinAmount.get(amount) === amount + 1) return -1

    return coinAmount.get(amount);
};