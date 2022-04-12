/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 39
var combinationSum = function (candidates, target) {

    let currentNumbersToTarget = [];

    function dfs(i, currentNums, totalSum) {
        if (totalSum === target) {
            currentNumbersToTarget.push([...currentNums]);
            return;
        }
        if (i >= candidates.length || totalSum > target) {
            return;
        }

        currentNums.push(candidates[i]);
        dfs(i, currentNums, totalSum + candidates[i]);
        currentNums.pop();
        dfs(i + 1, currentNums, totalSum);
    }

    dfs(0, [], 0);

    return currentNumbersToTarget;
};