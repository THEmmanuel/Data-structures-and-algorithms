// There are times where two competing algorithms may be described in exactly the same way using Big O Notation, yet
// one algorithm is significantly faster than the other.

// Outer loop that represents each passthrough of Selection sort
const selectionSort = array => {
    for (let i = 0; i < array.length; i++) {
        //Index containing the lowest value we encounter so far.
        //Sets lowestNumberIndex to be whatever index i represents.
        let lowestNumberIndex = i;
        // we’re actually tracking the index of the lowest number instead of the actual number itself

        // kicks off an inner for loop that starts at i + 1
        for (let j = 0; j < array.length; j++) {
            // checks each element of the array that has not yet been sorted and looks for the lowest number. It does this by keeping track of the index of the lowest number it found so far in the lowestNumberIndex variable
            if (array[j] < array[lowestNumberIndex]) {
                lowestNumberIndex = j;
            }

            // By the end of the inner loop, we’ve determined the index of the lowest number not yet sorted.

            if (lowestNumberIndex != i) {
                let temp = array[i];
                array[i] = array[lowestNumberIndex];
                array[lowestNumberIndex] = temp
            }
        }
    }
    return array;
}