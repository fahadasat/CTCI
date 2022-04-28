/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 2096
 */
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {

    let directions = "";

    let graph = new Map();

    let toVisit = [root];

    while (toVisit.length > 0) {
        let currentNode = toVisit.shift();
        if (currentNode == null) continue;
        if (currentNode.left != null) {
            let currentEdges = graph.get(currentNode.val) || [];
            currentEdges.push(["L", currentNode.left.val]);
            graph.set(currentNode.val, currentEdges);

            let childrenEdges = graph.get(currentNode.left.val) || [];
            childrenEdges.push(["U", currentNode.val]);
            graph.set(currentNode.left.val, childrenEdges);

        }

        toVisit.push(currentNode.left)

        if (currentNode.right != null) {
            let currentEdges = graph.get(currentNode.val) || [];
            currentEdges.push(["R", currentNode.right.val]);
            graph.set(currentNode.val, currentEdges);

            let childrenEdges = graph.get(currentNode.right.val) || [];
            childrenEdges.push(["U", currentNode.val]);
            graph.set(currentNode.right.val, childrenEdges);

            toVisit.push(currentNode.right)
        }
    }

    let visited = new Set();
    toVisit = [["", startValue]];

    while (toVisit.length > 0) {
        let currentNode = toVisit.shift();
        let currentValue = currentNode[1];
        let currentPath = currentNode[0];

        if (currentValue === destValue) return currentPath;
        if (visited.has(currentNode)) continue;

        visited.add(currentValue);

        let edges = graph.get(currentValue);

        for (let i = 0; i < edges.length; i++) {
            toVisit.push([currentPath + edges[i][0], edges[i][1]])
        }
    }


    return directions;
};