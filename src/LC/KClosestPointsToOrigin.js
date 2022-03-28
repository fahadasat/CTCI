/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {

    if (points.length === k) {
        return points;
    }

    let closest = new Map();
    closest.set(1, []);

    let largestDistance = Math.sqrt(points[0][0] * points[0][0] + points[0][1] * points[0][1]);

    closest.set(1, [points[0]]);

    for (let i = 1; i < points.length; i++) {
        let smallestPoints = closest.get(1);
        let currentDistance = Math.sqrt(points[i][0] * points[i][0] + points[i][1] * points[i][1]);
        if (closest.get(1).length < k) {
            if (currentDistance > largestDistance) {
                largestDistance = currentDistance;
            }
            smallestPoints.push(points[i]);
        } else {
            if (currentDistance < largestDistance) {

                let largestIndex = 0;

                while (Math.sqrt(smallestPoints[largestIndex][0] * smallestPoints[largestIndex][0] +
                    smallestPoints[largestIndex][1] * smallestPoints[largestIndex][1]) !== largestDistance) {
                    largestIndex++;
                }
                smallestPoints.splice(largestIndex, 1);
                smallestPoints.push(points[i]);

                largestDistance = Math.sqrt(smallestPoints[0][0] * smallestPoints[0][0]
                    + smallestPoints[0][1] * smallestPoints[0][1]);
                for (let i = 0; i < smallestPoints.length; i++) {
                    let distance = Math.sqrt(smallestPoints[i][0] * smallestPoints[i][0]
                        + smallestPoints[i][1] * smallestPoints[i][1]);
                    if (distance > largestDistance) {
                        largestDistance = distance
                    }
                }
            }
        }
    }

    return closest.get(1);
};