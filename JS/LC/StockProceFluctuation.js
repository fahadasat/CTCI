// 2034
var StockPrice = function () {
    this.prices = [];
    this.timestamps = [];

    this.maximumPrice = -Infinity;
    this.minimumPrice = Infinity;

    this.currentTime = 0;
    this.currentPrice = 0;

};

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
//     console.log(this.prices);
//     console.log(this.timestamps);


    let index = this.timestamps.indexOf(timestamp);
    if (index !== -1) {
        if (this.maximumPrice === this.prices[index] || this.minimumPrice === this.prices[index]) {
            this.prices[index] = price;
            this.maximumPrice = Math.max(...this.prices);
            this.minimumPrice = Math.min(...this.prices);

        } else {
            this.prices[index] = price;
            this.maximumPrice = Math.max(this.maximumPrice, price);
            this.minimumPrice = Math.min(this.minimumPrice, price);
        }

    } else {
        this.timestamps.push(timestamp);
        this.prices.push(price);

        this.maximumPrice = Math.max(this.maximumPrice, price);
        this.minimumPrice = Math.min(this.minimumPrice, price);
    }

    if (timestamp >= this.currentTime) {
        this.currentTime = timestamp;
        this.currentPrice = price;
    }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
    return this.currentPrice;
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
    return this.maximumPrice;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
    return this.minimumPrice;
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */