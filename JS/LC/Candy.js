/**
 * @param {number[]} ratings
 * @return {number}
 */
// 135
var candy = function(ratings) {

    let output = [];

    for(let i = 0; i < ratings.length; i++) {
        if(ratings[i] > ratings[i - 1]) {
            output[i] = output[i - 1] + 1;
        } else {
            output[i] = 1;
        }
    }

    for(let i = ratings.length - 1; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            output[i] = Math.max(output[i], output[i + 1] + 1);
        }
    }

    // console.log(output)
    let sum = 0;
    output.forEach(val => {
        sum += val;
    })
    return sum;
};