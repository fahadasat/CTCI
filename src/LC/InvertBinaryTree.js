/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * lc 226
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {

    postOrder(root);

    return root;
};

function postOrder(root) {
    if (root === null) return;
    swapRec(root)
    postOrder(root.left);
    postOrder(root.right);
}

function swapRec(root) {
    let temp = root.left;

    root.left = root.right;
    root.right = temp;

}