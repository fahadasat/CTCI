/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 261
 */
var validTree = function (n, edges) {
    if (edges.length < 1 && n > 1) return false;
    else if (edges.length < 1) return true;

    let graph = new Map();

    for (let i = 0; i < edges.length; i++) {
        let vertex = graph.get(edges[i][0]) || [];
        vertex.push(edges[i][1]);
        graph.set(edges[i][0], vertex);

        vertex = graph.get(edges[i][1]) || [];
        vertex.push(edges[i][0]);
        graph.set(edges[i][1], vertex);
    }

    // console.log(graph)

    let visited = new Set();
    let nodesVisited = 0;

    function dfs([node, parent] = edges[0]) {
        visited.add(node);
        nodesVisited++;

        let children = graph.get(node) || [];

        for (let i = 0; i < children.length; i++) {
            if (!visited.has(children[i]) && !dfs([children[i], node]))
                return false;
            else if (visited.has(children[i]) && children[i] !== parent)
                return false;
        }

        visited.delete(node);
        return true;
    }

    if (!dfs()) return false;

    if (nodesVisited !== n) return false;

    return true;
};