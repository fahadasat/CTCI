/**
 * @param {number[]} height
 * @return {number}
 11
 */
var maxArea = function (height) {
    let max = 0;

    let leftPointer = 0;
    let rightPointer = height.length - 1;

    while (leftPointer < rightPointer) {
        max = Math.max(max, Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer));

        height[leftPointer] > height[rightPointer] ? rightPointer-- : leftPointer++;
    }

    return max;
};