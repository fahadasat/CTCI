/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//  lc 167
var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        if(numbers[l] + numbers[r] === target) {
            break;
        } else if (numbers[l] + numbers[r] > target) {
            r--;
        } else {
            l++;
        }
    }

    return [l + 1, r + 1];
};