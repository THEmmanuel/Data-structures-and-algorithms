const inputArray = [10, 8, 45, 2, 36, 1];
// create input array
const bubbleSort = array => {
    // temporary value for checking the array elements.
    let temp = null;
    // keep track if the array is fully sorted or not.
    let isSorted = false;
    //keep track of which index is unsorted.
    //There's an unsorted array at the start.
    const unsortedIndex = array.length - 1;

    // While loop that runs as long as the array is not sorted.
    while (!isSorted) {
        isSorted = true
        //start sorting.
        // for loop that compares each pair of values at adjacent indices. Swap if the are not in order.
        for (let index = 0; index < unsortedIndex; index++) {
            if (array[index] > array[index + 1]) {
                //Change isSorted to false. To indicate value swapping.
                isSorted = false;
                // Update temporay value to keep track.
                //Swap values.
                temp = array[index];
                array[index] = array[index + 1];
                array[index + 1] = temp;
            };
        };
    };
};

bubbleSort(inputArray);
console.log(inputArray)