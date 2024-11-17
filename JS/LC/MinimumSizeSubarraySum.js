/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// lc 209
var minSubArrayLen = function(target, nums) {

    let total = 0;
    let subarraySize = Infinity;

    let l = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];

        if(total >= target) {
            while(total - nums[l] >= target && l < i) {
                total -= nums[l];
                l++;
            }
            subarraySize = Math.min(subarraySize, i - l + 1);
        }
    }

    return (subarraySize === Infinity) ? 0 : subarraySize;
};