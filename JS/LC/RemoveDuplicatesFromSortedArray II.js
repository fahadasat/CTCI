/**
 * @param {number[]} nums
 * @return {number}
 */
// lc 80
var removeDuplicates = function(nums) {
    let i = 1;
    let cnt = 1;

    if(nums.length === 0) {
        return 0;
    }


    for (let j = 1; j < nums.length; j++) {
        if(nums[j] === nums[j - 1]) {
            cnt++;

            if(cnt > 2) {
                continue;
            }
        } else {
            cnt = 1;
        }
        nums[i] = nums[j];
        i++;
    }

    return i;
};