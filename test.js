// console.log("quick sort", quickSort([20, 4, 11, 14, 10, 8, 1, 5, 9, 6]))
//
// function quickSort(unsortedArray) {
//     quickSortRec(unsortedArray, 0, unsortedArray.length - 1);
//     return unsortedArray;
// }
//
// function quickSortRec(array, start, end) {
//     if (start >= end) return;
//
//     let pivot = partition(array, start, end);
//
//     //call quicksort for the array left of the partition
//     quickSortRec(array, start, pivot - 1);
//     //call quicksort for the array right of the partition
//     quickSortRec(array, pivot + 1, end);
// }
//
// function partition(array, start, end) {
//     // console.log(start, end)
//     let swapIndex = start;
//
//     for (let i = start; i < end; i++) {
//         if (array[i] < array[end]) {
//             let temp = array[swapIndex];
//             array[swapIndex] = array[i];
//             array[i] = temp;
//             swapIndex++;
//         }
//     }
//     let temp = array[swapIndex];
//     array[swapIndex] = array[end];
//     array[end] = temp;
//
//     return swapIndex;
// }
//
// console.log("merge sort", mergeSortRec([20, 4, 11, 14, 10, 8, 1, 5, 9, 6]))
//
// function mergeSortRec(unsortedArray) {
//     // console.log(unsortedArray)
//     if (unsortedArray.length < 2) return unsortedArray;
//
//     let pivot = Math.floor((unsortedArray.length - 1) / 2);
//
//     let left = mergeSortRec(unsortedArray.slice(0, pivot + 1));
//     let right = mergeSortRec(unsortedArray.slice(pivot + 1, unsortedArray.length));
//
//     return merge(left, right);
// }
//
// function merge(left, right) {
//     let merged = [];
//     while (left.length > 0 && right.length > 0) {
//         if (left[0] < right[0]) merged.push(left.shift());
//         else merged.push(right.shift());
//     }
//
//     merged.push(...left);
//     merged.push(...right);
//
//     return merged;
// }

