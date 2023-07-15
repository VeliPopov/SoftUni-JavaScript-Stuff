// ▪ The method replace(regexp, stringReplacement) 
// ▪ Replaces all strings that match the pattern with the provided replacement

let text = 'Peter: 123 Mark: 456';
let replacement = '999';
let regexp = /\d{3}/g;
let result = text.replace(regexp, replacement);
// Peter: 999 Mark: 999