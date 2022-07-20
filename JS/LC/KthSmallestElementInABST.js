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
 * @param {number} k
 * @return {number}
 230
 */
var kthSmallest = function (root, k) {

    let smallest = [];

    function inOrder(node = root) {
        if (!node) return;

        if (inOrder(node.left)) return true;
        smallest.push(node.val)
        if (k === smallest.length)
            return true;
        // console.log(node.val);
        if (inOrder(node.right)) return true;

        return;
    }

    inOrder();

    // console.log(smallest)

    return smallest[smallest.length - 1]
};