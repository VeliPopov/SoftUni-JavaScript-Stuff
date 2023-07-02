// ▪ The destructuring assignment syntax makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// ▪ Оn the left-hand side of the assignment to define what values to unpack from the sourced variable.

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2


obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
