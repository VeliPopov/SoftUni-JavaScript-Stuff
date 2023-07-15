// ▪ The method split(regexp)
// ▪ Splits the text by the pattern
// ▪ Returns an array of strings

let text = '1 2 3 4';
let regexp = /\s+/g;
let result = text.split(regexp);
console.log(result) // ['1', '2', '3', '4'];