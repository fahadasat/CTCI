/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 1775
 */
var minOperations = function (nums1, nums2) {
    let ops = 0;

    let smallerPotential = new Map([
        [1, 5],
        [2, 4],
        [3, 3],
        [4, 2],
        [5, 1],
        [6, 0],
        [0, -1]
    ])

    let largerPotential = new Map([
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 4],
        [6, 5],
        [0, -1]
    ])

    let sum1 = nums1.reduce((a, b) => a + b);
    let sum2 = nums2.reduce((a, b) => a + b);
    // console.log(sum1)

    if (sum1 < sum2) {
        nums1.sort((a, b) => {
            return b - a
        });
        nums2.sort((a, b) => {
            return a - b
        });
        if (getOps(nums1, nums2, sum1, sum2)) return ops;
    } else if (sum2 < sum1) {
        nums2.sort((a, b) => {
            return b - a
        });
        nums1.sort((a, b) => {
            return a - b
        });
        if (getOps(nums2, nums1, sum2, sum1)) return ops;
    } else {
        return ops;
    }

    function getOps(smaller, larger, sum2, sum1) {
        while (sum1 !== sum2 && (smaller.length > 0 || larger.length > 0)) {
            let num1 = smaller[smaller.length - 1] || 0;
            let num2 = larger[larger.length - 1] || 0;

            let difference = Math.abs(sum1 - sum2);

            if (smallerPotential.get(num1) >= largerPotential.get(num2)) {
                //work with smaller array
                if (difference > smallerPotential.get(num1)) {
                    sum2 += smallerPotential.get(num1);
                    smaller.pop();
                    ops++;
                } else {
                    sum2 += difference;
                    smaller.pop();
                    ops++;
                }
            } else {
                //work with larger array
                if (difference > largerPotential.get(num2)) {
                    sum1 -= largerPotential.get(num2);
                    larger.pop();
                    ops++;
                } else {
                    sum1 -= difference;
                    larger.pop();
                    ops++;
                }
            }
        }

        if (sum1 === sum2)
            return true;
        return false;
    }


    return -1;
};