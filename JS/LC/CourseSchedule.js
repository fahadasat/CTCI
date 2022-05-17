/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
//lc 207
var canFinish = function (numCourses, prerequisites) {
    let graphOfCourses = new Map();

    // let toVisit = [];
    let visited = new Set();

    for (let i = 0; i < prerequisites.length; i++) {
        if (!graphOfCourses.has(prerequisites[i][0])) {
            graphOfCourses.set(prerequisites[i][0], [prerequisites[i][1]]);
        } else {
            graphOfCourses.get(prerequisites[i][0]).push(prerequisites[i][1]);
        }
    }


    function dfs(currentCourse) {
        if (visited.has(currentCourse)) return false;
        if (!graphOfCourses.has(currentCourse)) return true;
        visited.add(currentCourse);

        let currentCoursePreReq = graphOfCourses.get(currentCourse);
        for (let i = 0; i < currentCoursePreReq.length; i++) {
            if (!dfs(currentCoursePreReq[i])) return false;
        }

        graphOfCourses.delete(currentCourse);
        visited.delete(currentCourse);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
};