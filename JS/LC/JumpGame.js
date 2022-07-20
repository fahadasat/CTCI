/**
 * @param {number[]} nums
 * @return {boolean}
 55
 */
var canJump = function (nums) {
    if (nums.length < 2) return true;
    let needed = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] + i >= needed)
            needed = i;
    }

    return !needed
};