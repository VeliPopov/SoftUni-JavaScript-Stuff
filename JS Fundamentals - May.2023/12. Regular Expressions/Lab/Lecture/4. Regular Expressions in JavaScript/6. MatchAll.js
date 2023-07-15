// ▪ The method matchAll(regexp)
// ▪ returns an iterator of all results matching a string against a regular expression, including capturing groups

const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];
console.log(array[0]);
// ['test1', 'e', 'st1', '1', index: 0, input:'test1test2', length: 4]
