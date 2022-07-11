/**
 * @param {number[]} nums
 * @return {number}
 213
 */
var rob = function (nums) {
    if (nums.length < 2) return nums[0];
    ;

    let housesListOne = nums.slice(0, nums.length - 1);
    let housesListTwo = nums.slice(1, nums.length);

    maxRob(housesListOne);
    maxRob(housesListTwo);

    function maxRob(houseList) {
        for (let i = houseList.length - 1; i >= 0; i--) {
            let futureOne = houseList[i + 1] || 0;
            let futureTwo = houseList[i + 2] || 0;

            houseList[i] = Math.max(houseList[i] + futureTwo, futureOne);
        }
    }

    return Math.max(housesListOne[0] || 0, housesListTwo[0] || 0)
};