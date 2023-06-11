// map() – creates a new array by applying a function to every element
let myArr = ['one', 'two', 'three', 'four'];
let lengths = myArr.map(x => x.length);
console.log(lengths); // [3,3,5,4]

let numsAsStrings = ["5","3","14","-2","8"];
let nums = numsAsStrings.map(Number);
console.log(nums); // [5, 3, 14, -2, 8]
let incr = nums.map(x => x+1);
console.log(incr); // [6, 4, 15, -1, 9]

