/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//lc 102
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let levelOrder = [];

    if (root === null) return levelOrder;

    let toVisitQueue = [];

    let currentLevel = []
    toVisitQueue.push(root);

    while (toVisitQueue.length > 0) {
        currentLevel = [];
        for (let i = 0; i < toVisitQueue.length; i++)
            currentLevel.push(toVisitQueue[i].val);
        levelOrder.push(currentLevel);

        let currentLevelNodeCount = toVisitQueue.length;
        for (let i = 0; i < currentLevelNodeCount; i++) {
            let currentNode = toVisitQueue.shift();
            if (currentNode.left) {
                toVisitQueue.push(currentNode.left);
            }
            if (currentNode.right) {
                toVisitQueue.push(currentNode.right);
            }
        }
    }
    return levelOrder;

};