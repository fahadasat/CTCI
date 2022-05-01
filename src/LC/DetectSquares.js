// 2013
var DetectSquares = function () {
    this.points = {};
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function ([x, y]) {
    if (!this.points[x]) {
        this.points[x] = {
            [y]: 1
        }
    } else {
        this.points[x][y] = (this.points[x][y] || 0) + 1;
    }
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function ([x1, y1]) {
    if (!this.points[x1]) return 0;

    let totalSquares = 0;

    for (x2 in this.points) {

        let offset = Math.abs(x1 - x2);

        if (offset !== 0) {
            totalSquares += this.square(x1, y1, x2, y1 + offset) + this.square(x1, y1, x2, y1 - offset);
        }

    }
    return totalSquares;
};

DetectSquares.prototype.square = function (x1, y1, x2, y2) {
//     point 2 count * point 3 count * point 4 count
    return (this.points[x1][y2] || 0) * (this.points[x2][y2] || 0) * (this.points[x2][y1] || 0);
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */