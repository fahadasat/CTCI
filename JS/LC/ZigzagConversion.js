/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// lc 6
var convert = function(s, numRows) {
    if(numRows < 2) return s;

    let count = 0;
    let down = true;
    let output = new Array(numRows).fill("");

    for(let i = 0; i < s.length; i++) {
        output[count] += s[i];

        if(count === 0) {
            down = true;
        } else if(count === numRows - 1){
            down = false;
        }

        if(down) {
            count++;
        } else {
            count--;
        }
    }

    return output.join('');
    // let array2D = Array.from({ length: numRows }, () => Array(s.length - 1).fill(null));

    // let zigZag = false;
    // let row = 0;
    // let col = 0;

    // for(let i = 0; i < s.length; i++) {
    //     if(row === 0)
    //         zigZag = false;
    //     array2D[row][col] = s[i];
    //     if(zigZag) {
    //         row--;
    //         col++;
    //     } else {
    //         if(row + 1 >= numRows) {
    //             zigZag = true;
    //             col++;
    //             row--;
    //         } else {
    //             row++;
    //         }
    //     }
    // }

    // let output = "";
    // for(let j = 0; j < array2D.length; j++){
    //     for(let k = 0; k < array2D[0].length; k++) {
    //         if(array2D[j][k] != null) {
    //             output += array2D[j][k];
    //         }
    //     }
    // }

    // return output;
};