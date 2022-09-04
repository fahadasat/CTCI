/**
 * @param {string[]} names
 * @return {string[]}
 1487
 */
var getFolderNames = function (names) {
    let currentNames = new Set();

    let output = [];

    for (let i = 0; i < names.length; i++) {
        if (currentNames.has(names[i])) {
            let count = 1;
            let name = names[i];
            while (currentNames.has(`${name}(${count})`)) {
                count++;
            }
            name = `${name}(${count})`;
            currentNames.add(name)
            // console.log(name)
            output.push(name)
        } else {
            currentNames.add(names[i]);
            output.push(names[i]);
        }
    }

    return output;
};