/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let pivot = 0;

    while (start <= end) {
        pivot = Math.floor((end + start) / 2);

        if (nums[pivot] === target) {
            return pivot;
        } else if (nums[pivot] > target) {
            end = pivot - 1;
        } else if (nums[pivot] < target) {
            start = pivot + 1;
        }
    }
    return -1;
};

console.log(search([1, 2, 5], 2))