/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 1152
 */
var mostVisitedPattern = function (username, timestamp, website) {

    let entries = timestamp.map((values, index) => {
        return [username[index], timestamp[index], website[index]];
    }).sort((a, b) => a[1] - b[1]);

    let entriesByUser = new Map();

    entries.forEach((value, key) => {
        if (!entriesByUser.get(value[0])) entriesByUser.set(value[0], []);
        entriesByUser.get(value[0]).push(value[2]);
    });

//     let visited = new Map();

//     entriesByUser.forEach((value, key) => {
//         for(let i = 0; i < value.length - 2; i++) {
//             let string = `${value[i]} ${value[i + 1]} ${value[i + 2]}`;
//             if(!visited.get(string)) visited.set(string, 1);
//             else visited.set(string, visited.get(string) + 1);
//         }
//     });

//     let max = [];

//     visited.forEach((key, value) => {
//         if(!max[key]) max[key] = [];
//         max[key].push(value);
//     })

//     if(max[max.length - 1].length === 1)
//         return max[max.length - 1][0].split(" ");


//     console.log(max[max.length - 1]);

//     max[max.length - 1].sort()

//     console.log(max[max.length - 1]);

//     return max[max.length - 1][0].split(" ");

    const seq = {};
    let max = ['', 0];

    // get all possible 3-sequences for each user and increment the count of each sequence in seq
    // O(n ^ 3)
    entriesByUser.forEach((value, key) => {
        const seqByUsers = {};

        for (let i = 0; i < value.length - 2; i++) {
            for (let j = i + 1; j < value.length - 1; j++) {
                for (let k = j + 1; k < value.length; k++) {
                    const key = `${value[i]}|${value[j]}|${value[k]}`;
                    if (!seqByUsers[key]) seqByUsers[key] = 1;
                }
            }
        }

        Object.keys(seqByUsers).forEach(seqByUser => {
            if (!seq[seqByUser]) seq[seqByUser] = 0;
            seq[seqByUser] += 1;

            if (
                (
                    seq[seqByUser] === max[1] &&
                    seqByUser.split('|').join(' ') < max[0].split('|').join(' ')
                )
                ||
                seq[seqByUser] > max[1]
            ) {
                max[0] = seqByUser;
                max[1] = seq[seqByUser];
            }
        });
    });
    console.log(entriesByUser)
    return max[0].split('|');
};