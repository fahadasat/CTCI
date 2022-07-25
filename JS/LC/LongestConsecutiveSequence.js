/**
 * @param {number[]} nums
 * @return {number}
 128
 */
var longestConsecutive = function (nums) {
    let max = 0;
    let consecutive = new Set(nums);

    consecutive.forEach(num => {
        if (!consecutive.has(num - 1))
            checkSequence(num);
    })

    function checkSequence(num, sequenceCount = 0) {
        if (!consecutive.has(num)) {
            max = Math.max(max, sequenceCount);
            return;
        }
        checkSequence(num + 1, sequenceCount + 1);
    }

//     for(let i = 0; i < nums.length; i++) {
//         if(consecutive.has(nums[i] - 1)) {
//             consecutive.set(nums[i], consecutive.get(nums[i] - 1) + 1);
//         } else {
//             consecutive.set(nums[i], 1);
//         }
//         max = Math.max(max, consecutive.get(nums[i]))
//         let future = nums[i] + 1;
//         while(consecutive.has(future)) {
//             consecutive.set(future, consecutive.get(future - 1) + 1);

//             max = Math.max(max, consecutive.get(future))
//             future++;
//         }
//     }

    return max;
};