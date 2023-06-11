// ▪ A function receiving two parameters, e.g. a and b
// ▪ Returns either a positive number, a negative number, or zero
// ▪ If result < 0, a is sorted before b
// ▪ If result > 0, a is sorted after b
// ▪ If result = 0, a and b are equal (no change)
let nums = [20, 40, 10, 30, 100, 5];
nums.sort((a, b) => a-b); // Compare elements as numbers
console.log(nums.join('|')); // 5|10|20|30|40|100