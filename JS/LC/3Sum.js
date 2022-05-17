/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//lc 15
    
var threeSum = function (nums) {

    let result = [];

    nums.sort((a, b) => (a - b));

    if (nums[nums.length - 1] < 0 || nums.length < 3) return result;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return result;

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let rightPointer = nums.length - 1;
        let leftPointer = i + 1;

        while (leftPointer < rightPointer) {
            let totalSum = nums[i] + nums[leftPointer] + nums[rightPointer];

            if (totalSum > 0)
                rightPointer--;
            else if (totalSum < 0)
                leftPointer++;
            else {
                result.push([nums[i], nums[leftPointer], nums[rightPointer]])

                leftPointer++;
                while ((leftPointer < rightPointer) && (nums[leftPointer] === nums[leftPointer - 1])) {
                    leftPointer++;
                }
            }
        }
    }
    return result;
};