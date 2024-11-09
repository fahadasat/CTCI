/**
 * @param {number[]} nums
 * @return {number}
 */
// lc 45
var jump = function(nums) {
    let l = 0;
    let r = 0;
    let count = 0;

    while (r < nums.length - 1) {
        let farthestJump = 0;

        for(let i = l; i < r + 1; i++) {
            farthestJump = Math.max(farthestJump, i + nums[i]);
        }
        l = r;
        r = farthestJump;
        count++;
    }
    return count;

    // time o(n)
    // space: o(1)
};