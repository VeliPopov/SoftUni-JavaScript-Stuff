// ▪ filter() – creates a new array from elements matching predicate
// ▪ Predicate is a function returning a Boolean value (true or false)
let myArr = ['one', 'two', 'three', 'four'];
let longWords = myArr.filter(x => x.length > 3);
console.log(longWords); // ['three','four']

let nums = [5, -11, 3, -2, 8]
let positiveNums = nums.filter(x => x > 0);
console.log(positiveNums); // [5, 3, 8]