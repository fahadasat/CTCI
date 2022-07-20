/**
 * @param {number[]} nums
 * @return {number}
 * 41
 */
var firstMissingPositive = function (nums) {
//     let set = new Set(nums);

//     let count = 1;
//     while(set.has(count)) {
//         count++;
//     }
//     return count;

    for (let i = 0; i < nums.length; i++) {
        let idx = nums[i] - 1;

        if (nums[i] === i + 1 || nums[i] < 1 || nums[i] >= nums.length || nums[i] === nums[idx]) continue;
        else {


            [nums[i], nums[idx]] = [nums[idx], nums[i]]

            i--;
        }
    }
    // console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }

    return nums[nums.length - 1] + 1;
    // console.log(nums)
};