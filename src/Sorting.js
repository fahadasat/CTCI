console.log("quick sort", quickSort([20, 4, 11, 14, 10, 8, 1, 5, 9, 6]))

function quickSort(unsortedArray) {
    quickSortRec(unsortedArray, 0, unsortedArray.length - 1);

    return unsortedArray;
}

function quickSortRec(unsortedArray, start, end) {
    if (start >= end) return;

    let pivot = partition(unsortedArray, start, end);

    quickSortRec(unsortedArray, start, pivot - 1);
    quickSortRec(unsortedArray, pivot + 1, end);

}

function partition(unsortedArray, start, end) {
    let partitionIndex = start;
    for (let i = start; i < end; i++) {
        if (unsortedArray[i] <= unsortedArray[end]) {
            let temp = unsortedArray[i];
            unsortedArray[i] = unsortedArray[partitionIndex];
            unsortedArray[partitionIndex] = temp;

            partitionIndex++;
        }
    }

    let temp = unsortedArray[end];
    unsortedArray[end] = unsortedArray[partitionIndex];
    unsortedArray[partitionIndex] = temp;

    return partitionIndex;

}

console.log("merge sort", mergeSortRec([20, 4, 11, 14, 10, 8, 1, 5, 9, 6]))

function mergeSortRec(unsortedArray) {
    if (unsortedArray.length < 2) return unsortedArray;

    let pivot = Math.floor((0 + unsortedArray.length - 1) / 2);
    let leftSide = mergeSortRec(unsortedArray.slice(0, pivot + 1));
    let rightSide = mergeSortRec(unsortedArray.slice(pivot + 1, unsortedArray.length));

    return merge(leftSide, rightSide);
}

function merge(leftSide, rightSide) {
    let merged = [];
    while (leftSide.length > 0 && rightSide.length > 0) {
        if (leftSide[0] < rightSide[0])
            merged.push(leftSide.shift());
        else
            merged.push(rightSide.shift());
    }

    merged.push(...leftSide)
    merged.push(...rightSide)

    return merged;
}

