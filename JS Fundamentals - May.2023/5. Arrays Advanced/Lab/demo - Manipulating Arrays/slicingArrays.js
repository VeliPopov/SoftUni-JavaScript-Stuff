// The slice() function creates a new array from part of another
// Gets a range of elements from selected start to end (exclusive)
// Note that the original array will not be modified
let myArray = ["one","two","three","four","five"];
let sliced = myArray.slice(2);
let negativeSliced = myArray.slice(-2);
console.log(myArray); // ["one","two","three","four","five"]
console.log(sliced); // ["three","four","five"]
console.log(myArray.slice(2,4)); // ["three","four"]
console.log(negativeSliced); // ["four","five"]