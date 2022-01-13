const inputArray = [11, 5, 15, 25, 88];

const linearSearch = (array, value) => {
    //First sort the array, since linear search works with ordered arrays;
    array.sort((a, b) => a - b)

    //Iterate through array elements;
    for (let index = 0; index < array.length; index++) {
        //Return the elemet if the value is found;
        if (array[index] == value) {
            return value;
        }
        //exit the loop if we reach an element than greater than the value;
        else if (array[index] > value) {
            break;
        }
    }

    //Return the array if the value is not found.
    return inputArray;
};

console.log(linearSearch(inputArray, 75))