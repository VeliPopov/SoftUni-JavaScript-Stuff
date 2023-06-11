// ▪ The localeCompare() method is used to compare any two characters without regard for the case used
// ▪ It's a string method so it can't be used directly on an array
// ▪ Pass localeCompare() as the comparison function:
let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
words.sort((a, b) => a.localeCompare(b));
console.log(words);
// ['bite', 'Eggs', 'Grip', 'jAw', 'nest']
