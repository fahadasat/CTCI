/**
 * @param {int []} days
 * @param {int} k
 * @return {int []}
 */

var idealCamping = function (days, k) {
    let idealDays = [];

    if (days.length < 3 || k < 1) return idealDays;

    for (let i = k; i < days.length - k; i++) {
        let leftSide = days.slice(i - k, i + 1);
        let rightSide = days.slice(i, i + k + 1);

        let smaller = checkSmaller(leftSide)
        let larger = checkLarger(rightSide)

        if (smaller && larger) idealDays.push(i + 1);
    }
    return idealDays;
}

function checkSmaller(leftSide) {
    for (let i = 0; i < leftSide.length; i++) {
        if (leftSide[i] < leftSide[i + 1]) return false;
    }
    return true;
}

function checkLarger(rightSide, days, k) {
    for (let i = rightSide.length - 1; i >= 0; i--) {
        if (rightSide[i] < rightSide[i - 1]) return false;
    }
    return true;
}

console.log(idealCamping([3, 2, 2, 2, 3, 4], 2));
console.log(idealCamping([1, 0, 1, 0, 1], 1));
console.log(idealCamping([1, 0, 0, 0, 1], 2));
console.log(idealCamping([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3));