import java.util.Arrays;

public class SortingTest {
    public static void main(String[] args) {
        int[] unsortedArray = {20, 4, 11, 14, 10, 8, 1, 5, 9, 6};

        System.out.println("Unsorted: " + Arrays.toString(unsortedArray));
//        System.out.println("Merge Sort: " + Arrays.toString(mergeSort(unsortedArray)));
//        System.out.println("Quick Sort: " + Arrays.toString(quickSort(unsortedArray, 0, unsortedArray.length - 1)));
//        System.out.println("Bubble Sort: " + Arrays.toString(bubbleSort(unsortedArray)));
//        System.out.println(Arrays.toString(selectionSort(unsortedArray)));

//        System.out.println("Array Position: " + binarySearch(mergeSort(unsortedArray), 20));
    }

    private static String binarySearch(int[] sortedArray, int value) {
        int low = 0;
        int high = sortedArray.length - 1;
        return binarySearchRec(sortedArray, low, high, value);
    }

    private static String binarySearchRec(int[] sortedArray, int low, int high, int value) {
        int med = (low + high) / 2;
        if (value == sortedArray[med]) {
            return String.valueOf(med);
        } else if (value < sortedArray[med]) {
            return String.valueOf(binarySearchRec(sortedArray, low, med, value));
        } else if (value > sortedArray[med]) {
            return String.valueOf(binarySearchRec(sortedArray, med + 1, high, value));
        } else {
            return "Not found";
        }
    }

    private static int[] selectionSort(int[] unsortedArray) {
        int currentIndex = 0;

        while (currentIndex < unsortedArray.length - 1) {
            int smallestIndex = currentIndex;
            for (int i = currentIndex; i < unsortedArray.length; i++) {
                if (unsortedArray[i] < unsortedArray[smallestIndex]) smallestIndex = i;
            }
            swap(unsortedArray, currentIndex, smallestIndex);
            currentIndex++;
        }

        return unsortedArray;
    }

    private static int[] bubbleSort(int[] unsortedArray) {
        int high = unsortedArray.length - 1;
        boolean swapped;
        do {
            swapped = false;
            for (int i = 0; i < high; i++) {
                if (unsortedArray[i] > unsortedArray[i + 1]) {
                    swap(unsortedArray, i, i + 1);
                    swapped = true;
                }
            }
            high--;
        } while (swapped);
        return unsortedArray;
    }

    private static int[] mergeSort(int[] unsortedArray) {
        if (unsortedArray.length <= 1) return unsortedArray;

        int midIndex = unsortedArray.length / 2;

        int[] left = mergeSort(Arrays.copyOfRange(unsortedArray, 0, midIndex));
        int[] right = mergeSort(Arrays.copyOfRange(unsortedArray, midIndex, unsortedArray.length));

        return merge(left, right);
    }

    private static int[] merge(int[] left, int[] right) {
        int[] mergedArray = new int[left.length + right.length];

        int pointerLeft = 0;
        int pointerRight = 0;
        int counter = 0;

        while (pointerLeft < left.length || pointerRight < right.length) {
            if (pointerLeft < left.length && pointerRight < right.length) {
                if (left[pointerLeft] < right[pointerRight]) {
                    mergedArray[counter] = left[pointerLeft];
                    pointerLeft++;
                } else {
                    mergedArray[counter] = right[pointerRight];
                    pointerRight++;
                }
            } else if (pointerLeft < left.length) {
                mergedArray[counter] = left[pointerLeft];
                pointerLeft++;
            } else {
                mergedArray[counter] = right[pointerRight];
                pointerRight++;
            }
            counter++;
        }
        return mergedArray;
    }

    private static int[] quickSort(int[] array, int left, int right) {
        if (left < right) {
            int partitionIndex = partition(array, left, right);

            quickSort(array, left, partitionIndex);
            quickSort(array, partitionIndex + 1, right);

        }
        return array;
    }

    private static int partition(int[] array, int left, int right) {
        int pivot = array[(left + right) / 2];

        while (left < right) {
            while (array[left] < pivot) left++;
            while (array[right] > pivot) right--;

            if (left < right) swap(array, left, right);
        }
        swap(array, left, right);
        return right;
    }

    private static int[] swap(int[] array, int left, int right) {
        int temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        return array;
    }

}
