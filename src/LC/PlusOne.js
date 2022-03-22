/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    digits[digits.length - 1] += 1;

    if (digits[digits.length - 1] > 9) {
        digits[digits.length - 1] = 0;
        let indexToInc = digits.length - 2;

        while (indexToInc > -1 && digits[indexToInc] === 9) {
            digits[indexToInc] = 0;
            indexToInc--;
        }

        if (indexToInc < 0) {
            return [1].concat(digits);
        } else {
            digits[indexToInc]++;
        }
    }
    return digits;
};

console.log(plusOne([9, 9]))