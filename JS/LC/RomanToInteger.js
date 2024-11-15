// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
//     Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
//
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//
//     I can be placed before V (5) and X (10) to make 4 and 9.
//     X can be placed before L (50) and C (100) to make 40 and 90.
//     C can be placed before D (500) and M (1000) to make 400 and 900.
//     Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */
// 13
var romanToInt = function(s) {
    let count = 0;
    let values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900,
    }
    let i = 0;

    while (i < s.length) {
        if (values[s[i] + s[i+1]]) {
            count += values[s[i] + s[i+1]];
            i += 2;
        } else {
            count += values[s[i]];
            i++;
        }
    }

    return count;
};


// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function (s) {
//
//     let number = 0;
//
//     let map = new Map([
//         ['I', 1],
//         ['V', 5],
//         ['X', 10],
//         ['L', 50],
//         ['C', 100],
//         ['D', 500],
//         ['M', 1000],
//     ]);
//
//     for (let i = 0; i < s.length; i++) {
//         try {
//             if (s[i] === "I" && s[i + 1] === "V") {
//                 number += 4;
//                 i++
//             } else if (s[i] === "I" && s[i + 1] === "X") {
//                 number += 9;
//                 i++
//             } else if (s[i] === "X" && s[i + 1] === "L") {
//                 number += 40;
//                 i++
//             } else if (s[i] === "X" && s[i + 1] === "C") {
//                 number += 90;
//                 i++
//             } else if (s[i] === "C" && s[i + 1] === "D") {
//                 number += 400;
//                 i++
//             } else if (s[i] === "C" && s[i + 1] === "M") {
//                 number += 900;
//                 i++
//             } else {
//                 number += map.get(s[i]);
//             }
//         } catch (e) {
//             console.log(e)
//             number += map.get(s[i]);
//         }
//     }
//     return number;
// };
// console.log(romanToInt("MCMXCIV"))
