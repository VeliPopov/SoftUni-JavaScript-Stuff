// ▪ Arrays indexed by string keys
// ▪ Hold a set of pairs [key => value]
//    ▪ The key is a string
//    ▪ The value can be of any type


// An associative array in JavaScript is just an object
// We can declare it dynamicall

let assocArr = {
    'one': 1,
    'two': 2,
    'three': 3,
    [key]: 6
};
// Quotes are used if the key ontains special characters

assocArr['four'] = 4;
assocArr.five = 5;
let key = 'six';
assocArr[key] = 6;
// Valid ways to access values through keys

