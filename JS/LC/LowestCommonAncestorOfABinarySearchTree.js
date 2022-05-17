/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 235

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    while (root !== null) {
        if (p.val === root.val || q.val === root.val)
            return root;
        else if (p.val < root.val && q.val > root.val || p.val > root.val && q.val < root.val)
            return root;
        else if (q.val < root.val)
            root = root.left;
        else if (q.val > root.val)
            root = root.right;
    }
    return output;
};