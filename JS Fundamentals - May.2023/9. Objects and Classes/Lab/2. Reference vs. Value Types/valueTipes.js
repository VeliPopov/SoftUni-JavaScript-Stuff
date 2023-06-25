// ▪ If a primitive type is assigned to a variable, we can think of that variable as containing the primitive value

let a = 10; let c = a;
let b = 'abc'; let d = b;

// ▪ They are copied by value
console.log(a, b, c, d);
// a = 10 b = 'abc' c = 10 d = 'abc'
