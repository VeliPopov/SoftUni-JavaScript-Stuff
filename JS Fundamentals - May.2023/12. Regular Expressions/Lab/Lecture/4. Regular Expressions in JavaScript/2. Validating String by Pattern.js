// ▪ The method test(string)
// ▪ Determines whether there is a match

let text = 'Today is 2015-05-11';
let regexp = /\d{4}-\d{2}-\d{2}/g;
let containsValidDate = regexp.test(text);
console.log(containsValidDate); // true
