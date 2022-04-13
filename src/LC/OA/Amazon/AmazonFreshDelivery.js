/**
 * @param {int [][]} area
 * @return {int}
 */

var fastestRoute = function (area) {
    let currentRoute = Infinity;

    function dfs(cords, currentDistance) {

        currentDistance++;
        // console.log(cords)
        if (area[cords[0]][cords[1]] === 9) {
            if (currentDistance < currentRoute)
                currentRoute = currentDistance;
            return;
        }
        area[cords[0]][cords[1]] = 0;
        //check top
        try {
            if (area[cords[0] - 1][cords[1]] === 1 || area[cords[0] - 1][cords[1]] === 9) {
                // console.log("top");
                dfs([cords[0] - 1, cords[1]], currentDistance);
            }
        } catch (e) {
        }
        //check bottom
        try {
            if (area[cords[0] + 1][cords[1]] === 1 || area[cords[0] + 1][cords[1]] === 9) {
                // console.log("bottom");
                dfs([cords[0] + 1, cords[1]], currentDistance);
            }
        } catch (e) {
        }
        //check left
        try {
            if (area[cords[0]][cords[1] - 1] === 1 || area[cords[0]][cords[1] - 1] === 9) {
                // console.log("left");
                dfs([cords[0], cords[1] - 1], currentDistance)
            }
        } catch (e) {
        }
        //check right
        try {
            if (area[cords[0]][cords[1] + 1] === 1 || area[cords[0]][cords[1] + 1] === 9) {
                // console.log("right");
                dfs([cords[0], cords[1] + 1], currentDistance);
            }
        } catch (e) {
        }
        currentDistance--;
        area[cords[0]][cords[1]] = 1;
    }

    dfs([0, 0], -1);

    if (currentRoute === Infinity) return -1;
    else return currentRoute;
}

console.log(fastestRoute(
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 0, 9]
    ]
))