/**
 * @param {number[]} nums
 * @return {number}
 */
//lc: 152
var maxProduct = function (nums) {

    let currentMax = nums[0];
    let currentMin = nums[0];
    let total = nums[0];

    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {

        total *= nums[i];

        let tmp = currentMax;

        currentMax = Math.max(nums[i], currentMin * nums[i], currentMax * nums[i]);
        currentMin = Math.min(nums[i], currentMin * nums[i], tmp * nums[i]);

        result = Math.max(result, total, currentMax);
    }


    return result;
};