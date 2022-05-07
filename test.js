console.log("quick sort", quickSort([20, 4, 11, 14, 10, 8, 1, 5, 9, 6]))

function quickSort(unsortedArray) {
    quickSortRec(unsortedArray, 0, unsortedArray.length - 1);
    return unsortedArray;
}

function quickSortRec(unsortedArray, start, end) {
    if (start >= end) return;
    let pivot = partition(unsortedArray, start, end);
    quickSortRec(unsortedArray, start, pivot - 1)
    quickSortRec(unsortedArray, pivot + 1, end)

}

function partition(unsortedArray, start, end) {
    let index = start;

    for (let i = start; i < end; i++) {
        if (unsortedArray[i] <= unsortedArray[end]) {
            [unsortedArray[i], unsortedArray[index]] = [unsortedArray[index], unsortedArray[i]]
            index++;
        }
    }
    [unsortedArray[end], unsortedArray[index]] = [unsortedArray[index], unsortedArray[end]]

    return index;
}


console.log("merge sort", mergeSort([4, 1, 5, 6, 10, 8, 20, 11, 9, 14]))

function mergeSort(unsortedArray) {
    if (unsortedArray.length < 2) return unsortedArray;

    let pivot = Math.floor((unsortedArray.length - 1) / 2)

    let left = mergeSort(unsortedArray.slice(0, pivot + 1))
    let right = mergeSort(unsortedArray.slice(pivot + 1, unsortedArray.length))

    return merge(left, right);

}

function merge(left, right) {
    let output = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0])
            output.push(left.shift());
        else
            output.push(right.shift());
    }

    output.push(...left);
    output.push(...right);

    return output;
}

//ben awad and clement medium google interview video question
// function removeIslands(matrix) {
//     // let edges = {};
//     let edges = new Map();
//
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             if (matrix[i][j] === 0) continue;
//
//             let connectedToEdge = edges.get(i) || new Set();
//
//
//             //check if index is in edges
//             if (!connectedToEdge.has(j)) {
//                 //if its isnt then check if the row or col is an edge
//                 if (i === 0 || i === matrix.length - 1 || j === 0 || j === matrix[0].length - 1) {
//                     //if it is, add to edges and continue
//                     connectedToEdge.add(j);
//                     edges.set(i, connectedToEdge);
//                     // console.log(edges)
//                 } else {
//                     //if it isnt then dfs to see if this index is connected to an edge
//                     if (dfs([i, j], new Map())) {
//                         //if it returned true then continue
//                         continue;
//                     }
//                     //if it isn't then set to zero
//                     matrix[i][j] = 0;
//                 }
//
//             }
//             //if it is then continue
//         }
//     }
//
//     // console.log(edges)
//
//     function dfs([row, col], visited) {
//         let visitedList = visited.get(row) || new Set();
//         visitedList.add(col);
//         visited.set(row, visitedList);
//
//         //if index is an edge, add to edges, return true;
//         let connectedToEdge = edges.get(row) || new Set();
//         if (connectedToEdge.has(col) || row === 0 || row === matrix.length - 1 || col === 0 || col === matrix[0].length - 1) {
//             connectedToEdge.add(col);
//             edges.set(row, connectedToEdge);
//             return true;
//         }
//
//
//         //check top if it is a one
//         let topTemp = visited.get(row - 1) || new Set();
//         if (row - 1 >= 0 && matrix[row - 1][col] === 1 && !topTemp.has(col)) {
//             if (dfs([row - 1, col], visited)) {
//                 //dfs top, if true return true
//                 return true;
//             }
//         }
//
//         //check if bottom is a one
//         let bottomTemp = visited.get(row + 1) || new Set();
//         if (row + 1 < matrix.length && matrix[row + 1][col] === 1 && !bottomTemp.has(col)) {
//             if (dfs([row + 1, col], visited)) {
//                 //dfs bottom, if true return true
//                 return true;
//             }
//         }
//
//         //check left if it is a one
//         let sideTemp = visited.get(row) || new Set();
//         if (col - 1 >= 0 && matrix[row][col - 1] === 1 && !sideTemp.has(col - 1)) {
//             if (dfs([row, col - 1], visited)) {
//                 //dfs left, if true return true
//                 return true;
//             }
//         }
//
//         //check if right is a one
//         if (col + 1 < matrix[0].length && matrix[row][col + 1] === 1 && !sideTemp.has(col + 1)) {
//             if (dfs([row, col + 1], visited)) {
//                 //dfs right, if true return true
//                 return true;
//             }
//         }
//
//         return false;
//     }
//
//     return matrix;
// }
//
//
// console.log(removeIslands(
//     [[1, 0, 0, 0, 0, 0],
//         [0, 1, 0, 1, 1, 1],
//         [0, 0, 1, 0, 1, 0],
//         [1, 1, 0, 0, 1, 0],
//         [1, 0, 1, 1, 0, 0],
//         [1, 0, 0, 0, 0, 1]]
// ))

// {
//     let a = 524532;
//     let b = 3232;
//
//     a = a ^ b;
//     b = b ^ a;
//     a = b ^ a;
//
//     console.log(a, b)
// }
