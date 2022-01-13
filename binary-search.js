const inputArray = [11, 5, 15, 25, 88]

const binarySearch = (array, value) => {
    array.sort((a, b) => a - b)
    //First sort the array...

    //Establish the starting point for the search.
    //In this context it's the first index in the array. array[0]
    lowerIndex = 0;
    //The upper index is the last value in the array.
    upperIndex = array.length - 1;

    //Loop checking the midpoint between the upper index and lower index
    while (lowerIndex <= upperIndex) {
        //Find the midpoint between the upper and lower indices.
        //Round them up since the value will be a non-integer. A decimal number.
        midIndex = Math.round((upperIndex + lowerIndex) / 2);
        //Check the value at the array's middle index.
        midValue = array[midIndex];
        //Change the upper index and the lower index if we need to go higher or lower.
        if (value < midValue) {
            upperIndex = midIndex - 1;
        } else if (value > midValue) {
            lowerIndex = midIndex + 1;
            //Return the middle value if it's what we're looking.
        } else if (value === midValue) {
            return midValue;
        }
    }
    //Return the array if the the value is not found.
    return array
};

console.log(binarySearch(inputArray, 25))