/**
 * @param {number[]} nums
 * @return {number}
 */
//lc 153

var findMin = function (nums) {

    if (nums.length < 2) return nums[0];

    let left = 0;
    let right = nums.length - 1;

    let pivot = nums.length / 2;

    while (nums.length > 2) {
        left = 0;
        right = nums.length - 1;
        pivot = Math.floor(nums.length / 2);


        if (nums[pivot - 1] < nums[right]) nums = nums.slice(left, pivot + 1)
        else nums = nums.slice(pivot, right + 1)
    }

    return Math.min(nums[0], nums[1]);
};