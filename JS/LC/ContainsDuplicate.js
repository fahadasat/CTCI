/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {

    if (nums.length < 2) return false;

    let set = new Set();
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (left === right) {
            if (set.has(nums[right])) return true;
        } else if (set.has(nums[right]) || set.has(nums[left]) || nums[right] === nums[left]) return true;

        set.add(nums[right]);
        set.add(nums[left]);

        left++;
        right--;
    }
    return false;
};