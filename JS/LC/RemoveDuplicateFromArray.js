// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//
//     Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
//
//     Return k after placing the final result in the first k slots of nums.
//
//     Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
//
//     Custom Judge:
//
//     The judge will test your solution with the following code:
//
//     int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length
//
// int k = removeDuplicates(nums); // Calls your implementation
//
// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.
//
//
//
//     Example 1:
//
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
//     It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:
//
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
//     It does not matter what you leave beyond the returned k (hence they are underscores).
//
//
// Constraints:
//
//     1 <= nums.length <= 3 * 104
//     -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    //two pointers
    //pointer 1 = index 0
    //pointer 2 = index 1

    //loop through the array
    //if same
    //increment pointer 2
    //if not same
    //index pointer 1 + 1 = index pointer 2
    //increment both pointers

    //return pointer 1 + 1

    let pointerOne = 0;
    let pointerTwo = 1;

    while (pointerTwo < nums.length) {
        if (nums[pointerOne] !== nums[pointerTwo]) {
            nums[pointerOne + 1] = nums[pointerTwo]
            pointerOne++;
        }
        pointerTwo++;
    }

    console.log(nums)
    console.log(pointerOne + 1)
    return pointerOne + 1;
};

removeDuplicates([1, 1, 2])