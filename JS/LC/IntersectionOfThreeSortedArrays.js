/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
// 1213
var arraysIntersection = function(arr1, arr2, arr3) {
    let output = [];

    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    while(index1 < arr1.length && index2 < arr2.length && index3 < arr3.length) {
        if(arr1[index1] === arr2[index2] && arr1[index1] === arr3[index3]) {
            output.push(arr1[index1]);
            index1++;
            index2++;
            index3++;
            continue;
        }

        let max = Math.max(arr1[index1], arr2[index2], arr3[index3]);
        if(arr1[index1] < max) {
            index1++;
        }
        if(arr2[index2] < max) {
            index2++;
        }
        if(arr3[index3] < max) {
            index3++;
        }
    }

    return output;
};