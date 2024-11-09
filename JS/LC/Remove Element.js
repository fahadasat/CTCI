/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// lc 27
var removeElement = function(nums, val) {
    // let k = 0;

    if(nums.length < 1){
        return 0;
    }
    if(nums.length === 1) {
        if(nums[0] !== val)
            return 1;
    }

    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        if(nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
    // space: o(1) - all in place
    // time: o(n) - j traverses array once


    // let i = 0;
    // let j = i + 1;

    // while (i < nums.length) {
    //     if (nums[i] !== val) {
    //         k++;
    //         i++;
    //         j++;
    //     }
    //     else {
    //         while(j < nums.length && nums[j] === val){
    //             j++;
    //         }
    //         if(j === nums.length) {
    //             break;
    //         }
    //         nums[i] = nums[j];
    //         nums[j] = val;
    //         k++;
    //         i++;
    //         j++;
    //     }
    // }

    // return k;

    // space o(1) everything was done in place
    //
};