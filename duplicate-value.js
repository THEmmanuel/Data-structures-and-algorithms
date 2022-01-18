const inputArray = [3, 5, 8, 7, 9];

// const hasDuplicateValue = array => {
//     let steps = 0
//     //iterate through each array element
//     for (let i = 0; i < array.length; i++) {
//         //check through all array elements.
//         for (let j = 0; j < array.length; j++) {
//             // check if the elements at i and j are the same
//             steps++;
//             if (i !== j && array[i] == array[j]) {
//                 return true;
//             };
//         };
//     };
//     console.log(steps);
//     return false;
// };
// O(n^2) Quadratic time.

const hasDuplicateValue = array => {
    // keep track of steps.
    let steps = 0;
    // keep track of existing numbers encountered already.
    // Store the value  inside the index of the existingNumbers[] correspondng to that number
    const existingNumbers = [];
    // Check to see whether the index already has 1 as it's value.
    for (let i = 0; i < array.length; i++) {
        steps++
        if (existingNumbers[array[i]] === undefined) {
            existingNumbers[array[i]] = 1;
            console.log(array[i])
        } else {
            return true;
        };
    };
    console.log(steps + ' steps')
    // steps is the same number of elements in the array.
    console.log(existingNumbers)
    return false;
};
// O(n) linear time.

hasDuplicateValue(inputArray);

// Having a solid understanding of Big O Notation can allow us to
// identify slow code and select the faster of two competing algorithms.

// However, there are situations in which Big O Notation will have us believe that two
// algorithms have the same speed, while one is actually faster.