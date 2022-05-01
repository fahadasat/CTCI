/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 833
 */
var findReplaceString = function (s, indices, sources, targets) {
    let inputs = [];

    for (let i = 0; i < indices.length; i++) {
        inputs.push({
            "indices": indices[i],
            "sources": sources[i],
            "targets": targets[i]
        })
    }

    // console.log(inputs)

    inputs.sort((a, b) => {
        return a.indices - b.indices;
    })
    // console.log(inputs)

    let offset = 0;

    for (let i = 0; i < inputs.length; i++) {
        // console.log(inputs[i])
        let substring = s.slice(inputs[i].indices + offset, inputs[i].sources.length + inputs[i].indices + offset);
        // console.log(substring)
        if (substring === inputs[i].sources) {

            s = replaceBetween(s, inputs[i].indices + offset, inputs[i].sources.length + inputs[i].indices + offset, inputs[i].targets)
            // s = s.replace(inputs[i].sources, inputs[i].targets)

            offset += inputs[i].targets.length - inputs[i].sources.length;
        }
    }

    function replaceBetween(origin, startIndex, endIndex, insertion) {
        return origin.substring(0, startIndex) + insertion + origin.substring(endIndex);
    }

    return s;
};