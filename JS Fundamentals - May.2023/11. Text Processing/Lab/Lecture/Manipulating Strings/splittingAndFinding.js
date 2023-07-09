// ▪ split(separator)
let text = "I love fruits";
let words = text.split(' ');
console.log(words); // Expected output: ['I', 'love', 'fruits']

// ▪ includes(substr)
let text1 = "I love fruits.";
console.log(text1.includes("fruits")); // Expected output: True
console.log(text1.includes("banana")); // Expected output: False
console.log(text1.includes(" fru")); // Expected output: True
console.log(text1.includes("i love")); // Expected output: False
console.log(text1.toLocaleLowerCase().includes("i love")); // Expected output: true