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
 * @return {number[][]}
 */
var findLeaves = function (root) {
    let allLeaves = [];

    findLeaves();

    function findLeaves(node = root) {
        // console.log(node.val);

        if (node == null) return -1;

        let currentHeight = Math.max(findLeaves(node.left), findLeaves(node.right)) + 1;

        if (allLeaves[currentHeight] == null) {
            allLeaves[currentHeight] = [node.val];
        } else {
            allLeaves[currentHeight].push(node.val);
        }

        return currentHeight;
    }

    return allLeaves;

};