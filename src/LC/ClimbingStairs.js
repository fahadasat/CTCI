/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    if (n < 4) return n;


    // return ways(n);

    let stepOne = 2;
    let stepTwo = 3;

    for (let i = 3; i < n; i++) {
        let temp = stepOne + stepTwo;
        stepOne = stepTwo;
        stepTwo = temp;
    }

    return stepTwo;
};

// function ways(head) {
//     let ways = 0;
//     return waysRec(head, ways)
// }
//
// function waysRec(head, ways) {
//     if (head === 0) return ways + 1;
//
//     if (head >= 1) {
//         ways = waysRec(head - 1, ways)
//     }
//     if (head >= 2) {
//         ways = waysRec(head - 2, ways)
//     }
//
//     return ways;
// }

console.log(climbStairs(4))