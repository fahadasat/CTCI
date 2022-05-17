/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 33
var search = function (nums, target) {
    if (nums.length === 1 && target === nums[0]) return 0;
    else if (nums.length === 1 && target !== nums[0]) return -1;

    let start = 0;
    let end = nums.length - 1;
    let pivot = Math.floor((start + end) / 2);

    while (end >= start) {
        if (nums[pivot] === target) return pivot;

        if (nums[pivot] >= nums[start]) {
            if (nums[start] > target || target > nums[pivot]) {
                //search right side of array
                start = pivot + 1;
                pivot = Math.floor((start + end) / 2);
            } else {
                //search left side
                end = pivot - 1;
                pivot = Math.floor((start + end) / 2);
            }
        } else {
            if (target > nums[end] || target < nums[pivot]) {
                //search left side
                end = pivot - 1;
                pivot = Math.floor((start + end) / 2);
            } else {
                //search right side of array
                start = pivot + 1;
                pivot = Math.floor((start + end) / 2);
            }
        }
    }
    return -1;

};