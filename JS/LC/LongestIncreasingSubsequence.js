/**
 * @param {number[]} nums
 * @return {number}
 * 300
 */
var lengthOfLIS = function (nums) {
    let longest = [];
    longest[nums.length - 1] = 1;
    let longestLength = 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        longest[i] = 1
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i] && longest[j] + 1 > longest[i])
                longest[i] = longest[j] + 1;
        }
        longestLength = Math.max(longest[i], longestLength)
    }

    return longestLength;
};