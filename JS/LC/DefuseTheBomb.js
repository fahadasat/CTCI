/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
// 1652
var decrypt = function(code, k) {
    if(k === 0) return Array(code.length).fill(0);
    let output = [];

    let left = (k < 0) ? code.length + k : 1;
    let right = left + Math.abs(k) - 1;

    let count = 0;

    for(let i = left; i <= right; i++) {
        count += code[i];
    }
    output.push(count);
    while(output.length < code.length) {
        count -= code[left];

        left++;
        right++;
        if(left >= code.length) {
            left = 0;
        }
        if(right >= code.length) {
            right = 0;
        }
        count += code [right];
        output.push(count);
    }

    return output;
};