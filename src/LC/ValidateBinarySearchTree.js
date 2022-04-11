/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 98
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

    let isBST = true;
    let min = -Math.Infinity;

    inOrder(root);

    function inOrder(head) {
        if (!isBST) return;
        if (head != null) {
            inOrder(head.left);
            console.log(head.val);
            if (head.val <= min) {
                isBST = false;
                return;
            }
            min = head.val;
            inOrder(head.right);
        }
    }

    return isBST;
};