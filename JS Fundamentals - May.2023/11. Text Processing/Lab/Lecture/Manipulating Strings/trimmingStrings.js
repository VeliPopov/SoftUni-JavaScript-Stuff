// ▪ Use trim() method to remove whitespaces (spaces, tabs, no-break space, etc. ) from both ends of a string
let text = " Annoying spaces ";
console.log(text.trim()); // Expected output: "Annoying spaces"

// ▪ Use trimStart() or trimEnd() to remove whitespaces only at the beginning or at the end
let text1 = " Annoying spaces ";
text1 = text1.trimStart(); text1 = text1.trimEnd();
console.log(text1); // Expected output: "Annoying spaces"
