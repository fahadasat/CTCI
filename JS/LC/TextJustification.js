/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
// 68
var fullJustify = function(words, maxWidth) {
    let output = [];

    let currentCount = words[0].length;
    let spaceCount = 1;
    let l = 0;

    for(let i = 1; i < words.length; i++) {
        if(currentCount + spaceCount + words[i].length <= maxWidth) {
            currentCount += words[i].length;
            spaceCount++;
        } else {
            let string = "";
            let totalSpaces = maxWidth - currentCount;
            let filledSpaces = Math.floor(totalSpaces / (i - 1 - l));
            if(filledSpaces === Infinity) {
                string += words[l].padEnd(maxWidth);
            } else {
                let spaces = " ".repeat(filledSpaces);
                let remainder = totalSpaces % (i - 1 - l);

                for(let j = l; j < i - 1; j++) {
                    string += words[j] + spaces;
                    if(remainder > 0) {
                        string += " ";
                        remainder--;
                    }
                }
                string += words[i - 1];
            }

            output.push(string);

            currentCount = words[i].length;
            spaceCount = 1;
            l = i;
        }
    }
    let string = words.join(l, );
    for(let j = l; j < words.length - 1; j++) {
        string += words[j] + " ";
    }
    string += words[words.length - 1];
    output.push(string.padEnd(maxWidth));

    return output;
};