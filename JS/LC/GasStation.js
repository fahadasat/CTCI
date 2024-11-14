/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// lc 134
var canCompleteCircuit = function(gas, cost) {

    let currentGas = 0;
    let totalGasNeeded = 0;
    let index = 0;

    for(let i = 0 ; i < gas.length; i++) {

        currentGas += gas[i] - cost[i];
        totalGasNeeded += gas[i] - cost[i];

        if(currentGas < 0) {
            currentGas = 0;
            index = i + 1;
        }
    }

    return totalGasNeeded >= 0 ? index : -1;













    // let needed = 0;
    // let returnGas;

    // let checkIndexRec = (startIndex) => {
    //     return checkIndex(startIndex, startIndex, 0);
    // }

    // let checkIndex = (startIndex, currentIndex, currentGas) => {
    //     currentGas += gas[currentIndex] - cost[currentIndex];
    //     if (currentGas < 0) {
    //         return -1;
    //     }
    //     let nextIndex = currentIndex + 1;
    //     if(nextIndex === gas.length) {
    //         nextIndex = 0;
    //     }

    //     if(nextIndex === startIndex) {
    //         return currentGas;
    //     }

    //     return checkIndex(startIndex, nextIndex, currentGas);
    // }

    // index = -1;
    // for (let i  = 0; i < gas.length; i++) {
    //     if(gas[i] === 0 && cost[i] === 0) {
    //         continue;
    //     }
    //     returnGas = checkIndexRec(i);
    //     if(returnGas >= 0) {
    //         index = i;
    //         break;
    //     }
    // }

    // return index;
};