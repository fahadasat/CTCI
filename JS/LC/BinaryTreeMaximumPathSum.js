/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 124
 */
var maxPathSum = function (root) {
    let max = root.val;

    let potentialMax = new Map();

    function dfs(node = root) {
        let left = 0;
        if (node.left) {
            dfs(node.left);
            left = potentialMax.get(node.left.val);
        }

        let right = 0;
        if (node.right) {
            dfs(node.right);
            right = potentialMax.get(node.right.val);
        }


        let combinedMax = Math.max(node.val, node.val + left, node.val + right);
        potentialMax.set(node.val, combinedMax);
        max = Math.max(max, combinedMax, node.val + left + right);
    }

    dfs();

    // console.log(max)
    return max;
};