/**
 * @param {number[]} nums
 * @return {number}
 */
// lc 169
var majorityElement = function(nums) {

    // let values = new Map();
    // let highestNum = nums[0];
    // let highestCount = 1;

    // for ( let i = 0; i < nums.length; i++) {
    //     values.set(nums[i], values.get(nums[i]) + 1 || 1)
    //     if (values.get(nums[i]) > highestCount) {
    //         highestNum = nums[i];
    //         highestCount = values.get(nums[i]);
    //     }
    // }
    // return highestNum;

    // space: o(n) because there can be all unique values in the array
    // time: o(n)


    let highest = nums[0];
    let count = 1;

    for(let i = 1; i <nums.length; i++) {
        if(highest === nums[i]) {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            highest = nums[i];
            count = 1;
        }
    }
    return highest;

    // time o(n)
    // space o(1)
};