/**
 * @param {number[]} nums
 * @return {number}
 */
// lc 26
var removeDuplicates = function(nums) {
    let i = 0;
    let j = 0;

    for (let j = 0; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;

    // time: o(n) - traversing array once
    // space: o(1) - done in place
};