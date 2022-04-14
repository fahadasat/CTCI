/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 104
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let maxDepth = 0;

    if (root == null) return maxDepth;

    function dfs(head, currentDepth) {
        if (head == null) return;
        currentDepth++;
        if (currentDepth > maxDepth) {
            maxDepth = currentDepth;
        }

        if (head.left) {
            dfs(head.left, currentDepth);
        }
        if (head.right) {
            dfs(head.right, currentDepth);
        }
    }

    dfs(root, 0);

    return maxDepth;
};