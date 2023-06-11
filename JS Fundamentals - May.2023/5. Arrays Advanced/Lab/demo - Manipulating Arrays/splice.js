// Splice: Cut and Insert Array Elements
// ▪ The splice() adds/removes items to/from an array, and returns the removed item(s)
// ▪ This function changes the original arra
let nums = [5, 10, 15, 20, 25, 30];
let mid = nums.splice(2, 3); // start, delete-count включително
console.log(mid.join('|')); // 15|20|25
console.log(nums.join('|')); // 5|10|30
nums.splice(3, 2, "twenty", "twenty-five");
console.log(nums.join('|')); // 5|10|15|twenty|twenty-five|30
let negativeSplice = nums.splice(-2, 1);
console.log(negativeSplice); // ['twenty']
