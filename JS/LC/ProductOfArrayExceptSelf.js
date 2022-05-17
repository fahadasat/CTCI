/**
 * @param {number[]} nums
 * @return {number[]}
 */
//lc: 238
var productExceptSelf = function (nums) {

    let output = [];

    let prefix = 1;

    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {

        if (output[i] != null) {
            output[i] *= prefix;
        } else
            output[i] = prefix;
        prefix *= nums[i];

        if (output[nums.length - 1 - i] != null) {
            output[nums.length - 1 - i] *= postfix;
        } else
            output[nums.length - 1 - i] = postfix;
        postfix *= nums[nums.length - 1 - i];
    }
    return output;
//     let output = [];
//     let total = 1;

//     for (let i = 0; i < nums.length; i++) {
//         output.push(total)
//         total *= nums[i]

//         for (let j = 0; j < i; j++) {
//             output[j] *= nums[i];
//         }
//     }

//     return output;
};