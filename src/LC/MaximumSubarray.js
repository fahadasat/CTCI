/**
 * @param {number[]} nums
 * @return {number}
 */

//lc: 53
var maxSubArray = function (nums) {
    let max = -Infinity;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        current = Math.max(nums[i], nums[i] + current);

        if (current > max) max = current
    }
    
    return max;
};

console.log(maxSubArray([5, 4, -1, 7, 8]))