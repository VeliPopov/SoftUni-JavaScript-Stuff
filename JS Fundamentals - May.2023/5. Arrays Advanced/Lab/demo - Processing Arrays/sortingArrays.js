// ▪ The sort() function sorts the items of an array
// ▪ Depending on the provided compare function, sorting can be alphabetic or numeric, and either ascending (up) or descending (down)
// ▪ By default, the sort() function sorts the values as strings in alphabetical and ascending order
// ▪ If you want to sort numbers or other values, you need to provide the correct compare function!

let names = ["Peter","George","Mary"];
names.sort(); // Default behaviour – alphabetical order
console.log(names); // ["George","Mary","Peter"]

let numbers = [20, 40, 10, 30, 100, 5];
numbers.sort(); // Unexpected result on arrays of numbers!
console.log(numbers); // [10,100,20,30,40,5]