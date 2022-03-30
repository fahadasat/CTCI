/**
 * @param {int []} weights
 * @return {int []}
 */

var optimumWeights = function (weights) {
    if (weights.length < 2) return weights;

    let index = 1;

    while (index < weights.length) {
        if (weights[index] > weights[index - 1]) {
            if (!weights?.[index + 1] || weights[index + 1] < weights[index]) {
                weights[index - 1] = weights[index - 1] + weights[index]
                weights.splice(index, 1);
                index--;
            } else
                index++;
        } else
            index++;
    }
    return weights;
}

console.log(optimumWeights([2, 9, 10, 3, 7]))