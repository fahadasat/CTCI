/**
 * @param {number} num
 * @return {string}
 */
// 12
var intToRoman = function(num) {
    let output = "";
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let symbols = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];

    let subtractNum = (numToSubtract, letterToAdd) => {
        while(num >= numToSubtract) {
            output += letterToAdd;
            num -= numToSubtract;
        }
    }
    for(let i = 0; i < values.length; i++) {
        subtractNum(values[i], symbols[i]);
    }

    return output;
};