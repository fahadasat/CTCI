/**
 * @param {number[]} height
 * @return {number}
 */
// 42
var trap = function(height) {

    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l];
    let rightMax = height[r];

    let result = 0;

    while(l < r) {
        if(leftMax < rightMax) {
            l++;
            leftMax = Math.max(leftMax, height[l]);
            result += Math.max(0, leftMax - height[l]);
        } else {
            r--;
            rightMax = Math.max(rightMax, height[r]);
            result += Math.max(0, rightMax - height[r]);
        }
    }

    return result;
};