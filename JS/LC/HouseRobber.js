/**
 * @param {number[]} nums
 * @return {number}
 198
 */
var rob = function (nums) {
    for (let j = nums.length - 1; j >= 0; j--) {
        let previousMax = nums[j + 2] || 0;
        let nextIndexMax = nums[j + 1] || 0;

        nums[j] = Math.max(nums[j] + previousMax, nextIndexMax);
    }

    return nums[0];
};