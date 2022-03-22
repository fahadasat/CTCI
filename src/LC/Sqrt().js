/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let root = 0;

    while (root * root < x) {
        root++;
    }
    if (root * root > x) {
        root--;
    }
    return root;
};