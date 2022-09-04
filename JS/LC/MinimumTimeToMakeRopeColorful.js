/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 * 1578
 */
var minCost = function (colors, neededTime) {
    let totalCost = 0;

    let count = 0;
    while (count < colors.length - 1) {
        // console.log(colors[count])
        if (colors[count] === colors[count + 1]) {
            [currentCost, removedCount] = makeColorful(count);
            count += removedCount;
            totalCost += currentCost;
            // console.log(currentCost)
        } else {
            count++;
        }
    }

    function makeColorful(index) {
        let totalTime = 0;
        let maxTime = 0;
        let count = 0;
        do {
            totalTime += neededTime[index];
            maxTime = Math.max(maxTime, neededTime[index]);
            index++;
            count++;
        } while (index < colors.length && colors[index - 1] === colors[index])
        return [totalTime - maxTime, count]
    }

    return totalCost;
};