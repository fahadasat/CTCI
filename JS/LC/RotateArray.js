/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// lc 189
var rotate = function(nums, k) {
    while(k > nums.length) {
        k = k - nums.length;
    }

    let overflow = [];
    let currentOverflow = 0;

    let count = k;

    for ( let i = nums.length - 1; i >= 0; i--) {

        if (count > 0) {
            overflow.push(nums[i]);
            count--;
        }
        if (i -k >=0) {
            nums[i] = nums[i - k];
        }
        else {
            nums[i] = overflow[currentOverflow];
            currentOverflow++;
        }
    }

    // time: o(n)
    // space: o(k)
};